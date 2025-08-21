const express = require("express");
const router = express.Router();
const {handleGetRequest} = require('../controllers/home')

router.route('/')
    .get(handleGetRequest)


module.exports = router;