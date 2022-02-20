import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useMediaQuery } from "react-responsive";
import { CgMoreO } from "react-icons/cg";
import { RiTwitterFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";

import "./LeftPane.scss";
import Button from "../Button/Buttun";
import HomeIcone from "../icon/HomeIcone";
import LogoutButton from "../Button/LogoutButton/LogoutButton";

export default function LeftPane() {
  const isMobile = useMediaQuery({ minWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 1260 });
  const isMobilm = useMediaQuery({ maxWidth: 600 });
  const { t, i18n } = useTranslation();

  const { toggleTheme } = useContext(ThemeContext);
  const [more, setmore] = useState("false");
  const [moreMobile, setmoreMobile] = useState("false");
  return (
    <>
      <div className="leftPane">
        <ul>
          {isMobile && <RiTwitterFill className="twitterLogo" />}
          <NavLink activeClassName="activeClass" to="/" exact>
            <li>
              <HomeIcone />
              {isTablet && <p>{t("home")}</p>}
            </li>
          </NavLink>
          <NavLink to="/Profile" activeClassName="activeClass">
            <li>
              <HiOutlineUser />
              {isTablet && <p>{t("Profil")}</p>}
            </li>
          </NavLink>
          {isMobile && (
            <>
              <li onClick={() => setmore(!more)}>
                <CgMoreO />
                {isTablet && <p>{t("More")}</p>}
              </li>

              <div className={`menu ${more && "activemenu"}`}>
                <ul>
                  <ol>
                    <li onClick={() => i18n.changeLanguage("tr")}>TR</li>
                    <li onClick={() => i18n.changeLanguage("en")}>EN</li>
                  </ol>
                  <li onClick={() => toggleTheme()}>
                    <IoColorPaletteOutline />
                    {isTablet && <p>{t("Theme")}</p>}
                  </li>
                </ul>
              </div>
            </>
          )}
          {isMobilm && (
            <li
              onClick={() => {
                setmoreMobile(!moreMobile);
              }}
            >
              <CgMoreO />
              {isTablet && <p>{t("More")}</p>}
            </li>
          )}
          <Button />
        </ul>
        {isTablet && <LogoutButton />}
      </div>
      {isMobilm && (
        <div className={`menuMobile ${moreMobile && "activemenuMobile"}`}>
          <ul>
            <ol>
              <li onClick={() => i18n.changeLanguage("tr")}>TR</li>
              <li onClick={() => i18n.changeLanguage("en")}>EN</li>
            </ol>
            <li onClick={() => toggleTheme()}>
              <IoColorPaletteOutline />
              <p>{t("Theme")}</p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
