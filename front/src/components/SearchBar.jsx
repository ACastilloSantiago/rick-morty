import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [id, setid] = useState("");

  const handleChange = (event) => {
    setid(event.target.value);
  };

  return (
    <div>
      <input id="agregar" type="search" value={id} onChange={handleChange} />
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
