import React from "react";
import "./UserBox.scss";
import { BiCalendar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/user";
import { useTranslation } from "react-i18next";

export default function UserBox() {
  const user = useSelector(selectUser);
  const { t } = useTranslation();

  const JoinedMonth = new Date(user?.creationTime).getMonth() + 1;
  const JoinedYear = new Date(user?.creationTime).getFullYear();

  return (
    <div className="user-box">
      <div className="user-img">
        <img
          src="https://pbs.twimg.com/profile_banners/704421179096862720/1624439857/600x200"
          className="profile-background"
          alt="twitter"
        />
        <img
          src="https://freesvg.org/img/abstract-user-flat-4.png"
          className="profileAvatar"
          alt="twitter"
        />
        <button>{t("Edit")}</button>
      </div>
      <div className="user-details">
        <h3 style={{ marginBottom: "0px", color: "white" }}>
          {user.displayName}
        </h3>
        <span style={{ marginTop: "0px" }}>{user.username}</span>
        <span>
          <BiCalendar />
          {t("joined", {
            JoinedMonth: t(`months.${JoinedMonth}`),
            JoinedYear: JoinedYear,
          })}
        </span>
        <div className="follow">
          <b style={{ color: "white" }}> 0 </b> <span> {t("Following")}</span>
          <b style={{ color: "white" }}> 0 </b> <span> {t("Followers")}</span>
        </div>
      </div>
      <div className="detail-bottom">
        <p> Tweets </p>
        <p> Tweets&replies </p>
        <p> Media </p>
        <p> Reactions </p>
      </div>
    </div>
  );
}
