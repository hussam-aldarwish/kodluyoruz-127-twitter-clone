import React from "react";
import "./RightPane.scss";
import { HiOutlineUser } from "react-icons/hi";
import { useSelector } from "react-redux";
import { selectUsersToFollow } from "../../redux/reducers/user";
import { useTranslation } from "react-i18next";

export default function WhoToFollow() {
  const { t } = useTranslation();
  const userstoFollow = useSelector(selectUsersToFollow);
  return (
    <>
      <div className=" hashContainer whoToFollow">
        <h3>{t("Who")}</h3>
        <ul>
          {userstoFollow?.map((user) => (
            <li className="followList" key={user.uid}>
              <HiOutlineUser className="avatar" />
              <h4>
                {user.displayName}
                <br />
                <p>{user.username}</p>
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
