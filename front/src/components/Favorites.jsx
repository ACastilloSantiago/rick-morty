import { connect } from "react-redux";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { removeFav, addFav, orderCards, filterCards } from "../Redux/actions";
import { useState } from "react";
const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    console.log(event);
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>Mis Favs</h1>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="all">All</option>
      </select>
      {myFavorites.map((Pj) => {
        return (
          <div key={Pj.id}>
            <Card
              id={Pj.id}
              name={Pj.name}
              status={Pj.status}
              species={Pj.species}
              gender={Pj.gender}
              origin={Pj.origin}
              image={Pj.image}
            />
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);
