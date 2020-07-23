const User = require("../controllers/user.controller");

module.exports = (app) => {
    app.get("/api/users", User.showAll);

    // Create a User
    app.post("/api/users/create", User.create);

    // Get one User
    app.get("/api/users/:id", User.findById);

    // Delete a User
    app.delete("/api/users/:id", User.delete);

    //Edit a User
    app.put("/api/users/:id", User.update);
};