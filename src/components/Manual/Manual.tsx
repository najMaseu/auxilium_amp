import React, { useRef, useEffect } from "react";
import { cx } from "emotion";
import { manualSyles, manualVisible } from "./Manual.styles";

interface ManualProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Manual: React.FC<ManualProps> = ({ isVisible, onClose }) => {
  const modal = useRef<HTMLDivElement>(null);

  const closeModal = (e: any) => {
    if (modal.current && modal.current.contains(e.target)) {
      return;
    }
    onClose();
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);

    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  });

  return (
    <div ref={modal} className={cx(manualSyles, isVisible && manualVisible)}>
      <h3>MANUAL</h3>
      <ol>
        <li>Plug in your guitar and set audio input</li>
        <li>Click start</li>
        <li>Give the browser access to the signal from your input </li>
      </ol>
      <p>Please use Google Chrome or Chrome-based browsers (ex. Brave)*</p>
    </div>
  );
};
