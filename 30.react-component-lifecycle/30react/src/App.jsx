import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';

// Senden gelen JSON verisini başlangıç değeri olarak kullanıyoruz
const initialData = {
  "products": [
    { "id": 1, "name": "Product 1", "price": 10.99, "isDiscounted": false },
    { "id": 2, "name": "Product 2", "price": 15.99, "isDiscounted": true },
    { "id": 3, "name": "Product 3", "price": 7.99, "isDiscounted": false }
  ]
};

function App() {
  const [products, setProducts] = useState(initialData.products);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Arama filtresi
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isLoggedIn) {
    return (
      <div className="auth-screen">
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>
        <p>You should login to see products</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <h2>Welcome</h2>
          <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      </header>

      <ProductForm onAdd={addProduct} />

      <div className="search-section">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <ProductList 
        products={filteredProducts} 
        onDelete={deleteProduct} 
      />
    </div>
  );
}

export default App;