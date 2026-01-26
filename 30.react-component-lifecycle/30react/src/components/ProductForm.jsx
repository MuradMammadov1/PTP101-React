import React, { useState } from 'react';

const ProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ name: '', price: '', isDiscounted: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;
    onAdd({ ...formData, price: parseFloat(formData.price) });
    setFormData({ name: '', price: '', isDiscounted: false });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Product name" 
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={formData.price}
        onChange={(e) => setFormData({...formData, price: e.target.value})}
      />
      <label>
        <input 
          type="checkbox" 
          checked={formData.isDiscounted}
          onChange={(e) => setFormData({...formData, isDiscounted: e.target.checked})}
        /> 
        Discounted
      </label>
      <button type="submit" className="add-btn">Add Product</button>
    </form>
  );
};

export default ProductForm;