const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts");

router.get("/contacts", contactsController.listAll);
// the function/actions that follow this route are now being called with the dot notation of lists
// it is being imported in the form of an object in from the controller file.

router.get("/contacts/:id", contactsController.listOne);

router.post("/contacts/", contactsController.create);

module.exports = router;
