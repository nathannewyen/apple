const user = require("../controllers/user.controller");

module.exports = (app) => {
    app.get("/api/users", user.index);

    // Create a product
    app.post("/api/users", user.create);

    // Get one product
    app.get("/api/users/:id", user.show)

};