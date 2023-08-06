import { useState } from "react";
import validation from "../Validation/Validation";
import style from "./Form.module.css";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    // <div>

    // </div>
    <div className={style.div}>
      <div className={style.div}>
        <img
          className={style.img}
          src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
          alt="titulo"
        />
      </div>

      <form onSubmit={handlerSubmit} className={style.forminicio}>
        <h2 className={style.tituFor}>Iniciar Sesión</h2>
        <label className={style.labelIni}>Email:</label>
        <br />

        <input
          className={style.inputinicio}
          name="email"
          value={userData.email}
          type="text"
          onChange={handleChange}
          placeholder="Ingrese su email"
        />
        <br />

        <span className={style.validation}>{errors.email}</span>
        <br />
        <label className={style.labelIni}>Contraseña:</label>
        <br />

        <input
          className={style.inputinicio}
          name="password"
          value={userData.password}
          type="password"
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
        />
        <br />

        <span className={style.validation}>{errors.password}</span>

        <br />
        <button className={style.submit} type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};
export default Form;
