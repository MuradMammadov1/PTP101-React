import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
  return <h2>Book Detail: {id}</h2>;
}

export default BookDetail;
