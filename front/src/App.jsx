import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
const URL_BASE = "https://rym2-production.up.railway.app/api/character/";
const API_KEY = "key=henrym-acastillosantiago";
function App() {
  const location = useLocation();
  const ruta = location.pathname === "/";
  const [characters, setCharacters] = useState([]);
  function onSearch(id) {
    axios(`${URL_BASE}${id}?${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "sattog@gmail.com";
  const PASSWORD = "1234";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  return (
    <div>
      {location !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
