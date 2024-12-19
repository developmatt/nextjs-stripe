'use server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '')

export async function createStripeSession() {
  const params = {
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'This is my new product',
          },
          //Price in cents
          unit_amount: 1000,
        },
        //Quantity of the product
        quantity: 3,
      },
    ],
    success_url: `http://localhost:3000/checkout/success`,
    cancel_url: `http://localhost:3000/checkout/error`,
  };

  //@ts-expect-error - This is a valid call
  const session = await stripe.checkout.sessions.create(params)
  return JSON.stringify(session)
}