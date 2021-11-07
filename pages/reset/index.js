import React, { useEffect } from "react";
import ResetComponent from "../../components/reset/reset.component";
import Layout from "../../components/layout/layout";

import { useRouter } from "next/router";
import { useUser } from "../../services/context/userContext";

const ResetPage = () => {
  const router = useRouter();
  const { user } = useUser();
  // console.log(user);
  useEffect(() => {
    if (user) {
      router.back();
    }
  }, [user]);

  return (
    <Layout
      name="Reset Password"
      desc="Every Tailor can reset their password to access their clients database"
    >
      <ResetComponent />
    </Layout>
  );
};

export default ResetPage;
