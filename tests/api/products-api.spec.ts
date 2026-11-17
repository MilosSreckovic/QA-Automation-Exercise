
import { test, expect } from '@playwright/test';

const baseUrl = 'https://automationexercise.com/api';

test('GET all products returns valid product list', async ({ request }) => {
  const response = await request.get(`${baseUrl}/productsList`);

  console.log('HTTP STATUS:', response.status());
  console.log('RESPONSE BODY:', (await response.text()).slice(0, 500));

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.responseCode).toBe(200);
  expect(Array.isArray(body.products)).toBe(true);
  expect(body.products.length).toBeGreaterThan(0);

  for (const product of body.products) {
    expect(product.id).toEqual(expect.any(Number));
    expect(product.id).toBeGreaterThan(0);

    expect(product.name).toEqual(expect.any(String));
    expect(product.name.trim().length).toBeGreaterThan(0);

    expect(product.price).toEqual(expect.any(String));
    expect(product.price.trim().length).toBeGreaterThan(0);

    expect(product.brand).toEqual(expect.any(String));
    expect(product.brand.trim().length).toBeGreaterThan(0);
  }
});

test('POST products list returns method not supported', async ({ request }) => {
  const response = await request.post(`${baseUrl}/productsList`);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.responseCode).toBe(405);
  expect(body.message).toBe(
    'This request method is not supported.'
  );
});
