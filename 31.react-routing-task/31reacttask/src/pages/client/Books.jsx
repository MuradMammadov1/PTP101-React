import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ClientBooks = ({ data }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      {data.map(product => {
        const isFav = favorites.some(f => f.id === product.id);
        return (
          <div key={product.id} style={{ border: "1px solid #eee", padding: "15px", borderRadius: "8px", position: "relative" }}>
            <button onClick={() => toggleFavorite(product)} style={{ position: "absolute", top: "10px", right: "10px", background: "none", border: "none", cursor: "pointer" }}>
              {isFav ? <FaHeart color="red" size={20} /> : <FaRegHeart size={20} />}
            </button>
            <img src={product.image} alt="" style={{ width: "100%", height: "200px", objectFit: "contain" }} />
            <h4 style={{ margin: "10px 0" }}>{product.title}</h4>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>
            <button style={{ width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "4px" }}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};
export default ClientBooks;