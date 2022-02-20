import React from "react";
import "./Login.scss";

import { RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  selectLoading,
  selectLoginError,
  loginAsync,
} from "../../redux/reducers/user";
import Input from "../Input";
import { useTranslation } from "react-i18next";
export default function Login() {
  const isMobile = useMediaQuery({ minWidth: 600 });
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectLoginError);
  const history = useHistory();

  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm();

  async function onSubmit(data) {
    await dispatch(loginAsync(data));
    if (error === null) history.push("/");
  }

  return (
    <>
      <div className="login">
        {isMobile && (
          <div className="photo">
            <img
              src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
              alt="twitter"
            />
            <RiTwitterFill />
          </div>
        )}
        <div className="formCont">
          <div className="formHade">
            <RiTwitterFill />
            <h1>{t("Happening now")}</h1>
            <h2>{t("Join Twitter today.")}</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {error && isSubmitted && (
              <span className="errorbar">{t(error)}</span>
            )}
            <Input
              type="email"
              placeholder="example@example.com"
              error={errors.email}
              {...register("email", { required: true })}
            />
            <Input
              type="password"
              placeholder="Password"
              error={errors.password}
              {...register("password", { required: true })}
            />
            <Input
              type="submit"
              value={!loading ? t("login") : t("loading")}
              disabled={loading ? true : false}
            />
            <span>
              {t("Don’t have an account?")}
              <Link to="/SignUp"> {t("signup")}</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
