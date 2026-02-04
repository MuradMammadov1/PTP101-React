import React from 'react';

const Navbar = ({ setView, basketCount, favCount }) => (
    <nav className="navbar">
        <div className="nav-links">
            <span onClick={() => setView('categories')}>Categories</span>
            <span onClick={() => setView('add')}>Add Category</span>
            <span onClick={() => setView('favorites')}>Favorites <sup style={{color:'red'}}>{favCount}</sup></span>
            <span onClick={() => setView('basket')}>Basket <sup style={{color:'orange'}}>{basketCount}</sup></span>
        </div>
    </nav>
);

export default Navbar;