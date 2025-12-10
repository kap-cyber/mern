const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");


router.route('/register').post(authcontrollers.register);
router.route('/login').post(authcontrollers.login);
router.route('/send-otp').post(authcontrollers.genrateOtp);
router.route('/verify-otp').post(authcontrollers.VerifyOtp);
module.exports = router;