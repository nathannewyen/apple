const mongoose = require("mongoose");

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
        required: [true, "Address is required"]
    },
    email: {
        type: String,
        //need email regex
        required: [true, "Email is required."],
    },
    phone: {
        type: String,
        //need phone regex 
        required: [true,"Phone is required"]
    },
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
}, {
    timestamps: true,
});

module.exports = {
    User: mongoose.model("User", UserSchema),
};