// About.jsx
export const About = () => (
  <div style={{ maxWidth: '800px', margin: '50px auto' }}>
    <h2>Platforma haqqında</h2>
    <p>Book Explorer, kitabsevərlər üçün hazırlanmış geniş kataloqlu bir kitab platformasıdır.</p>
  </div>
);

// Contact.jsx
export const Contact = () => (
  <div style={{ maxWidth: '500px', margin: '50px auto' }}>
    <h2>Bizimlə Əlaqə</h2>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input type="text" placeholder="Adınız" style={{ padding: '10px' }} />
      <input type="email" placeholder="Email" style={{ padding: '10px' }} />
      <textarea placeholder="Mesajınız" rows="5" style={{ padding: '10px' }}></textarea>
      <button type="submit" style={{ padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none' }}>Göndər</button>
    </form>
  </div>
);