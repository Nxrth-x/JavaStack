const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
     name: {
          type: String,
          required: true,
     },
     nickname: {
          type: String,
     },
     phone: {
          type: String,
          required: true,
     }
});

mongoose.model("Contact", ContactSchema);