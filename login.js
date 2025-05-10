const User = require('../models/User');
const {generateToken} = require('../utils/jwtClient')
const login = async (req,res)=>{
    try {
        const { email, password } = req.body;
        // Add your authentication logic here
        // Verify credentials against MongoDB
        // console.log(`Email: ${email}, Password: ${password}`);

        const result = await User.findOne({ email, password });

        if (!result) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
        else{
            return res.json({ success: true, message: 'Login successful',jwt:generateToken(email)});
        }

        
        
        // If successful:
        res.json({ success: true, message: 'Login successful' });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
}

module.exports = login;