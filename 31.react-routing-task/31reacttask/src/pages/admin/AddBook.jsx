import React from 'react';
import toast from 'react-hot-toast';

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Yeni kitab uğurla əlavə edildi! (Simulyasiya)");
  };

  return (
    <div style={{ maxWidth: '600px' }}>
      <h2>Yeni Kitab Əlavə Et</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <input type="text" placeholder="Kitabın adı" required style={inputStyle} />
        <input type="text" placeholder="Müəllif" required style={inputStyle} />
        <textarea placeholder="Təsvir" rows="4" style={inputStyle}></textarea>
        <input type="number" placeholder="Qiymət" style={inputStyle} />
        <button type="submit" style={{ padding: '12px', backgroundColor: '#2ecc71', color: 'white', border: 'none', cursor: 'pointer' }}>Əlavə Et</button>
      </form>
    </div>
  );
};
const inputStyle = { padding: '10px', borderRadius: '5px', border: '1px solid #ddd' };
export default AddBook;