import React from "react";
import { spinner } from "./Spinner.styles";

export const Spinner = () => (
  <div
    style={{
      position: "absolute",
      top: "calc(50% - 40px)",
      left: "calc(50% - 40px)"
    }}
  >
    <div className={spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
