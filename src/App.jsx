import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProductCard from './pages/ProdcutCard'
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import NotFound from './pages/NotFound';

const App = () => {
  const location = useLocation();

  const product = {
    name: 'Google Pixel 9a',
    price: 39999,
    image:
      'https://imgs.search.brave.com/nG5fA7fvSHhsjM5vptUEPPFPpJ9iTehpT-KeCrgLI2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb25w/aXhlbC52bi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOS9n/b29nbGUtcGl4ZWwt/OWEtNC53ZWJw',
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const status = query.get('status');

    if (status === 'success') {
      alert(' Payment Successful!');
    } else if (status === 'cancel') {
      alert(' Payment Cancelled.');
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<ProductCard product={product} />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
