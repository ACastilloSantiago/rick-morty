const validation = (data) => {
  const errors = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingrese un email valido!!";
  }
  if (data.email.length > 35) {
    errors.email = "No puede tener mas de 35 caracteres!";
  }
  if (!data.email) {
    errors.email = "El email no puede estar vacio!";
  }
  if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "La longitud minima es de 6 y la maxima es 10";
  }
  if (!/\d/.test(data.password)) {
    errors.password = "La contraseña debe contener al menos una numero.";
  }
  if (!data.password) {
    errors.password = "Su password no puede estar vacio!";
  }
  return errors;
};
export default validation;
