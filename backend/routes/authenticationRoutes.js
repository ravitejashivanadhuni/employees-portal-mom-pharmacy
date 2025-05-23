const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authenticationControllers');

// now these define POST /api/auth/register and POST /api/auth/login
router.post('/register', registerUser);
router.post('/login',   loginUser);

module.exports = router;