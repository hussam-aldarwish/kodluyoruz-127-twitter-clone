import React from "react";
import LeftPane from "../../components/leftPane/LeftPane";
import Rightpane from "../../components/rigtePane/Rightpane";
import Profile from "../../components/Profile/Profile";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/user";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  if (!user) history.push("/login");

  return (
    <>
      <LeftPane />
      <Profile />
      <Rightpane />
    </>
  );
};

export default ProfilePage;
