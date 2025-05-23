<<<<<<< HEAD
=======
// backend/routes/authenticationRoutes.js
>>>>>>> c051fbc (recent integarted code i.e on 21/05/2025)
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authenticationControllers');

<<<<<<< HEAD
=======
// now these define POST /api/auth/register and POST /api/auth/login
>>>>>>> c051fbc (recent integarted code i.e on 21/05/2025)
router.post('/register', registerUser);
router.post('/login',   loginUser);

module.exports = router;
