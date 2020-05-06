import React, { useRef, useEffect } from "react";
import { css, cx } from "emotion";

interface ManualProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Manual: React.FC<ManualProps> = ({ isVisible, onClose }) => {
  const modal = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", onClose);

    return () => {
      document.removeEventListener("mousedown", onClose);
    };
  });

  return (
    <div ref={modal} className={cx(manualSyles, isVisible && manualVisible)}>
      <h3>MANUAL</h3>
      <ol>
        <li>Plug in your guitar and set audio input</li>
        <li>Give the browser access to the signal from mic input </li>
        <li>Click start</li>
      </ol>
      <p>Please use Google Chrome or Chrome-based browsers (ex. Brave)*</p>
    </div>
  );
};

const manualSyles = css({
  background: "white",
  border: "2px white solid",
  borderRadius: 3,
  position: "absolute",
  top: "calc(50% - 4rem)",
  display: "flex",
  flexDirection: "column",
  padding: "1rem 1rem 1rem 3rem",
  transition: "all 0.3s ease",
  transform: "translateX(-1000px)",
  ol: {
    listStylePosition: "inside",
    marginTop: "1rem",
    li: {
      marginTop: "0.25rem"
    }
  },
  h3: {
    fontSize: "1.5rem"
  },
  p: {
    marginTop: "1rem",
    fontSize: ".5rem"
  }
});

const manualVisible = css({
  transform: "translateX(0)"
});
