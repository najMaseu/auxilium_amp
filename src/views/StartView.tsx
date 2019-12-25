import React from "react";
import { Header } from "../components/Header/Header";
import { css } from "emotion";

export const StartView: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100wh"
      }}
    >
      <Header />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 18 18"
        className={iconChevron}
      >
        <path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z" />
      </svg>
    </div>
  );
};

const iconChevron = css({
  fill: "white",
  transform: "rotate(90deg)",
  position: "absolute",
  left: "calc(50% - 60px)",
  bottom: 2
});
