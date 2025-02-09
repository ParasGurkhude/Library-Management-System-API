const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    name : {type: String, required: true},
    biography: {type: String},
    dateOfBirth: {type: Date},
    nationality: {type: String},
    books: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],
},{
    versionKey: false
})

const AuthorModel = mongoose.model("Author", authorSchema)

module.exports  = { AuthorModel }

