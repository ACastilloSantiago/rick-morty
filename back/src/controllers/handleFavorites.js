let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  // console.log("sd");
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  // console.log(id);
  // console.log(myFavorites);
  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);
  // con el + del id parseamos a number el params
  // console.log(myFavorites);
  return res.status(200).json(myFavorites);
  // return;
};
module.exports = { postFav, deleteFav };
