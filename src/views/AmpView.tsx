import { Container } from "../components/Container/Container";
import React, { useState } from "react";
import { Amp } from "../components/Amp/Amp";
import { css } from "emotion";

export const AmpView = () => {
  const [isAmpEnabled, setAmpEnabled] = useState(false);

  const onBtnClick = () => {
    setAmpEnabled(true);
  };
  return (
    <Container>
      {!isAmpEnabled && (
        <button onClick={onBtnClick} className={startButton}>
          START
        </button>
      )}
      {isAmpEnabled && <Amp />}
    </Container>
  );
};

const startButton = css({
  background: "lightgrey",
  fontSize: "2.5rem",
  fontWeight: "bold",
  padding: ".5rem 1rem",
  borderRadius: 3,
  transition: "all 0.3s ease",
  ":hover": {
    background: "white",
    transform: "scale(1.1)"
  }
});
