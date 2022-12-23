var express = require('express');
var router = express.Router();

// const sendEmailController = require("../send_mail")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.post("email", function(req, res, next) {
//   res.send()
// })
// router.get( "/send-email", sendEmailController.sendEmail)
module.exports = router;
