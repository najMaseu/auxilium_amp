import React from "react";
import { css } from "emotion";

export const Container: React.FC = ({ children }) => (
  <div className={container}>
    <div className={innerContainer}>{children} </div>
  </div>
);

const container = css({
  display: "flex",
  justifyContent: "center",
  height: "100%",
  minHeight: "100vh"
});

const innerContainer = css({
  width: "1366px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
