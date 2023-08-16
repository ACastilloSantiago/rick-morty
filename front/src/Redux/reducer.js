import { addFav, removeFav } from "./actions";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";

let initialState = { myFavorites: [], allCharacters: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload, // este capaz no va
      };

    case FILTER: {
      switch (action.payload) {
        case "all": {
          return { ...state, myFavorites: [...state.allCharacters] };
        }
        default:
          return {
            ...state,
            myFavorites: [...state.allCharacters].filter((pj) => {
              // console.log(pj.gender);
              // console.log(state.payload);
              // console.log(pj.gender == state.payload);
              return pj.gender === action.payload;
            }),
          };
      }
    }
    case ORDER: {
      switch (action.payload) {
        case "A": {
          return {
            ...state,
            myFavorites: [...state.allCharacters].sort((a, b) => a.id - b.id),
          };
        }
        case "D": {
          return {
            ...state,

            myFavorites: [...state.allCharacters].sort((a, b) => b.id - a.id),
          };
        }
        default:
          return { ...state };
      }
    }
    default:
      return { ...state };
  }
};
export default reducer;
