import React from 'react';
import { XCircle } from 'lucide-react';

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <XCircle className="text-red-500 mx-auto mb-4" size={48} />
        <h2 className="text-2xl font-bold text-red-600 mb-2">Payment Cancelled</h2>
        <p className="text-gray-700 mb-4">Your payment was not completed. Please try again or contact support.</p>
        <a href="/" className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition">Return Home</a>
      </div>
    </div>
  );
};

export default Cancel;
