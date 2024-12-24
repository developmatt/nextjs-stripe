import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Order Completed Successfully!</h1>
        <p className="text-lg text-gray-700 mb-2">Thank you for your purchase. Your order has been processed successfully.</p>
        <p className="text-lg text-gray-700 mb-6">You will receive a confirmation email shortly.</p>
        <Link href="/" className="text-blue-500 hover:underline text-lg">
          Return to the homepage
        </Link>
      </div>
    </div>
  );
}