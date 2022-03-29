const express = require("express")
const app = express()

const PORT = 5000



app.get("/home",(res, req)=>{})


app.listen(PORT, ()=>{
console.log('you are connected to port'+ PORT);
})
