import React, { useEffect } from "react";
import Layout from "../../../components/layout/layout";
import { useRouter } from "next/router";
import { useUser } from "../../../services/context/userContext";
import TailorsEditProfileComponent from "../../../components/tailors/tailors.profile.edit.component";

const EditProfilePage = () => {
  const router = useRouter();
  const { user, userDoc } = useUser();
  // console.log(user);
  // useEffect(() => {
  //   if (!user) {
  //     router.push("/");
  //   }
  // }, [user]);

  return (
    <Layout
      name="Edit Profile Page"
      desc="Every Tailor Profile details can be eddited here"
    >
      <TailorsEditProfileComponent user={user} userDoc={userDoc} />
    </Layout>
  );
};

export default EditProfilePage;
