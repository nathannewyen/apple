const { User } = require("../models/user.models");

module.exports = {
    showAll: (req,res) =>{
        User.find()
            .then( data => res.json (data) )
            .catch( err => res.json(err) );
        },
    findById: (req,res) => {
        User.findOne( {_id: req.params.id} )
            .populate("orders")
            // .populate("productId")
            .then( data => res.json(data) )
            .catch( err => res.json(err) );           
        },
    create: (req,res) => {
        User.create (req.body)
            .then(data => res.json( {msg : "new user is created", data} ))
            .catch(err => res.json(err));
        },
    update: (req,res) => {
        User.findOneAndUpdate ({_id: req.params.id},req.body)
            .then(data => res.json({   msg : "updated one user", 
                                        old_info : data, 
                                        new_info : req.body,
                                        note: "you might want to copy the old value! Just in case"
                                }))
            .catch(err => res.json(err));
        },
    delete: (req,res) => {
        User.findOneAndRemove ({_id: req.params.id})
            .then(data => res.json({   msg : "removed one user", 
                                        old_info : data, 
                                        note: "you might want to copy the old value! Just in case"
                                }))
            .catch(err => res.json(err));
        }
}
