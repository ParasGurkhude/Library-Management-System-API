const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const {User} = require("../models/user.model")

exports.register = async(req, res) => {
    try {
        const {username, password, name, email } = req.body;
        const user = new User({username, password, name, email });
        await user.save();
        res.status(201).json({message: "User registered successfully!"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 

exports.login = async(req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user) return res.status(400).json({message: "User not found"});

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(400).json({message: "Invalid password"})
            
        const token = jwt.sign({ id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: "1h"})
        res.json({token})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 