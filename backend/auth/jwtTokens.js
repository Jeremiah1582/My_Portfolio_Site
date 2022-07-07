const jwt = require("jsonwebtoken");
const secret = process.env.ACCESS_TOKEN_SECRET;
const refreshSecret = process.env.REFRESH_TOKEN_SECRET;

exports.generateToken = (userId) => {

  return jwt.sign({ userId }, secret, { expiresIn: 300000 * 5 });
 
};

exports.refreshToken=(userId)=>{
  return jwt.sign({userId}, refreshSecret);
}