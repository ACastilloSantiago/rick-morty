import { useState, useEffect, useNavigate } from "react";
import validation from "./Validation";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
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
      />
      <br />

      {/* <span>{validation(userData.email)}</span> */}
      <br />
      <label>Password:</label>
      <input
        name="password"
        value={userData.password}
        type="text"
        onChange={handleChange}
      />
      <br />

      {/* <span>{validation(text)}</span> */}

      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
