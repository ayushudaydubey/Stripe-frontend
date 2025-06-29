import React from 'react';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
        <p className="text-gray-700 mb-4">Thank you for your purchase. Your order is being processed.</p>
        <a href="/" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition">Go to Home</a>
      </div>
    </div>
  );
};

export default Success;
