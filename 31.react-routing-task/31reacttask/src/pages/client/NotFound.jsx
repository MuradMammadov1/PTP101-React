import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center", marginTop: "100px" }}>
    <h1>404</h1>
    <p>Səhifə tapılmadı!</p>
    <Link to="/" style={{ color: "#3498db" }}>Ana səhifəyə qayıt</Link>
  </div>
);

export default NotFound;