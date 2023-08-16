import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { URL_BASE, API_KEY } from "../../App";
const Detail = () => {
  const { id } = useParams();
  //   console.log(id);
  const [character, setCharacter] = useState({});

  //! useEffect con servidor local
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  //! useEffect con api de henry
  // useEffect(() => {
  //   axios(`${URL_BASE}${id}?${API_KEY}`).then(({ data }) => {
  //     if (data.name) {
  //       setCharacter(data);
  //     } else {
  //       window.alert("No hay personajes con ese ID");
  //     }
  //   });
  //   return setCharacter({});
  // }, [id]);
  //////////////
  // const { name, status, species, gender, origin, image } = character;
  // console.log(character.origin.name);
  console.log(character);
  return (
    <div>
      <h1>{character.name && character.name}</h1>
      <h2>Status|{character.status && character.status}</h2>
      <h2>Species|{character.species && character.species}</h2>
      <h2>Gender|{character.gender && character.gender}</h2>
      <h2>Origin|{character.origin?.name && character.origin?.name}</h2>
      {/* <h2>Origin:{origin.name}</h2> */}
      <img
        src={character.image && character.image}
        alt={character.name && character.name}
      />
    </div>
  );
};
export default Detail;
