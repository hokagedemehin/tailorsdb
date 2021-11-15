// import React from "react";
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config.env") });
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2New = google.auth.OAuth2;

const OAuth2_client = new OAuth2New(
  process.env.NEXT_PUBLIC_CLIENT_ID,
  process.env.NEXT_PUBLIC_CLIENT_SECRET
);
OAuth2_client.setCredentials({
  refresh_token: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
});

// console.log(path.join(__dirname, "config.env"));

// console.log(
//   "process: ",
//   // process.env,
//   process.env.NEXT_PUBLIC_EMAIL_USERNAME,
//   process.env.NEXT_PUBLIC_REFRESH_TOKEN,
//   process.env.NEXT_PUBLIC_CLIENT_SECRET,
//   process.env.NEXT_PUBLIC_CLIENT_ID
// );

export default async function sendEmail(req, res) {
  console.log(req.body);
  const { fullName, email, subject, message } = req.body;
  const accessToken = OAuth2_client.getAccessToken();

  // let transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
  //     pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  //   },
  // });

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    // ignoreTLS: true, // add this
    // service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
      accessToken: accessToken,
      // expires: 1484314697598,
    },
  });

  // 2) define the email options
  const mailOptions = {
    from: email,
    to: "Demehin Ibukun <demehin.george@gmail.com>",
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
  // transporter.sendMail(mailOptions, (err, result) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log(result);
  //   }
  //   transporter.close();
  // });
  res.status(200).send({ message: "it is done" });
  // } catch (error) {
  //   console.log(error);
  // }
}

// export default sendEmail;

// module.exports = { sendEmail };
