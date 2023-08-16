let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  console.log("sd");
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  console.log(id);
  myFavorites = myFavorites.filter((favorite) => {
    console.log(favorite.id);
    favorite.id !== id; // con el + parseamos a number
  });
  return res.status(200).json(myFavorites);
  // return;
};
module.exports = { postFav, deleteFav };
