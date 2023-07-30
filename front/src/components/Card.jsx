import { Link } from "react-router-dom";
export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  // log;
  // const [name] = props.origin;
  return (
    <div>
      <hr />
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h3 className="card-name">{name}</h3>
      </Link>
      <h2>Status:{status}</h2>
      <h2>Species:{species}</h2>
      <h2>Gender:{gender}</h2>
      <h2>Origin:{origin.name}</h2>
      <img src={image} alt={name} />
    </div>
  );
}
