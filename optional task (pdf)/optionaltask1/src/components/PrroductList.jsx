import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <React.Fragment>
      <ProductCard 
        name="Noutbuk" 
        price={2500} 
        category="Elektronika" 
        description="Yüksək performanslı iş kompüteri." 
      />
      <ProductCard 
        name="Masa" 
        price={120} 
        category="Mebel" 
        description="Ofis üçün geniş yazı masası." 
      />
      <ProductCard 
        name="Qulaqlıq" 
        price={80} 
        category="Aksesuar" 
        description="Simsiz səs izolyasiyalı qulaqlıq." 
      />
    </React.Fragment>
  );
};

export default ProductList;