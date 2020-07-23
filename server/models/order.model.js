const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    delivered: {
        type: Boolean,
        default: false
    },
    details:[
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: [true, "Undentified product"]
            },
            quantity: {
                type: Number,
                min: [1, "You need to buy at least one unit"]
            }
        }
    ],
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true,"Undentified user"]
    }
}, {
    timestamps: true,
});

module.exports = {
    Order: mongoose.model("Order", OrderSchema),
};