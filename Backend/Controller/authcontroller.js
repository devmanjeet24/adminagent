const bcrypt = require("bcrypt");
const user = require("../Models/user");
const jwt = require("jsonwebtoken");

 const Register = async (req, res) => {
    try {

        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            return res.status(400).send("Please fill all the fields");
        }

        const existinguser = await user.findOne({email});

        if (existinguser) {
            return res.status(400).send("user already exits");
        }

        const hashpassword = await bcrypt.hash(password, 10);

        const newuser = new user(
            {
                name,
                email,
                password : hashpassword,
                role : "admin"
            }
        );

        await newuser.save();


        
    } catch (error) {
        res.status(400).send(error);
    }
}



const Login = async (req, res) => {

    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).send("Please fill all the fields");
    }

    try {

        const loginuser = await user.findOne({email});

        if (!loginuser) {
            return res.status(404).send("user not found");
        }

        const isMatch = await bcrypt.compare(password, loginuser.password);

        if (!isMatch) {
            return res.status(401).send("Invalid credentials");
        }

        const token = jwt.sign({id : loginuser._id}, process.env.JWT_SECRET, {
            expiresIn : "1d"
        });

        res.status(200).json({token});
       
        
    } catch (error) {

        res.status(500).json({"server error" : error});
        
    }

    

}


module.exports = { Register, Login };