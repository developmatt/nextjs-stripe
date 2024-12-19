# Next.js 15 Stripe Integration Experiment 🚀💳

Welcome to my experiment where I'm integrating [Next.js 15](https://nextjs.org/) with [Stripe](https://stripe.com/), the popular payment platform. This project is a playground to explore how to handle payments, subscriptions, and billing functionalities using Stripe in a modern Next.js environment.

## 🚀 Project Setup

### 1. Clone the repository
Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/nextjs-stripe-integration.git
cd nextjs-stripe-integration
```

### 2. Install dependencies
Make sure you have Node.js installed. Then, run the following command to install all the necessary packages:

```bash
npm install
```

### 3. Create a Stripe account
If you don't already have a Stripe account, [sign up here](https://stripe.com). Once you have your account, you'll need to create API keys.

### 4. Configure environment variables
Create a `.env.local` file in the root of your project, and add the following Stripe keys (you can find them in the Stripe dashboard):

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-publishable-key-here
STRIPE_SECRET_KEY=your-secret-key-here
```

> **Important:** Make sure you don’t commit your secret key into version control! 🌱

### 5. Run the application locally

To start the development server, use the following command:

```bash
npm run dev
```

This will launch the app on `http://localhost:3000`. You can start testing the payment flow right away!

## ⚡️ Key Features in This Experiment

- **Stripe Checkout Integration**: A simple way to integrate Stripe’s hosted payment page.
- **Payment Intents**: Implementing Stripe's Payment Intent API for handling secure transactions.
- **Client-Side & Server-Side Communication**: Next.js API routes handle server-side logic to interact with the Stripe API.
- **Webhooks**: Experiment with Stripe webhooks to process events like payment success or failure.

## 🛠️ Technologies Used

- **Next.js 15** – A powerful React framework for building fast websites and apps.
- **Stripe** – A payment processing platform.
- **React** – To build the frontend UI.
- **Serverless Functions (Actions)** – Async functions executed on the server.

## 📄 What’s Inside

### 1. **Pages**

- `app/checkout/*`: Pages to trigger the checkout and to success message (when payment is concluded).

### 2. **Actions**

- `app/actions/create-stripe-session.ts`: Async function to generate Stripe sessions for checkout.

## 🧑‍💻 How to Test Payments

### 1. **Use Stripe’s Test Mode**
In test mode, you can use the following card numbers to simulate different scenarios:

- **Successful payment**: `4242 4242 4242 4242`
- **Card declined**: `4000 0000 0000 0002`
- **Card requiring authentication**: `4000 0025 0000 3155`

### 2. **Testing Webhooks**
To test Stripe webhooks locally, you can use [Stripe CLI](https://stripe.com/docs/stripe-cli) to forward events to your local server.

## 📝 Notes

- This project is intended for experimentation and learning purposes.
- It is production-ready, but you can use it as a base for your own Stripe integration.
- Don’t forget to replace the test keys with live keys when you're ready to go live! 🎉

## 📄 License

This project is licensed under the MIT License.

---

Feel free to reach out if you need any help or encounter issues! Happy experimenting! 😄

