
const Agent = require("../Models/agent");
const bcrypt = require("bcrypt");

const Addagent = async (req, res) => {
    try {

        const {name, email, mobile, password} = req.body;

        if (!name || !email || !mobile || !password) {
            return res.status(400).send("Please fill all the fields");
        }

        const hashedpassword = await bcrypt.hash(password, 10);

        const newAgent = new Agent({
            name,
            email,
            mobile,
            password : hashedpassword
        });

        await newAgent.save();

        res.status(201).json({message : "Agent added successfully"});
        
    } catch (error) {

        res.status(500).json({message : "server error"})
        
    }
}


const getagent = async (req, res) => {
    try {
        
        const Agents = await Agent.find();
        res.json(Agents);

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


module.exports = {Addagent, getagent};