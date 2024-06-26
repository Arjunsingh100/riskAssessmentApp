const express = require('express');
const { addRiskObject, findAllRiskObj } = require('../controllers/riskController');
const { requireSignIn } = require('../middlewares/authenticationMeddleware');
const router = express.Router();

//insert risk object router
router.post('/addRiskScenario', requireSignIn, addRiskObject);
//router to find all risk object
router.get('/allriskobj', findAllRiskObj);
module.exports = router;