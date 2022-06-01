const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
    const bearerHeader = req.headers["Authorization"]; 
if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token= bearerToken
    console.log("authenticateToken func", bearerToken);
     jwt.verify(req.token, "secret", (err, payload) => {
       console.log("jwt.verify return is...", payload);
       if (!err && !payload) {
         res.sendStatus(403);
       } else if (err) {
         res.sendStatus(403).send(err);
       } else if (payload) {
         req.jwtPayload = payload;
         next();
       }
     });
   }
};

//    try {
//    const authHeader = await req.headers["authorization"];
//     const token = authHeader && authHeader.split(' ')[1]
//     console.log("authUser: req.headers is ...",req.headers[1]);
//     console.log("authUser, authHeader is...", authHeader);
//     console.log("authUser: req.header is ...",req.header);
//     console.log("authUser: token is ...",token);
//      console.log(req.body);
// // if (authHeader) {
// //     const token = authHeader.split(' ')[1]
//     if (token==null) {console.log("token == null");
//         return res.sendStatus(401)};

//     await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userResult) => {
//         if (err)return res.sendStatus(403); //403 = access denied invalid token
//         req.user = userResult;
//         console.log("req.user is ", userResult);
// next();
// });
// }
//    } catch (error) {
//        throw error
//    }
