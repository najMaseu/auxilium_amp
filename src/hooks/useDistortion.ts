import { useState } from "react";

export const useDistortion = (currentAudioContext: AudioContext) => {
  const [amount, setDistortionAmount] = useState(400);
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

  distortion.curve = makeDistortionCurve(amount, currentAudioContext);
  distortion.oversample = "4x";

  return {
    distortion,
    setDistortionAmount
  };
};
