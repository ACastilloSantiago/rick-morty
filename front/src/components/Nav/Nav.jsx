import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
const Nav = ({ onSearch }) => {
  return (
    <div className={style.center}>
      <div className={style.nav}>
        <SearchBar onSearch={onSearch} />
      </div>
      <div className={style.bt}>
        <button className={style.bt1}>
          <Link to="/home">Home</Link>
        </button>
        <button className={style.bt2}>
          <Link to="/about">About</Link>
        </button>
        <button className={style.bt3}>
          <Link to="/favorites">Favorites</Link>
        </button>
      </div>
    </div>
  );
};
export default Nav;
