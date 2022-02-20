import React from "react";
import "./RightPane.scss";
import { useTranslation } from "react-i18next";

export default function HashContainer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="hashContainer">
        <h3>{t("Trends")}</h3>
        <ul>
          <li>
            <p>Politics · Trending</p>
            <h4>#hepmizMeryemiz</h4>
            <p>1,958 Tweets</p>
          </li>
          <li>
            <p>Trending in Turkey</p>
            <h4>#HaydiErdoğanVakitTamam</h4>
            <p>27k Tweets</p>
          </li>
          <li>
            <p>Politics · Trending</p>
            <h4>God of War</h4>
            <p>39k Tweets</p>
          </li>
        </ul>
      </div>
    </>
  );
}
