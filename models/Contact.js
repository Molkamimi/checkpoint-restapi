const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  Phone: String,
});
module.exports = Contact = mongoose.model("contact", contactShema);
