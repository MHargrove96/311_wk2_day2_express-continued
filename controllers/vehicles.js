const vehicles = require("../data/vehicles");
const contacts = require("../data/vehicles");

const listAll = (req, res) => {
  console.log("in the GET /vehicles request for all vehicles");
  console.log(vehicles);
  res.json(vehicles);
};

const listOne = (req, res) => {
  console.log("in the /vehicles request for a vehicles by id");
  const id = vehicles.find((data) => data._id == req.params.id);
  // vehicles.forEach(car => {
  //    for(let key in car) {
  //        console.log(`${key}: ${car[key]}`)
  //    }
  // });
  console.log(id);
  res.json(id);
};

const create = (req, res) => {
  console.log("im in the /vehicles POST request");
  let counter = vehicles.length + 1;
  const newVehicle = {
    _id: counter,
    ...req.body,
  };
  vehicles.push(newVehicle);
  res.json(vehicles);
};

module.exports = { listAll, listOne, create };
