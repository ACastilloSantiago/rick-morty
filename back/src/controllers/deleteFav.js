const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.destroy({ where: { id } });
    const allFavs = await Favorite.findAll();
    return res.status(200).send(allFavs);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
module.exports = deleteFav;
