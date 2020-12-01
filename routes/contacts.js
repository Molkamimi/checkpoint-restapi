const { response } = require("express");
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const controllers = require("../controllers/contact.controllers");
//route:api/contact et tout ce qui est en dedons de routes (contacts.js)ca va être nested de cet api/contact
//test routing
router.get("/hello", (req, res) => {
  res.send("hello routing");
});

//les requettes à faire sur notre document(les requettes à faire sur notre collection qui s'appelle contact que j'ai cré sur le model )
//post contact
//get all contacts
//get contact by id
//delete contact by id
//update a contact by id

//@POST method
//@desc post a contact
//@path:http://localhost:5000/api/contact/
//Params Body
router.post("/", controllers.postContact);

//@Method Get
//@desc GET all contacts
//@Path:http://localhost:5000/api/contact/
router.get("/", async (req, res) => {
  try {
    const result = await Contact.find();
    res.send({ response: result, message: "getting contact successfully" });
  } catch (error) {
    res.status(400).send({ message: "can not get contacts" });
  }
});
//@Method Get
//@desc GET one contact
//@Path:http://localhost:5000/api/contact/:id
//@Params:id
router.get("/:id", async (req, res) => {
  try {
    const result = await Contact.findOne({ _id: req.params.id });
    res.send({ response: result, message: "getting contact successfully" });
  } catch (error) {
    res.status(400).send({ message: "there is no contact with this id" });
  }
});
//@Method Delete
//@desc DELETE one contact
//@Path:http://localhost:5000/api/contact/:id
//@Params id
router.delete("/:id", async (req, res) => {
  try {
    const result = await Contact.deleteOne({ _id: req.params.id });
    result.n
      ? res.send({ response: "user deleted" })
      : res.send("there is no user with this id");
  } catch (error) {
    res.send("not deleted");
  }
});
//@Method PUT
//@desc update a contat by id
//@Path:http://localhost:5000/api/contact/:id
//@Params id Body
router.put("/:id", async (req, res) => {
  try {
    const result = await Contact.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    console.log(result);
    result.nModified
      ? res.send({ message: "user updated" })
      : res.send({ message: "contact has already updated" });
  } catch (error) {
    res.status(400).send({ message: "there is no user with this id" });
  }
});

module.exports = router;
