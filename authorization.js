const {verifyToken} = require('../utils/jwtClient');

const authorization = (req,res,next)=>{

    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({success:false,message:'Unauthorized'});
    }
    else{
        try{
            const decoded = verifyToken(token);
            console.log(decoded);
            next();
        }
        catch(error){
            return res.status(401).json({success:false,message:'Unauthorized'});
        }
    }
}

module.exports = authorization;