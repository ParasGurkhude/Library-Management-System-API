const {User} = require("../models/user.model");

exports.getAllUsers = async (req, res) =>{
    try {
        const users = await User.find().select("-password");
        if(!user) return res.status(400).json({message: "User not found"}); 
        res.json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getUsersById = async (req, res) =>{
    try {
        const users = await User.findById(req.params.id).select("-password");
        if(!user) return res.status(400).json({message: "User not found"}); 
        res.json(user)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateUser = async (req, res) =>{
    try {
        const {name, email , password} = res.body;
        const user = await User.findById(res.params.id);
        if(!user) return res.status(404).json({message: "User not found"}); 

        if(name)  user.name = name;
        if(email) user.email = email;
        if(password) user.password = password;
        await user.save();
        res.json({message: "User updated successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteUser = async(req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({message: "User deleted successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
        
    }
}