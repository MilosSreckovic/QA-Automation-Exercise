
import { test, expect, APIRequestContext } from '@playwright/test';

const baseUrl = 'https://automationexercise.com/api';

const password = 'Test123456';

// Generate unique test email
function generateEmail(): string {
  return `milos.autoqa.${Date.now()}.${Math.random().toString(36).slice(2, 8)}@test.com`;
}

// Create reusable test account
async function createAccount(
  request: APIRequestContext,
  email: string
): Promise<void> {
  const response = await request.post(`${baseUrl}/createAccount`, {
    form: {
      name: 'Milos AutoQA',
      email,
      password,
      title: 'Mr',
      birth_date: '10',
      birth_month: '10',
      birth_year: '1990',
      firstname: 'Milos',
      lastname: 'Sreckovic',
      company: 'QA Test Company',
      address1: 'Test Address 1',
      address2: 'Test Address 2',
      country: 'Serbia',
      zipcode: '11000',
      state: 'Belgrade',
      city: 'Belgrade',
      mobile_number: '0601234567',
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.responseCode).toBe(201);
  expect(body.message).toBe('User created!');
}

// Delete reusable test account
async function deleteAccount(
  request: APIRequestContext,
  email: string
): Promise<void> {
  const response = await request.delete(`${baseUrl}/deleteAccount`, {
    form: {
      email,
      password,
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.responseCode).toBe(200);
  expect(body.message).toBe('Account deleted!');
}

// Negative login test - no account required
test('POST verify negative login without email and password', async ({ request }) => {
  const response = await request.post(`${baseUrl}/verifyLogin`);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.responseCode).toBe(400);
  expect(body.message).toBe(
    'Bad request, email or password parameter is missing in POST request.'
  );
});

// Independent account creation test
test('POST create account', async ({ request }) => {
  const email = generateEmail();
  let accountCreated = false;

  try {
    await createAccount(request, email);
    accountCreated = true;
  } finally {
    if (accountCreated) {
      await deleteAccount(request, email);
    }
  }
});

// Independent valid login test
test('POST verify login with valid credentials', async ({ request }) => {
  const email = generateEmail();
  let accountCreated = false;

  try {
    await createAccount(request, email);
    accountCreated = true;

    const response = await request.post(`${baseUrl}/verifyLogin`, {
      form: {
        email,
        password,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User exists!');
  } finally {
    if (accountCreated) {
      await deleteAccount(request, email);
    }
  }
});

// Independent account deletion test
test('DELETE account', async ({ request }) => {
  const email = generateEmail();

  await createAccount(request, email);

  await deleteAccount(request, email);
});
