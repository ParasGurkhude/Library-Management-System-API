const {Book} = require("../models/book.model");

exports.createBook = async(req, res)=>{
    try {
        const book = new Book(req.body);
        await book.save()
        res.status(201).json(book)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getAllBook = async (req, res) =>{
    try {
        const book = await Book.find().select("-password");
        if(!book) return res.status(400).json({message: "book not found"}); 
        res.json(book)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getBookById = async (req, res) =>{
    try {
        const book = await Book.findById(req.params.id).select("-password");
        if(!book) return res.status(400).json({message: "book not found"}); 
        res.json(book)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.updateBook = async (req, res) =>{
    try {
        const {title, summary, publicationDate, genres, copiesAvailable } = res.body;
        const book = await Book.findById(res.params.id);
        if(!book) return res.status(404).json({message: "book not found"}); 

        if(title) book.title = title;
        if(summary) book.summary = summary;
        if(publicationDate) book.publicationDate = publicationDate;
        if(genres) book.genres = genres;
        if(copiesAvailable) book.copiesAvailable = copiesAvailable;

        await book.save();
        res.json({message: "book updated successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.deleteBook = async(req, res)=>{
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.json({message: "book deleted successsfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}