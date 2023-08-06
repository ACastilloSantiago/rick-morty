import { Link } from "react-router-dom";
import { removeFav, addFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.module.css";
const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  removeFav,
  addFav,
  myFavorites,
}) => {
  // log;
  let props = { id, name, status, species, gender, origin, image };
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props); // CON TERNARIO
    setIsFav(!isFav);
    // if (isFav) {
    //   setIsFav(false);
    //   removeFav(id);

    // } else {
    //   setIsFav(true);
    //   addFav(props);
    // }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={style.div}>
      <hr />
      {isFav ? (
        <button className={style.btn} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.btn} onClick={handleFavorite}>
          🤍
        </button>
      )}
      <img className={style.image} src={image} alt={name} />
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h3 className={style.name}>{name}</h3>
      </Link>
      <div className={style.data}>
        <h2>Species:{species}</h2>
        <h2>Gender:{gender}</h2>
        <h2>Status:{status}</h2>
        <h2>Origin:{origin.name}</h2>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFav: (id) => {
      dispatch(removeFav(id)); /// { type: ADD_FAV, payload: personaje }
    },
    addFav: (personaje) => {
      dispatch(addFav(personaje)); //! { type: REMOVE_FAV, payload: id }
    },
  };
};
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);

// const Card ({ id, name, status, species, gender, origin, image, onClose ,removeFav,addFav}) => {
//   // log;
//   const [isFav,setIsFav] = useState(false);
//   const handleFavorite = () => {
//     if (isFav) {
//       setIsFav(false)
//       removeFav(id)
//     } else {
//       setIsFav(true)
//       addFav()
//     }
//   }
//   return (
//     <div>
//       <hr />
//       <button onClick={() => onClose(id)}>X</button>
//       <Link to={`/detail/${id}`}>
//         <h3 className="card-name">{name}</h3>
//       </Link>
//       <h2>Status:{status}</h2>
//       <h2>Species:{species}</h2>
//       <h2>Gender:{gender}</h2>
//       <h2>Origin:{origin.name}</h2>
//       <img src={image} alt={name} />
//     </div>
//   );
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFav: () => { dispatch(removeFav()) },
//     addFav: ()=>{dispatch(addFav())}

//   }
// }
// export default connect(null,mapDispatchToProps)(Card);
