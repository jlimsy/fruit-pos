# fruit-pos

A Point-of-Sale system for a fruit stall, built with MERN-stack.
Live site: https://fruit-pos.onrender.com/

## Features

### Buyer User Story

1. Buyer can view fruits that are in stock - with price and available stock number.
2. Buyer can click on the fruits to add them to cart.
3. Buyer can increase or decrease the number of fruits in the cart, and view individual and total price of the fruits in the cart.
4. Upon successful checkout of cart, buyer receives a notification.
5. Buyer can view remaining stock immediately after checkout.
6. Buyer can view order history sorted by latest order first.

### Owner User Story

1. Owner has access to Owner tab in the navigation menu.
2. Owner access allows the following features:
   - Owner can view all pending orders.
   - Owner can add new fruits into fruit inventory.
   - Owner can view Sales Dashboard.
3. In Sales Dashboard, owner can view:
   - Overall revenue made
   - Overall number of fruits sold
   - Revnue made per day
   - Breakdown of fruits sold per day

### Authentication User Story

#### Sign Up

1. If required fields are empty, error messages remind user to fill in the required fields.
2. If user email exists in database, error message informs user that account exists.

#### Login

1. If required fields are empty, error messages remind user to fill in the required fields.
2. If login credentials are incorrect, error message informs user that crednetials are incorrect.

---

#### Technology

MERN Stack - MongoDB, Express, React, Node

#### Libraries

- Authentication: JWT with bcrypt
- Forms and validations: react-hook-form
- Styling: Shadcn, Tailwind CSS
- Charts: recharts
