import React from "react";
import { FiImage, FiSmile } from "react-icons/fi";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsCalendar2Event } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import "./TweetBox.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  postTweetAsync,
  selectError,
  selectLoading,
} from "../../../redux/reducers/tweet";

export default function TweetBox() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  async function onSubmit(data) {
    const text = data.text;
    const image = data.image[0];
    if (text || image) await dispatch(postTweetAsync({ text, image }));
    if (!error) reset();
  }
  const { t } = useTranslation();
  return (
    <div className="tweet-box" id="tweet-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tweet-box-input">
          <img src="/tweet.png" className="avatar" alt="" />
          <input placeholder={t("what")} type="text" {...register("text")} />
        </div>
        <div className="buttons">
          <div className="tweet-box-icon">
            <input
              id="file-upload"
              type="file"
              style={{ display: "none" }}
              {...register("image")}
            />
            <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
              <FiImage
                style={{ width: "20px", height: "20px", marginLeft: "70px" }}
              />
              <AiOutlineFileGif
                style={{ width: "20px", height: "20px", marginLeft: "20px" }}
              />
              <FiSmile
                style={{ width: "20px", height: "20px", marginLeft: "20px" }}
              />
              <BsCalendar2Event
                style={{ width: "20px", height: "20px", marginLeft: "20px" }}
              />
            </label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Tweeting ..." : t("twitte")}
          </button>
        </div>
      </form>
    </div>
  );
}
