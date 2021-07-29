const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: {type:String
        ,required: true},
    price: {type:Number},
    description: {type:String}
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);