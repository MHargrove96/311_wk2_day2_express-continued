const products = require("../data/products");

const listAll = (req, res) => {
  console.log("in the GET /products request for all contacts");
  res.json(products);
};

const listOne = (req, res) => {
  console.log("in the /products request for a products by id");
  const id = products.find((data) => data._id == req.params.id);
  console.log(id);
  res.json(id);
};

const create = (req, res) => {
  console.log("im in the /contacts POST request");
  let counter = products.length + 1;
  const newObject = {
    _id: counter,
    ...req.body,
    // using the spead operator above to shorten the amount of code from below.
    // "name": req.body.name,
    // "occupation": req.body.occupation,
    // "avatar": req.body.avatar
  };
  products.push(newObject);
  res.json(products);
};

module.exports = { listAll, listOne, create };
//
