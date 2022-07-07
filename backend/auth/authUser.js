const jwt = require("jsonwebtoken");
const secret = process.env.ACCESS_TOKEN_SECRET;
const refreshSecret = process.env.REFRESH_TOKEN_SECRET;

exports.authenticateToken = (req, res, next) => {
    console.log("authUser: auth function fired .....", req.headers);
    const bearerHeader = req.headers["authorization"]; 
if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.session.token = bearerToken
    
     jwt.verify(req.session.token, secret, (err, payload) => {
      //  console.log("jwt.verify return is...", payload);
       if (!err && !payload) {
         console.log("authUser: !err && !payload");
         console.log("403: authUser L:17: unauthorised access");
       } else if (err) {
         console.log("authUser L:19: err", err);
      
         res.status(403).send(err);
       } else if (payload) {
         req.session.jwtPayload = payload;
 console.log("authUser",req.session.jwtPayload);
        next();
       }  
     
     });
   }
};

exports.authUser=()=>{

}