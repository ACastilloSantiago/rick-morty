import { useState } from "react";
export default function SearchBar({ onSearch }) {
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
}
