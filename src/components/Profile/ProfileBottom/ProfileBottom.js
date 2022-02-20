import React from "react";
import "./ProfileBottom.scss";
import { useSelector } from "react-redux";
import { selectUsersToFollow } from "../../../redux/reducers/user";

export default function ProfileBottom() {
  const userstoFollow = useSelector(selectUsersToFollow);
  return (
    <div className="profile-bottom">
      <div className="first">
        <h3> Who to follow</h3>
        <div className="friends">
          {userstoFollow?.map((user) => (
            <div className="friend" key={user.uid}>
              <div>
                <img src="https://binged.it/3prQzwQ" alt="twitter" />
                <div className="name">
                  <span>{user.displayName}</span>
                  <p style={{ marginTop: "1px" }}>{user.username}</p>
                </div>
              </div>
              <button style={{ marginRight: "5px" }}>Follow</button>
            </div>
          ))}
        </div>

        <p
          style={{
            marginLeft: "16px",
            marginBottom: "16px",
            color: "#1D9BF0",
            cursor: "pointer",
          }}
        >
          Show more
        </p>
      </div>
    </div>
  );
}
