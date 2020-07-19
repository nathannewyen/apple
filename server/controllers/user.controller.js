const {
    User
} = require("../models/user.model");

module.exports = {
    index(req, res) {
        User.find()
            .then((allUsers) => res.json(allUsers))
            .catch((err) => res.json(err));
    },

    create(req, res) {
        User.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => res.json(err));
    },

    show(req, res) {
        User.find()
            .findById({
                _id: req.params.id
            })
            .then(oneUser => res.json(oneUser))
            .catch(err => res.json(err))
    },

};