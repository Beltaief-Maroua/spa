const { connection } = require("../../ConfigurationDB/config")

module.exports = {
  updatePack: (req, res) => {
    console.log(req.body);
    const query = `UPDATE pack SET packName="${req.body.packName}",packPrice="${req.body.packPrice}",packImage="${req.body.packImage}",packVideo="${req.body.packVideo}",packDescription="${req.body.packDescription}" WHERE id="${req.params.id}"`;
    connection.query(query, (error, result) => {
      error ? res.status(500).send(error) : res.status(200).send('Update Pack OK');
    });
  },
};