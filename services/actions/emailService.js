// const nodemailer = require("nodemailer");
import { Mailer } from "nodemailer-react";

// const sendEmail = async (options) => {
// 1) create a transporter
// let transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
//   //Activate in gmail "less secure app" option
// });
// let transporter = nodemailer.createTransport({
//   host: process.env.MAILTRAP_HOST,
//   port: process.env.MAILTRAP_PORT,
//   auth: {
//     user: process.env.MAILTRAP_USERNAME,
//     pass: process.env.MAILTRAP_PASSWORD,
//   },
// });

const transport = {
  host: process.env.NEXT_PUBLIC_MAILTRAP_HOST,
  secure: true,
  port: process.env.NEXT_PUBLIC_MAILTRAP_PORT,
  auth: {
    user: process.env.NEXT_PUBLIC_MAILTRAP_USERNAME,
    pass: process.env.NEXT_PUBLIC_MAILTRAP_PASSWORD,
  },
};

const defaults = {
  from: "ibk2k7@gmail.com",
};

export const FeedbackEmail = ({ subject, body }) => {
  subject: `🔥 ${subject} 🔥`;
  body: <div>
    <p>{body}</p>
  </div>;
};

export const mailer = Mailer({ transport, defaults }, { FeedbackEmail });

// 2) define the email options
//   const mailOptions = {
//     from: "Demehin Ibukun <ibk2k7@gmail.com>",
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };
//   // 3) actually send the email
//   await transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;
