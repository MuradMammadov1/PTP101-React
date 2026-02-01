import { Routes, Route } from "react-router-dom";

import ClientLayout from "./layout/ClientLayout";
import AdminLayout from "./layout/AdminLayout";

// client
import Home from "./pages/client/Home";
import About from "./pages/client/About";
import Books from "./pages/client/Books";
import BookDetail from "./pages/client/BookDetail";
import Favorites from "./pages/client/Favorites";
import Contact from "./pages/client/Contact";
import NotFound from "./pages/client/NotFound";

// admin
import Dashboard from "./pages/admin/Dashboard";
import AdminBooks from "./pages/admin/Books";
import AddBook from "./pages/admin/AddBook";

function App() {
  return (
    <Routes>
      {/* CLIENT */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="books" element={<AdminBooks />} />
        <Route path="add-book" element={<AddBook />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
