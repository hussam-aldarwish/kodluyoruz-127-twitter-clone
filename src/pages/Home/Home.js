import React from "react";
import LeftPane from "../../components/leftPane/LeftPane";
import Rightpane from "../../components/rigtePane/Rightpane";
import Tweet from "../../components/Tweet";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/user";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  if (!user) history.push("/login");

  return (
    <>
      <LeftPane />
      <Tweet />
      <Rightpane />
    </>
  );
};

export default HomePage;
