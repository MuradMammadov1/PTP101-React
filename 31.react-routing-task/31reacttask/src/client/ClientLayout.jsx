import { Outlet } from "react-router-dom";
import Header from "./Header";

const ClientLayout = () => (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <main style={{ flex: 1, padding: "40px 10%" }}><Outlet /></main>
    <footer style={{ padding: "20px", textAlign: "center", borderTop: "1px solid #eee" }}>-Footer</footer>
  </div>
);
export default ClientLayout;