import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductCard from './pages/ProdcutCard';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

const App = () => {
  const product = {
    name: 'Google Pixel 9a',
    price: 39999,
    image: 'https://imgs.search.brave.com/nG5fA7fvSHhsjM5vptUEPPFPpJ9iTehpT-KeCrgLI2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb25w/aXhlbC52bi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOS9n/b29nbGUtcGl4ZWwt/OWEtNC53ZWJw',
  };

  return (
    <Routes>
      <Route path="/" element={
        
          <ProductCard product={product} />
      
      } />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
    </Routes>
  );
};

export default App;
