import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosConfig';
import { FaTrash, FaEdit, FaShoppingCart, FaHeart, FaInfoCircle } from 'react-icons/fa';

const Categories = ({ onEdit, onAddToBasket, onToggleFav, favorites }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosInstance.get('/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error("Data çəkilərkən xəta:", err));
  }, []);

  const deleteCategory = (id) => {
    if(window.confirm("Silmək istəyirsiniz?")) {
      axiosInstance.delete(`/categories/${id}`)
        .then(() => setCategories(categories.filter(c => c.id !== id)));
    }
  };

  return (
    <div className="container">
      <h1>Categories List</h1>
      <table>
        <thead>
          <tr>
            <th>id</th><th>name</th><th>description</th><th>actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.description}</td>
              <td className="actions">
                <FaInfoCircle className="icon info" />
                <FaTrash className="icon delete" onClick={() => deleteCategory(cat.id)} />
                <FaEdit className="icon edit" onClick={() => onEdit(cat)} />
                <FaShoppingCart className="icon cart" onClick={() => onAddToBasket(cat)} />
                <FaHeart 
                  className={`icon heart ${favorites.some(f => f.id === cat.id) ? 'active' : ''}`} 
                  onClick={() => onToggleFav(cat)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;