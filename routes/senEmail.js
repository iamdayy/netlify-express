const express = require("express");
let router = express.Router()

const sendMail = require("../send_mail")

router.get("/send-email/", sendMail.sendEmail)
module.exports = router