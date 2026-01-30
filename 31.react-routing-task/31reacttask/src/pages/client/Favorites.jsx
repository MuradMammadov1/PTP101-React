import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
  const { favorites, toggleFavorite, emptyAll } = useContext(FavoritesContext);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1>Favorites</h1>
        {favorites.length > 0 && (
          <button onClick={emptyAll} style={clearBtnStyle}>Clear All</button>
        )}
      </div>

      {favorites.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p style={{ fontSize: "18px", color: "#666" }}>Your wishlist is empty! Start adding your favorite products.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "30px" }}>
          {favorites.map((product) => (
            <div key={product.id} style={cardStyle}>
              <div style={{ position: "relative" }}>
                <img src={product.coverImageURL} alt={product.title} style={imgStyle} />
                <button onClick={() => toggleFavorite(product)} style={favBtnStyle}>
                  <FaHeart color="red" size={20} />
                </button>
              </div>
              <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
              <p style={{ fontWeight: "bold" }}>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const clearBtnStyle = { padding: "8px 15px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };
const cardStyle = { border: "1px solid #eee", padding: "15px", borderRadius: "8px" };
const imgStyle = { width: "100%", height: "200px", objectFit: "contain" };
const favBtnStyle = { position: "absolute", top: "10px", right: "10px", background: "none", border: "none", cursor: "pointer" };

export default Favorites;