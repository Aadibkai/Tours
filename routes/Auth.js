const express = require("express");
// const { CreateData } = require("../controllers/user");
const {SignUp} =require("../controllers/Auth")
const router = express.Router();


router.post("/auth/SignUp", SignUp)

// router.get("/data/getAll", async (req, res) => {
  //   console.log(6576, Data);
// });

module.exports = router;
