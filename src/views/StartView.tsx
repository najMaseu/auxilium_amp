import React, { useRef, useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { css, cx } from "emotion";
import anime from "animejs";
import { fontFamilies } from "../helpers/consts";
import { Manual } from "../components/Manual/Manual";

interface StartViewProps {
  scrollToRef: () => void;
}

export const StartView: React.FC<StartViewProps> = ({ scrollToRef }) => {
  const startView = useRef<HTMLDivElement>(null);
  const [isManualVisible, setManualVisibility] = useState(false);

  useEffect(() => {
    anime({
      targets: startView.current?.firstChild?.firstChild,
      scale: 0.9,
      right: 0,
      left: "50%",
      opacity: 1,
      duration: 1200,
      easing: "easeOutElastic(1, 2)",
      delay: 600
    });
  });

  const onModalClose = () => {
    setManualVisibility(false);
  };

  const onHelpClick = () => {
    setManualVisibility(!isManualVisible);
  };

  return (
    <div ref={startView} className={startViewContainer}>
      <Header />
      <Manual onClose={onModalClose} isVisible={isManualVisible} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 18 18"
        className={iconChevron}
        onClick={scrollToRef}
      >
        <path d="M7.5 4.5L6.44 5.56 9.88 9l-3.44 3.44L7.5 13.5 12 9z" />
      </svg>
      <div
        className={cx(helpIcon, isManualVisible && notClickable)}
        onClick={onHelpClick}
      >
        <span>?</span>
      </div>
    </div>
  );
};

const iconChevron = css({
  fill: "white",
  transform: "rotate(90deg)",
  position: "absolute",
  left: "calc(50% - 60px)",
  bottom: 2,
  transition: "all 0.3s ease",
  ":hover": {
    transform: "scale(1.1) rotate(90deg) translateX(10px)"
  }
});

const startViewContainer = css({
  height: "100vh",
  width: "100wh",
  fontFamily: fontFamilies.HELVETICA
});

const helpIcon = css({
  display: "flex",
  justifyContent: "center",
  fontSize: "2rem",
  color: "white",
  border: "2px white solid",
  borderRadius: "100%",
  width: "2rem",
  height: "2rem",
  position: "absolute",
  bottom: "3rem",
  left: "3rem",
  cursor: "pointer"
});

const notClickable = css({
  pointerEvents: "none"
});
