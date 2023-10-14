const Hotel = require('../models/hotel.js');

exports.create = async (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const { hotelName, name, email, contactNo, noOfPersons, selectedSuite, checkInDate, checkOutDate } = req.body;

    // new package
    const hotel = new Hotel({
        hotelName, 
        name, 
        email, 
        contactNo, 
        noOfPersons, 
        selectedSuite, 
        checkInDate, 
        checkOutDate
    })

    // save booking details in the database
    await hotel
        .save()
        .then(() => {
            res.status(201).send({message : "Hotel Booked Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while booking the Hotel"
            });
        });
}

exports.findAll = async (req,res) => {
    let hotel

    try {
        hotel = await Hotel.find()
        res.send(hotel)
    } catch (err) {
        res.status(500).send({ message : err.message || "Error Occurred while retrieving booking details" })
    }
}

exports.update = async (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    await Hotel.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update booking details with id = ${id}. Maybe booking details not found!`})
            }else{
                res.status(201).send({message : "Booking details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating booking details"})
        })
}

exports.delete = async (req,res) => {
    const id = req.params.id;

    await Hotel.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot delete booking with id = ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Booking deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting booking with id = ${id}`});
        })
}