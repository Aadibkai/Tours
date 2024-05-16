const express = require("express");
const { saveUserData,UpdateuserData,getUserData } = require("../controllers/user");
const router = express.Router();    

router.post("/booking", saveUserData);
router.post("/updateBookedData/:id", UpdateuserData)
router.get("/getAll",getUserData)
module.exports = router;
