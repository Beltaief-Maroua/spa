const crypto = require('crypto')

var createHash =   (data, salt = '') => {
  let shasum = crypto.createHash('sha256').update(data + salt).digest('hex');
  return shasum;
};
module.exports = {
      createHash,
      HashComparer : (userPassword , Stored_Password,salt)=>{
          return (Stored_Password === createHash(userPassword,salt))
      },
      RandomString : (length)=>{
        return crypto.randomBytes(length).toString('hex');
      }
      
}