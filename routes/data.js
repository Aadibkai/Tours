const express = require("express");
const { CreateData } = require("../controllers/user");
const router = express.Router();
// const {Data} = require("../data");
// import {Data} from '../data.js'

// router.post("/data/creatCity", CreateData);

router.get("/data/getAll", async (req, res) => {
  //   console.log(6576, Data);
});

module.exports = router;
