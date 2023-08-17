const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

// Asyn-await
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, species, origin, image, status } = (
      await axios.get(URL + Number(id))
    ).data;
    const character = {
      name,
      gender,
      species,
      origin,
      image,
      status,
      id: +id,
    };
    if (character.name) {
      res.status(200).json(character);
    } else {
      res.status(404).send("Not Found");
    }
  } catch (reason) {
    res.status(500).send(reason.message);
  }
};
// module.exports = getCharById;

// Promesas
// const getCharById = (req, res) => {
//   const { id } = req.params;

//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//       const { name, gender, species, origin, image, status } = data;
//       if (name) {
//         const character = { name, gender, species, origin, image, status, id };
//         res.status(200).json(character);
//       } else {
//         res.status(404).send("Not Found");
//       }
//     })
//     .catch((reason) => {
//       res.status(500).send(reason.message);
//     });
// };
module.exports = getCharById;
