import React, { useEffect } from "react";
import LoginComponent from "../../components/login/login.components";
import Layout from "../../components/layout/layout";

import { useRouter } from "next/router";
import { useUser } from "../../services/context/userContext";

const LoginPage = () => {
  const router = useRouter();
  const { user } = useUser();
  console.log(user);
  useEffect(() => {
    if (user) {
      router.back();
    }
  }, [user]);

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
