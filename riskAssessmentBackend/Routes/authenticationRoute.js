const { loginController, registerController } = require('../controllers/authController')

const express = require('express')
const router = express.Router();

//register router
router.post('/register', registerController)
//login router
router.post('/login', loginController)



module.exports = router;