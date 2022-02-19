const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");


router.get("/comments", commentsController.listAll);

router.get("/comments/:id", commentsController.listOne);

router.post("/comments/", commentsController.create);

module.exports = router;