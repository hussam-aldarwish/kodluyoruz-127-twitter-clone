import React from "react";
import "./RightPane.scss";
import { useMediaQuery } from "react-responsive";
import HashChangeEvent from "./HashContainer"
import WhoToFollow from "./WhoToFollow";
export default function Rightpane() {
  const isMiniTablet = useMediaQuery({ minWidth: 1000 });
  return (
    <>
      {isMiniTablet && (
        <div className="Rightpane">
          <HashChangeEvent />
          <WhoToFollow />
        </div>
      )}
    </>
  );
}
