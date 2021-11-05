import React from "react";
import RegisterComponent from "../../components/register/register.component";
import Layout from "../../components/layout/layout";

const RegisterPage = () => {
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
