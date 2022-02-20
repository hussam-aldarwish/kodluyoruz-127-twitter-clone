import React from "react";
import "./ThemeBottun.scss"

export default function ThemeBottun() {
  
  return (
    <>
     <label id="switch" className="switch">
            <input type="checkbox" id="slider" />
            <span className="slider round"></span>
          </label>
    </>
  );
}
