import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import "./logoutBottun.scss";

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../redux/reducers/user";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <div className="logout">
        <div className="logoutAvatar">
          <img
            src="https://img.icons8.com/material-rounded/86/000000/user.png"
            alt="twitter"
            className="avatar"
          />
        </div>
        <div className="eserDes">
          <h3>{user ? user.displayName : ""}</h3>
          <span>{user ? user.username : ""}</span>
        </div>
        <button onClick={() => dispatch(logout())}>
          <HiOutlineLogout />
        </button>
      </div>
    </>
  );
}
