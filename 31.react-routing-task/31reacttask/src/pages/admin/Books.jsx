import { useState } from "react";
import toast from "react-hot-toast";

const AdminBooks = ({ data }) => {
  const [books, setBooks] = useState(data);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Silmək istədiyinizə əminsiniz?")) {
      setBooks(books.filter(b => b.id !== id));
      toast.success("Kitab silindi");
    }
  };

  const filtered = books.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input placeholder="Axtar..." onChange={e => setSearch(e.target.value)} style={{marginBottom: "20px", padding: "10px"}} />
      <table border="1" width="100%" style={{ borderCollapse: "collapse" }}>
        <thead><tr><th>ID</th><th>Ad</th><th>Müəllif</th><th>Qiymət</th><th>Əməliyyat</th></tr></thead>
        <tbody>
          {filtered.map(b => (
            <tr key={b.id}>
              <td>{b.id}</td><td>{b.title}</td><td>{b.author}</td><td>{b.price} AZN</td>
              <td><button onClick={() => handleDelete(b.id)} style={{color: "red"}}>Sil</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminBooks;