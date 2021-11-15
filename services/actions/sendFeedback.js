import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SendFeedback = async (formValue, setFormValue) => {
  const fullName = formValue.fullName;
  const email = formValue.email;
  const subject = formValue.subject;
  const message = formValue.message;

  // console.log("sendFeedback: ", fullName, email, subject, message);

  try {
    // const result = await axios.post("/api/email", {
    await axios.post("/api/email", {
      fullName: fullName,
      email: email,
      subject: subject,
      message: message,
    });
    toast.success("🎉 Message sent successfully 🎉");

    setFormValue({ fullName: "", email: "", subject: "", message: "" });
    // console.log(result);
  } catch (error) {
    console.error(error);
    toast.error("💥 There was an error sending message 💥");
  }
};
