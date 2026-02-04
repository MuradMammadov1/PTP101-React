import React from 'react';

const Favorites = ({ favorites }) => {
    return (
        <div className="container">
            <h1>Favorites</h1>
            {favorites.length === 0 ? <p>Hələ heç nə yoxdur.</p> : (
                favorites.map(fav => (
                    <div key={fav.id} style={{padding: '10px', borderBottom: '1px solid #333'}}>
                        {fav.name} <span style={{color: 'red'}}>❤️</span>
                    </div>
                ))
            )}
        </div>
    );
};

export default Favorites;