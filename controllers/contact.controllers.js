const Contact = require("../models/Contact");

exports.postContact = async (req, res) => {
  try {
    const newContact = new Contact({ ...req.body });
    //test sur email if is it false
    if (!req.body.email) {
      res.status(400).send({ message: "email is required check again" });
      return;
    }
    const user = await Contact.findOne({ email: req.body.email });

    if (user) {
      res.status(400).send({ message: "user already exist" });
      return;
    }
    const response = await newContact.save();
    res.send({ response: response, message: "user is saved" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "can not save it" });
  }
};
