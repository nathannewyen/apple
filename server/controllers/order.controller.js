const {
    Order
} = require("../models/order.model");
const {
    User
} = require("../models/user.models");
module.exports = {
    showAll: (req, res) => {
        Order.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    findById: (req, res) => {
        Order.findOne({
                _id: req.params.id
            })
            // .select ('details')
            .populate('buyer', 'first_name last_name address email phone')
            .populate({
                path: "details",
                populate: {
                    path: "productId",
                    select: "title price"
                }
            })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        Order.create(req.body)
            .then(data => {
                User.findOne({
                        _id: data.buyer
                    })
                    .then(user => {
                        user.orders.push(data._id);
                        user.save();
                    })
                    .catch(err => res.json(err));
                res.json({
                    msg: "new order is created",
                    data
                });
            })
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        Order.findOneAndUpdate({
                _id: req.params.id
            }, req.body)
            .then(data => res.json({
                msg: "updated one order",
                old_info: data,
                new_info: req.body,
                note: "you might want to copy the old value! Just in case"
            }))
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        Order.findOneAndRemove({
                _id: req.params.id
            })
            .then(data => res.json({
                msg: "removed one order",
                old_info: data,
                note: "you might want to copy the old value! Just in case"
            }))
            .catch(err => res.json(err));
    }
}