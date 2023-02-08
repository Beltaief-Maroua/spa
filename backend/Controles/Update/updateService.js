const { connection } = require("../../ConfigurationDB/config")

module.exports = {
  updateService: (req, res) => {
    console.log(req.body);
    const query = `UPDATE service SET serviceTitle="${req.body.serviceTitle}",serviceName="${req.body.serviceName}",servicePrice="${req.body.servicePrice}",serviceImage="${req.body.serviceImage}",serviceVideo="${req.body.serviceVideo}",serviceDescription="${req.body.serviceDescription}" WHERE id="${req.params.id}"`;
    connection.query(query, (error, result) => {
      error ? res.status(500).send(error) : res.status(200).send('Update Service OK');
    });
  },
};