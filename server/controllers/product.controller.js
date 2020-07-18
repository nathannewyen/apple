const {
    Product
} = require("../models/product.model");

module.exports = {
    index(req, res) {
        Product.find()
            .then((allProducts) => res.json(allProducts))
            .catch((err) => res.json(err));
    },

    create(req, res) {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => res.json(err));
    },

    show(req, res) {
        Product.findById({
                _id: req.params.id
            })
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
    },

    update(req, res) {
        Product.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                runValidators: true
            })
            .then(editProduct => res.json({
                msg: "Success"
            }))
            .catch(err => res.json(err))
    },


    deleteProduct(req, res) {
        Product.deleteOne({
                _id: req.params.id
            })
            .then(msg => res.json(msg))
            .catch(err => res.json(err))
    }
};