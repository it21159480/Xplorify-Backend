const Blog = require('../models/blog.js');

exports.create = async (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    const { blogTitle, bloggerName, bloggerEmail, bloggerContact, numDays, blogCity, blogCountry, blogRating, blogDetails, checkInDate, checkOutDate } = req.body;

    // new package
    const blog = new Blog({
        blogTitle, 
        bloggerName, 
        bloggerEmail, 
        bloggerContact, 
        numDays, 
        blogCity, 
        blogCountry,
        blogRating,
        blogDetails,
        checkInDate, 
        checkOutDate
    })

    // save bloging details in the database
    await blog
        .save()
        .then(() => {
            res.status(201).send({message : "Blog is created Successfully"})
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error occurred while creating the blogs"
            });
        });
}

exports.findAll = async (req,res) => {
    let blog

    try {
        blog = await Blog.find()
        res.send(blog)
    } catch (err) {
        res.status(500).send({ message : err.message || "Error Occurred while retrievin blogging details" })
    }
}

exports.update = async (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    await Blog.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot update blogging details with id = ${id}. Maybe blogging details not found!`})
            }else{
                res.status(201).send({message : "Blogging details updated successfully"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error occurred while updating Blogging details"})
        })
}

exports.delete = async (req,res) => {
    const id = req.params.id;

    await Blog.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : `Cannot delete blogging with id = ${id}. Maybe id is incorrect`})
            }
            else{
                res.status(201).send({message : "Blogging deleted successfully"})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({message : `Error deleting blogging with id = ${id}`});
        })
}