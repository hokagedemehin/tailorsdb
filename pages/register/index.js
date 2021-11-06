import React, { useEffect } from "react";
import RegisterComponent from "../../components/register/register.component";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import { useUser } from "../../services/context/userContext";

const RegisterPage = () => {
  const router = useRouter();
  const { user } = useUser();
  // console.log(user);
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <Layout
      name="Register"
      desc="Every Tailor will Register in this page to access their clients database"
    >
      <RegisterComponent />
    </Layout>
  );
};

export default RegisterPage;
