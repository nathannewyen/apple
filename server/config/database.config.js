const mongoose = require("mongoose");

module.exports = (name) => {
    mongoose
        .connect(`mongodb://localhost:27017/${name}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log(`Succesfully connected to ${name}`))
        .catch((err) => console.log(err));
};