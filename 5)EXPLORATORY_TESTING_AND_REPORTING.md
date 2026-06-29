The goal of this exploratory session was to test the main ecommerce user journey from a real users perspective, with a couple of focuses. Product discovery through search and casual browsing on them, cart behavior mostly adding products into cart, checkout flow, and general usability (sign up and login) are some subject that some automated tests might not catch that easy or it would take some time. My idea was to lean on the things I have mentioned in document TestStrategyAndPlaning, and also to cover different severeties. Continuing that approach I have done different types of test for API and E2@ tests as well, trying to cover as much different things as I can. 



### Observations and some defect findings
Overall, the application supports the main e-commerce flow, but there are a few areas where the user experience and reliability could be improved as well as some flaws and defects that I come into during my short exploration session. 



### Issue 1: Checkout flow depends on user state
Area: Cart / Log in / Checkout; Severity: Medium ; Priority: High
Subject of the test – general usibility/checkout
The checkout is highly dependent on whether the user is already logged in. If a user adds products to the cart first, without logging in and then tries to proceed to checkout, the application redirects the user to login/signup.
- This is expected behavior, but it is also a risky area because the cart state must be preserved and remain exactly the saome after login. If the cart is lost after authentication, the user may abandon the purchase.
Solution:
I would mark this as high priority because checkout is one of the most important flows in an ecommerce application. Even if the current behavior is intended, and the user must be logged in, it should be covered by E2E automation and exploratory testing.



### Issue 2: Product discovery through search and casual browsing on them
Area: Product Search; Severity: Low; Priority: Low
Subject of the test - 
Search is one of the main ways users find products, but it should be checked with different types of input: valid product names, partial names, empty input, mixed case, and special characters. Current state is that if you search for a certain subject: 
Test word 1 - Top  In the results some products that do not include word on their product name appear in the results
Test word 2 – Dress  In the results some products that do not include word on their product name (but they are from dress category) appear in the results

- If search results are inconsistent or unclear with rules, users may find hard to find exact product. In a real life ecommerce system, this can directly impact conversion.
Solution:
I would treat this as a low priority or severty, because the core application can still be used through product browsing and searching. The products that do not not include exact search in the results by the name of the product can be used as a marketing placement or some other strategy. However, I would prioritize it as low because search is important for usability and should behave predictably and by following the rules.



### Issue 3: Cart behavior
Area: Cart; Severity: High; Priority: High
Subject of the test -
When products are added to the cart, the cart should clearly show the correct product name, price, quantity, and total. Now you can type in or use the up/down arrows on Quantity input field to put unrealistic values (huge numbers with more than 20 digits or even 0 as a value). 
- If the cart displays wrong product details or quantity, the user may lose trust in the application. This is especially important before checkout. One of the key things is that the quantity is related to the actual quantity of the goods. Negative values do not belong in the cart, as well as the possibility of being able to type in that value in quantity filed in general.
Solution:
I would give this high priority because cart accuracy is directly connected to the purchase flow. This is an area where even small mismatches can create user confusion and malfunction of the whole system.



### Conclusion:
From an automation perspective, I would cover the most important parts of these flows with a small number of E2E tests, while using API tests for broader validation and negative scenarios. Exploratory testing would remain useful for checking usability, unexpected issues and visual feedback as a check to E2E and API testing.
