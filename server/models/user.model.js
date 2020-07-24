const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name is required"],
    },
    last_name: {
        type: String,
        required: [true, "Last name is required"],
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    phone: {
        type: String,
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }]
}, {
    timestamps: true,
});

module.exports = {
    User: mongoose.model("User", UserSchema),
};