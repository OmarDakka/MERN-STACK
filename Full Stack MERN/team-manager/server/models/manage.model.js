const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
name: {
    type: String,
    require: [
        true,
        "Name is required"
    ],
    minlength: [
        2,
        "Name must be at least 2 characters long."
    ]
},
position: {
    type: String,
    required: [
        false
    ]
},
status: {
    game1: {type: Number, default: 0},
    game2: {type: Number, default: 0},
    game3: {type: Number, default: 0}
}

}, {timestamps: true});

module.exports.Player = mongoose.model("Player", PlayerSchema);