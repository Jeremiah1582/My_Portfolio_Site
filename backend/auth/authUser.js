const jwt =require('jsonwebtoken')

exports.authenticateToken =(req, res, next)=>{
    const authHeader= req.headers['authorization']
    // const token = authHeader && authHeader.split(' ')[1] 
    console.log(req.headers);
    console.log(authHeader);
    console.log(req.header);
if (authHeader) {
    const token = authHeader.split(' ')[1]
    if (token==null) res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userResult) => {
        if (err)return res.sendStatus(403); //403 = access denied invalid token
        req.user = userResult;
        next()
    });
}

  
   
} 