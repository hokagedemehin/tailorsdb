// import React from "react";
const dotenv = require("dotenv");
const path = require("path");
const nodemailer = require("nodemailer");

dotenv.config({ path: path.join(__dirname, "config.env") });

// console.log(path.join(__dirname, "config.env"));

// console.log(
//   "process: ",
//   process.env.NEXT_PUBLIC_EMAIL_USERNAME,
//   process.env.NEXT_PUBLIC_EMAIL_PASSWORD
// );

export default async function sendEmail(req, res) {
  // console.log(req.body);
  const { fullName, email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
  });
  // 2) define the email options
  const mailOptions = {
    from: email,
    to: "Demehin Ibukun <ibk2k7@gmail.com>",
    // to: email,
    subject: `${fullName} - ${subject}`,
    text: `${fullName} \n\n ${email} \n\n ${message}`,
    // html: `<div>
    //   <div>${fullName}</div>
    //   <div>${email}</div>
    //   <div>${message}</div>
    // </div>`,
  };
  // 3) actually send the email
  // try {
  await transporter.sendMail(mailOptions);
  res.status(200).send({ message: "it is done" });
  // } catch (error) {
  //   console.log(error);
  // }
}

// export default sendEmail;

// module.exports = { sendEmail };
