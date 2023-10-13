const Restaurant = require('../models/restaurant');

exports.create = async (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const { name, contact, quantity, total, note } = req.body;

    // new package
    const restaurant = new Restaurant({
        name,
        contact,
        quantity,
        total,
        note
    })

    // save booking details in the database
    await restaurant
        .save()
        .then(() => {
            res.status(201).send({message : "Order Plased Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while order the food"
            });
        });
}

exports.findAll = async (req,res) => {
    let restaurant

    try {
        restaurant = await Restaurant.find()
        res.send(restaurant)
    } catch (err) {
        res.status(500).send({ message : err.message || "Error Occurred while retrieving order details" })
    }
}

exports.update = async (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    await Restaurant.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update order details with id = ${id}. Maybe booking details not found!`})
            }else{
                res.status(201).send({message : "Order details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating order details"})
        })
}

exports.delete = async (req,res) => {
    const id = req.params.id;

    await Restaurant.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot order booking with id = ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "order deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting oder with id = ${id}`});
        })
}