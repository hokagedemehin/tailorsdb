import { auth } from "../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SetResetPassword = async (formValue) => {
  try {
    const email = formValue?.email;
    // console.log("email", email);
    await sendPasswordResetEmail(auth, email);
    toast.success("🎉 Reset Password sent 🎉");
  } catch (error) {
    console.error(error.message);
    toast.error("🚨 Error sending reset password mail 🚨");
  }
};
