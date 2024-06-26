const JWT=require('jsonwebtoken');
const userModel = require('../Models/usersModel')

module.exports.requireSignIn=(req,res,next)=>{
    try{
        const decode=JWT.verify(req.headers.authorization,process.env.SECRET_KEY);
        req.user=decode;
        next();
    }
    catch(error){
        console.log(error)
    }
}
