const User = require('../models/User');
const {generateToken} = require('../utils/jwtClient')
const Signup = async(req,res)=>{

    try{
        const {email,password,fullname} = req.body;
        // console.log(`Email: ${email}, Password: ${password}`);
        // console.log(`Fullname: ${fullname.firstname} ${fullname.lastname}`);

        const user = new User({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email: email,
            password: password
        });

        if(await User.findOne({email:email})){
            return res.status(400).json({success:false,message:'User already exists'});
        }
        else{
            await user.save();
            return  res.json({success:true,message:'Signup successful',jwt:generateToken(email)});
        }
    }
    catch(error){
        return res.status(400).json({success:false,message:error.message});
    }
}

module.exports = Signup;