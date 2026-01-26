import React from 'react';

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="list-container">
      {products.map((product) => (
        <div 
          key={product.id} 
          className={`product-row ${product.isDiscounted ? 'is-discounted' : ''}`}
        >
          <span className="product-info">
            {product.name} - ${product.price.toFixed(2)}
          </span>
          <button className="delete-btn" onClick={() => onDelete(product.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;