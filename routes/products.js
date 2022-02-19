const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

router.get("/products", productsController.listAll);

router.get("/products/:id", productsController.listOne);

router.post("/products/", productsController.create);

module.exports = router;
