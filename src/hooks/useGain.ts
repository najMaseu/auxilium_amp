import { useState } from "react";
export const useGain = (
  currentAudioContext: AudioContext,
  initialGain: number
) => {
  const [gainAmount, setGainAmount] = useState(initialGain);
  const gainNode = currentAudioContext.createGain();

  gainNode.gain.value = gainAmount;

  return {
    gainNode,
    setGainAmount,
    gainAmount
  };
};
