const contacts = require("../data/contacts");

const listAll = (req, res) => {
  console.log("in the GET /contacts request for all contacts");
  res.json(contacts);
};

const listOne = (req, res) => {
  console.log("in the /contacts request for a contact by id");
  const id = contacts.find((data) => data._id == req.params.id);
  console.log(id);
  res.json(id);
};

const create = (req, res) => {
  console.log("im in the /contacts POST request");
  let counter = contacts.length + 1;
  const newChar = {
    _id: counter,
    ...req.body,
    // using the spead operator above to shorten the amount of code from below.
    // "name": req.body.name,
    // "occupation": req.body.occupation,
    // "avatar": req.body.avatar
  };
  contacts.push(newChar);
  res.json(contacts);
};

module.exports = { listAll, listOne, create };
// add show back in
