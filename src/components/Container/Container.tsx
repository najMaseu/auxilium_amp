import React from "react";
import { container, innerContainer } from "./Container.style";

export const Container: React.FC = ({ children }) => (
  <div className={container}>
    <div className={innerContainer}>{children} </div>
  </div>
);
