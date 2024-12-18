import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '')

export async function POST() {

  const price = await stripe.prices.create({
    currency: 'usd',
    unit_amount: 1000,
    product_data: {
      name: 'Gold Plan',
    },
  });

  console.log(">>>price", price)

  const params = {
    mode: 'payment',
    line_items: [
      {
        price: price.id,
        quantity: 10
      },
    ],
    success_url: `http://localhost:3000/checkout/success`,
    cancel_url: `http://localhost:3000/checkout/error`,
  };

  //@ts-expect-error - I'm not sure why this is throwing an error
  const session = await stripe.checkout.sessions.create(params)
  return Response.json(session)
}