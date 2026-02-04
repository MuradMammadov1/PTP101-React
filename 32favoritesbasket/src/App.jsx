import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Basket from './pages/Basket';
import Favorites from './pages/Favorites';
import EditCategory from './pages/EditCategory';
import './App.css';

function App() {
  const [view, setView] = useState('categories'); 
  const [basket, setBasket] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentEdit, setCurrentEdit] = useState(null);

  // Səbətə əlavə etmə funksiyası
  const addToBasket = (product) => {
    const existing = basket.find((item) => item.id === product.id);
    if (existing) {
      setBasket(basket.map((item) => 
        item.id === product.id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setBasket([...basket, { ...product, count: 1 }]);
    }
  };

  // Sevimlilərə əlavə/çıxarma
  const toggleFavorite = (product) => {
    if (favorites.find((fav) => fav.id === product.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  return (
    <div className="App">
      <Navbar 
        setView={setView} 
        basketCount={basket.reduce((total, item) => total + item.count, 0)} 
        favCount={favorites.length} 
      />
      
      <div className="content">
        {view === 'categories' && (
          <Categories 
            onEdit={(cat) => { setCurrentEdit(cat); setView('edit'); }}
            onAddToBasket={addToBasket}
            onToggleFav={toggleFavorite}
            favorites={favorites}
          />
        )}
        
        {view === 'basket' && (
          <Basket basket={basket} setBasket={setBasket} />
        )}

        {view === 'favorites' && (
          <Favorites favorites={favorites} />
        )}

        {view === 'edit' && (
          <EditCategory 
            category={currentEdit} 
            onSave={() => setView('categories')} 
          />
        )}
      </div>
    </div>
  );
}

export default App;