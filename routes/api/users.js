const express = require("express");
const { getAll, addUser } = require('../../controllers');
const { ctrlWrapper } = require("../../helpers");
const { validation } = require("../../middlewares");
const { userJoi } = require("../../models");


const router = express.Router();

router.get('/', ctrlWrapper(getAll) );

router.post('/', validation(userJoi), ctrlWrapper(addUser));

module.exports = router;