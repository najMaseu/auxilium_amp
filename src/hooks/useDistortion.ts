import { useState } from "react";
import { useGain } from "./useGain";

export const useDistortion = (currentAudioContext: AudioContext) => {
  const [distAmount, setDistortionAmount] = useState(3600);

  const { gainNode } = useGain(currentAudioContext, 1);

  const distortion = currentAudioContext.createWaveShaper();

  const makeDistortionCurve = (value: number, context: AudioContext) => {
    const curve = new Float32Array(context.sampleRate);
    const deg = Math.PI / 180;
    var x;

    return curve.map((element, index) => {
      x = (index * 2) / context.sampleRate - 1;
      return ((3 + value) * x * 6 * deg) / (Math.PI + value * Math.abs(x));
    });
  };

  distortion.curve = makeDistortionCurve(distAmount, currentAudioContext);
  distortion.oversample = "4x";
  const distortionModule = gainNode.connect(distortion);

  return {
    distortionModule,
    setDistortionAmount
  };
};
