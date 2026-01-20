const Footer = (props) => {
  return (
    <footer>
      <hr />
      <p>Copyright {props.year} - Müəllif: {props.author}</p>
    </footer>
  );
};

export default Footer;