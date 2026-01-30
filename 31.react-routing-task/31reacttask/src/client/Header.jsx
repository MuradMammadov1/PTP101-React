import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

const Header = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <header style={headerStyle}>
      <nav style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <NavLink to="/" style={navBtn}>Home</NavLink>
        <NavLink to="/about" style={navBtn}>About</NavLink>
        <NavLink to="/books" style={navBtn}>Products</NavLink>
        <NavLink to="/favorites" style={navBtn}>
          Favorites <span style={badgeStyle}>{favorites.length}</span>
        </NavLink>
        <NavLink to="/cart" style={navBtn}>Cart</NavLink>
        <NavLink to="/admin" style={adminBtn}>Admin</NavLink>
      </nav>
    </header>
  );
};

// Videodakı dizayna yaxın stillər
const headerStyle = { display: "flex", justifyContent: "flex-end", padding: "20px 10%", borderBottom: "1px solid #eee" };
const navBtn = ({ isActive }) => ({
  textDecoration: "none", color: "#333", padding: "8px 20px", borderRadius: "20px",
  backgroundColor: isActive ? "#eee" : "transparent", border: "1px solid #ddd"
});
const adminBtn = { ...navBtn({}), backgroundColor: "#f8d7da", color: "#721c24" };
const badgeStyle = { backgroundColor: "red", color: "white", borderRadius: "50%", padding: "2px 7px", fontSize: "12px", marginLeft: "5px" };

export default Header;