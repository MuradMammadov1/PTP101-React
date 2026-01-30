import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ClientBooks = ({ data }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "30px" }}>
      {data.map((product) => {
        const isFav = favorites.some(f => f.id === product.id);
        return (
          <div key={product.id} style={cardStyle}>
            <div style={{ position: "relative" }}>
              <img src={product.coverImageURL} alt={product.title} style={imgStyle} />
              <button onClick={() => toggleFavorite(product)} style={favBtnStyle}>
                {isFav ? <FaHeart color="red" size={20} /> : <FaRegHeart size={20} />}
              </button>
            </div>
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
            <p style={{ color: "#666", fontSize: "14px" }}>Rating: {product.rating}</p>
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>${product.price}</p>
            <button style={cartBtn}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

const cardStyle = { border: "1px solid #eee", padding: "15px", borderRadius: "8px", textAlign: "left" };
const imgStyle = { width: "100%", height: "200px", objectFit: "contain" };
const favBtnStyle = { position: "absolute", top: "10px", right: "10px", background: "none", border: "none", cursor: "pointer" };
const cartBtn = { width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#333", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" };

export default ClientBooks;