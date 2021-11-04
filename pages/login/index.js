import React from "react";
import LoginComponent from "../../components/login/login.components";
import Layout from "../../components/layout/layout";

const LoginPage = () => {
  return (
    <Layout
      name="Login"
      desc="Every Tailor will Login in this page to access their clients database"
    >
      <LoginComponent />
    </Layout>
  );
};

export default LoginPage;
