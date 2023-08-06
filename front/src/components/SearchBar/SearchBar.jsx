import { useState } from "react";
import style from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const [id, setid] = useState("");

  const handleChange = (event) => {
    setid(event.target.value);
  };

  return (
    <div className={style.divSearch}>
      <input
        className={style.inputSearch}
        id="agregar"
        type="search"
        value={id}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onSearch(id);
          // setid("");
        }}
      >
        Agregar
      </button>
    </div>
  );
};
export default SearchBar;
