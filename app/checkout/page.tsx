"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleClick = async () => {
    const checkoutSession = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 200 }),
    }).then((res) => res.json());

    router.replace(checkoutSession.url);
  };
  return (
    <>
      <h1>This is checkout</h1>

      <button onClick={handleClick}>Handle submit</button>
    </>
  );
}
