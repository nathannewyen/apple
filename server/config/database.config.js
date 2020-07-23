const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/apple_store", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log(`Succesfully connected to mongoDB`))
        .catch((err) => console.log(err));