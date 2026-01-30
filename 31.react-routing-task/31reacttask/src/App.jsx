import { Routes, Route } from "react-router-dom";
import ClientLayout from "./layout/client/ClientLayout";
import AdminLayout from "./layout/admin/AdminLayout";
import Home from "./pages/client/Home";
import ClientBooks from "./pages/client/Books";
import Favorites from "./pages/client/Favorites";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/AdminProducts";

function App() {
  return (
    <Routes>
      {/* İstehlakçı tərəfi */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<ClientBooks data={products} />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>

      {/* Admin tərəfi */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard data={products} />} />
        <Route path="books" element={<AdminProducts data={products} />} />
      </Route>
    </Routes>
  );
}