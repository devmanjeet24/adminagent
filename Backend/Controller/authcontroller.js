const bcrypt = require("bcrypt");
const user = require("../Models/user");

export const Register = async (req, res) => {
    try {

        const {name, email, password} = req.body;

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