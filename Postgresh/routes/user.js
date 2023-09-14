const sequelize = require('../config/sequelize');
const express = require('express');
const router = express.Router();
const {createUser} = require('../controllers/userController');
const {signIn} = require('../controllers/userController');

// Create a new user
router.post('/signup', createUser);
router.post('/signin', signIn);

module.exports = router;
