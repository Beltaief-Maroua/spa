const { connection } = require("../../ConfigurationDB/config")

module.exports = {
  updateCenter: (req, res) => {
    console.log(req.body);
    const query = `UPDATE center SET centerName="${req.body.centerName}",centerPhone="${req.body.centerPhone}",centerMail="${req.body.centerMail}",adress="${req.body.adress}",centerImage="${req.body.centerImage}",openingTime="${req.body.openingTime}" WHERE id="${req.params.id}"`;
    connection.query(query, (error, result) => {
      error ? res.status(500).send(error) : res.status(200).send('Update Center OK');
    });
  },
};
