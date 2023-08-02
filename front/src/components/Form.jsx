import { useState } from "react";
import validation from "./Validation";
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
    <form onSubmit={handlerSubmit}>
      <label>Email:</label>
      <input
        name="email"
        value={userData.email}
        type="text"
        onChange={handleChange}
        placeholder="Ingrese su email"
      />
      <br />

      <span>{errors.email}</span>
      <br />
      <label>Password:</label>
      <input
        name="password"
        value={userData.password}
        type="password"
        onChange={handleChange}
        placeholder="Ingrese su password"
      />
      <br />

      <span>{errors.password}</span>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
