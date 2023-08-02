import { addFav, removeFav } from "./actions";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-type";

let initialState = { myFavorites: [], allCharacters: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV: {
      return {
        ...state,
        myFavorites: state.myFavorites.filter((pj) => {
          return pj.id !== Number(action.payload);
        }),
      };
    }
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
            myFavorites: [...state.allCharacters].sort((a, b) => {
              if (a.id > b.id) {
                return 1;
              }
              if (a.id < b.id) {
                return -1;
              }
              return 0;
            }),
          };
        }
        case "D": {
          return {
            ...state,
            ...state.allCharacters,
            myFavorites: [...state.allCharacters].sort((a, b) => {
              if (a.id > b.id) {
                return -1;
              }
              if (a.id < b.id) {
                return 1;
              }
              return 0;
            }),
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
