import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => (
  <div>
    <nav style={{ backgroundColor: "#1a1c23", padding: "15px 10%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h2 style={{ color: "white", margin: 0 }}>Panel</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/admin" end style={adminLinkStyle}>Dashboard</NavLink>
        <NavLink to="/admin/books" style={adminLinkStyle}>Products</NavLink>
        <NavLink to="/admin/add-product" style={adminLinkStyle}>Add Product</NavLink>
      </div>
    </nav>
    <div style={{ padding: "40px 10%" }}><Outlet /></div>
  </div>
);

const adminLinkStyle = ({ isActive }) => ({
  color: isActive ? "black" : "white",
  backgroundColor: isActive ? "white" : "transparent",
  textDecoration: "none", padding: "8px 20px", borderRadius: "20px", border: "1px solid white"
});
export default AdminLayout;