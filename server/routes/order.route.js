const Order = require("../controllers/order.controller");

module.exports = (app) => {
    app.get("/api/orders", Order.showAll);

    // Create a Order
    app.post("/api/orders", Order.create);

    // Get one Order
    app.get("/api/orders/:id", Order.findById);

    // Delete a Order
    app.delete("/api/orders/:id", Order.delete);

    //Edit a Order
    app.put("/api/orders/:id", Order.update);
};