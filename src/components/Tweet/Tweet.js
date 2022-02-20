import React, { useEffect, useState, memo } from "react";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import {
  getFirestore,
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";

import "./Tweet.scss";

function Tweet() {
  const db = getFirestore();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts")),
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
            postedOn: new Date(data.postedOn?.seconds * 1000),
          });
        });
        setPosts(array.sort((a, b) => b.postedOn - a.postedOn));
      }
    );
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  const { t } = useTranslation();
  return (
    <div className="tweet">
      <div className="tweet-header">
        <h2> {t("home")} </h2>
        <BsStars />
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          key={post.id}
          uid={post.uid}
          text={post.text}
          image={post.image}
          postedOn={post.postedOn.toLocaleString()}
        />
      ))}
    </div>
  );
}

export default memo(Tweet);
