"use client";
import { useRouter } from "next/navigation";
import { createStripeSession } from "../actions/create-stripe-session";

export default function Page() {
  const router = useRouter();

  const handleClick = async () => {
    const checkoutSession = await createStripeSession().then((res) => JSON.parse(res));
    router.replace(checkoutSession.url);
  };
  return (
    <>
      <h1>This is checkout</h1>

      <button onClick={handleClick}>Handle submit</button>
    </>
  );
}
