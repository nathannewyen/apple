const product = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", product.index);

    // Create a product
    app.post("/api/products", product.create);

    // Get one product
    app.get("/api/products/:id", product.show)

    // Delete a product
    app.delete("/api/products/:id", product.deleteProduct)

    //Edit a product
    app.put("/api/products/:id", product.update)
};