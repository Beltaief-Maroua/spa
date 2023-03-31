const jwt=require('jsonwebtoken')
// const {connection}= require('../../ConfigurationDB/config')

exports.isAuth = async (req, res, next) => {
  const token = req.header('token');
  try {
    if (!token) {
      res.status(400).send('you are not authorised');
    } else {
      const decode = jwt.verify(token, 'hello');
      const [rows, fields] = await connection.execute(
        'SELECT * FROM admin WHERE id = ?',
        [decode.id]
      );
      if (rows.length === 0) {
        res.status(401).send('Invalid token');
      } else {
        req.user = rows[0];
        next();
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
};
