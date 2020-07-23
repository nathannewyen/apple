const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "A product must have a title"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be at least $1"],
    },
    description: {
        type: [String],
        validate: {
            validator: (a) => { return a.length > 0 ;},
            message: "Please describe your product."
        }
    },
    img_url: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = {
    Product: mongoose.model("Product", ProductSchema),
};