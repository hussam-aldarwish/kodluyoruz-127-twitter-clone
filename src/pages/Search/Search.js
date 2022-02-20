import React from "react";
import LeftPane from "../../components/leftPane/LeftPane";
import Rightpane from "../../components/rigtePane/Rightpane";
import Search from "../../components/Search/Search";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/user";
import { useHistory } from "react-router-dom";

const SearchPage = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  if (!user) history.push("/login");

  return (
    <>
      <LeftPane />
      <Search />
      <Rightpane />
    </>
  );
};

export default SearchPage;
