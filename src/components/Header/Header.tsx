import React from "react";
import { header } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <header className={header}>
      <div>
        <h1>WEB GUITAR</h1>
        <h1>AMPLIFIER SIMULATOR</h1>
        <h2>made using Web Audio API</h2>
      </div>
    </header>
  );
};
