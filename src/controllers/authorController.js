const Author = require("../models/author.model")

exports.createAuthor = async(req, res)=>{
    try {
        const author = new Author(req.body);
        await author.save()
        res.status(201).json(author)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getAllAuthors = async (req, res) =>{
    try {
        const author = await Author.find().select("-password");
        if(!author) return res.status(400).json({message: "Author not found"}); 
        res.json(author)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getAuthorById = async (req, res) =>{
    try {
        const author = await Author.findById(req.params.id).select("-password");
        if(!author) return res.status(400).json({message: "Author not found"}); 
        res.json(author)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateAuthor = async (req, res) =>{
    try {
        const {name, biography, dateOfBirth, nationality} = res.body;
        const author = await Author.findById(res.params.id);
        if(!author) return res.status(404).json({message: "Author not found"}); 

        if(name) author.name = name;
        if(biography) author.biography = biography;
        if(dateOfBirth) author.dateOfBirth = dateOfBirth;
        if(nationality) author.nationality = nationality;

        await author.save();
        res.json({message: "Author updated successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteAuthor = async(req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.json({message: "Author deleted successsfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}