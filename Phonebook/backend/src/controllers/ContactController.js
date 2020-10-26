const mongoose = require("mongoose");
const Contact = mongoose.model("Contact");

module.exports = {
     //Create
     async Create(request, response){
          const contact = await Contact.create(request.body);
          return response.status(201).json(contact);
     },
     //Read
     async Index(request, response){
          const contacts = await Contact.find();
          return response.status(200).json(contacts);
     },
     //Update
     async Update(request, response){
          const contact = await Contact.findOneAndUpdate(request.params.id, request.body, {new: true});
          return response.json(contact);
     },
     //Delete
     async Delete(request, response){
          const contact = await Contact.findByIdAndDelete(request.params.id, request.body);
          return response.json(contact);
     }
}