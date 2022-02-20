import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import "./Profile.scss";
import ProfileBottom from "./ProfileBottom";
import UserBox from "./UserBox";
import Post from "../Tweet/Post/Post";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/user";

import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  where,
} from "firebase/firestore";

export default function Profile() {
  const db = getFirestore();
  const [posts, setPosts] = useState([]);
  const isDesktop = useMediaQuery({ maxWidth: 1259 });
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), where("uid", "==", user.uid)),
      (querySnapshot) => {
        const array = [];
        querySnapshot.forEach((doc) => {
          const id = doc.id;
          const data = doc.data();
          array.push({
            id: id,
            uid: data.uid,
            text: data.text,
            image: data.image,
            postedOn: new Date(data.postedOn.seconds * 1000),
          });
        });
        setPosts(array.sort((a, b) => b.postedOn - a.postedOn));
      }
    );
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="icon-div">
          <BsArrowLeftShort className="icon" onClick={() => history.goBack()} />
        </div>
        <div className="username">
          <h3 style={{ marginBottom: "2px", marginTop: "3px" }}>
            {user?.displayName}
          </h3>
          <span>{posts.length} tweet</span>
        </div>
        {isDesktop && (
          <Link to="/login">
            <button>
              <HiOutlineLogout />
            </button>
          </Link>
        )}
      </div>
      <UserBox />
      {posts.map((post) => (
        <Post
          key={post.id}
          uid={post.uid}
          text={post.text}
          image={post.image}
          postedOn={post.postedOn.toLocaleString()}
        />
      ))}
      <ProfileBottom />
    </div>
  );
}
