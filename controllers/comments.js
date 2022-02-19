const comments = require("../data/comments");

const listAll = (req, res) => {
  console.log("in the GET /comments request for all contacts");
  res.json(comments);
};

const listOne = (req, res) => {
  console.log("in the /comments GET request for a comment by id");
  const id = comments.find((data) => data._id == req.params.id);
  console.log(id);
  res.json(id);
};

const create = (req, res) => {
    console.log("im in the /comments POST request");
    let counter = comments.length + 1;
    const newComment = {
      _id: counter,
      ...req.body,
    };
    comments.push(newComment);
    res.json(comments);
  };

module.exports = { listAll, listOne, create};
//  
