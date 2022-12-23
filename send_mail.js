const nodemailer = require("nodemailer");
require("dotenv").config();
module.exports = {
  sendEmail: async (req, res) => {
    try {
      var transporter = nodemailer.createTransport({
        // service: process.env.SERVICE,
        port: 465, // true for 465, false for other ports
        host: "smtp.gmail.com",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      var mailOptions = {
        from: req.query.email,
        to: "iamdayy14@gmail.com",
        subject: req.query.subject,
        text: req.query.text,
      };

      await transporter.sendMail(mailOptions);
      return res.status(201).json({ status: "SUCCESS", d });
    } catch (err) {
      return res.status(500).json({ status: "ERROR", message: err });
    }
  },
};
