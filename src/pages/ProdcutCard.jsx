import React from 'react';
import { axiosInstance } from '../utils/axios';

const ProductCard = ({ product }) => {
  const handleCheckout = async () => {
    try {
      const res = await axiosInstance.post('/pay-now', { product });
      if (res.data?.url) {
        window.location.href = res.data.url;
      } else {
        console.error('No URL returned from backend');
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-6 md:p-12 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8">
   
      <div className="w-full md:w-1/2">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

   
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">{product.name}</h2>

        <p className="text-gray-600 text-base leading-relaxed">
          The <span className="font-semibold text-zinc-800">Google Pixel 9a</span> combines advanced AI features with stunning camera
          quality, smooth performance, and long-lasting battery life — all in a sleek, modern design.
          Perfect for photography lovers and Android enthusiasts.
        </p>

        <p className="text-2xl font-semibold text-green-600">&#8377;{product.price}</p>

        <button
          onClick={handleCheckout}
          className="px-8 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 shadow-md transition duration-300 hover:scale-105"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
