const { Author } = require("../models/author.model");

module.exports.createAuthor = (req,res) => {
    const {name} = req.body;
    Author.create({
        name
    })
    .then(auth => res.json(auth))
    .catch(err => res.status(400).json(err))
}

module.exports.getAllAuthors = (req,res) => {
    Author.find({}).sort({name: "ascending"})
        .then(auth => res.json(auth))
        .catch(err => res.json(err))
}

module.exports.getAuthor = (req,res) => {
    Author.findOne({_id: req.params.id})
        .then(auth => res.json(auth))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req,res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(auth => res.json(auth))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req,res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}