const ProductCard = (props) => {
  return (
    <div style={{ border: '1px solid black', padding: '15px', marginBottom: '10px' }}>
      <h2>Məhsul: {props.name}</h2>
      <p>Qiymət: {props.price} AZN</p>
      <p>Kateqoriya: {props.category}</p>
      <p>Təsvir: {props.description}</p>
    </div>
  );
};

export default ProductCard;