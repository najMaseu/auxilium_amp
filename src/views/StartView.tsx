import React, { useRef, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { css } from "emotion";
import anime from "animejs";

interface StartViewProps {
  scrollToRef: () => void;
}

export const StartView: React.FC<StartViewProps> = ({ scrollToRef }) => {
  const startView = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(startView.current?.firstChild?.firstChild);
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

  return (
    <div
      ref={startView}
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
        onClick={scrollToRef}
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
  bottom: 2,
  transition: "all 0.3s ease",
  ":hover": {
    transform: "scale(1.1) rotate(90deg) translateX(10px)"
  }
});
