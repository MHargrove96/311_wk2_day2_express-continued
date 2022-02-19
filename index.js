const express = require("express");
const app = express();

// const contacts = require("./data/contacts");
// const vehicles = require("./data/vehicles");
// const comments = require("./data/comments");
// const products = require("./data/products");
// these do not need to be here anymore because the routes are being created and called in the controllers files for each respectivly

const contactsR = require("./routes/contacts.js");
const vehiclesR = require("./routes/vehicles.js");
const commentsR = require("./routes/comments.js");
const productsR = require("./routes/products.js");

const port = process.env.PORT || 4001;

app.use(express.static("public"));
app.use(express.json());
app.use(contactsR);
app.use(vehiclesR);
app.use(commentsR);
app.use(productsR);

// app.get("/contacts", (req, res) => {
//   console.log("in the GET /contacts request for all contacts");
//   res.json(contacts);
// });

// app.get("/contacts/:id", (req, res) => {
//   console.log("in the /contacts request for a contact by id");
//   const id = contacts.find((data) => data._id == req.params.id);
//   console.log(id);
//   res.json(id);
// });

// app.post("/contacts/", (req, res) => {
//   console.log("im in the /contacts POST request");
//   let counter = contacts.length + 1;
//   const newChar = {
//     _id: counter,
//     ...req.body,
//     // using the spead operator above to shorten the amount of code from below.
//     // "name": req.body.name,
//     // "occupation": req.body.occupation,
//     // "avatar": req.body.avatar
//   };
//   contacts.push(newChar);
//   res.json(contacts);
// });

// ----------------------------------these routes are now being called in the /contacts.js routes folder----------------------------------

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
