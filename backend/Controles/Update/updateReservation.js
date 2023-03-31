const { connection } = require("../../ConfigurationDB/config")

module.exports = {
  updateReservation: (req, res) => {
    console.log(req.body);
    const query = `UPDATE reservation SET user_id="${req.body.user_id}",userName="$${req.body.userName}",packName="${req.body.packName}",serviceName="${req.body.serviceName}",totalPrice="${req.body.totalPrice}",date="${req.body.date}",hour="${req.body.hour}",payment="${req.body.payment}" WHERE id="${req.params.id}"`;
    connection.query(query, (error, result) => {
      error ? res.status(500).send(error) : res.status(200).send('Update Reservation OK');
    });
  },
};
