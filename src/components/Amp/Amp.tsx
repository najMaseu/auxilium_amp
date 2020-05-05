/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useEffect } from "react";
//@ts-ignore
import cabImpulse from "../../static/Cab/cabImpulse.wav";
//@ts-ignore
import { drawAnalyser } from "../../helpers/drawAnalyser";
import { canvas, ampVisuals } from "./Amp.styles";
import { getGainNode } from "../../helpers/getGainNode";
import { getImpulseBuffer } from "../../helpers/getImpulse";
import { getDistortionCurve } from "../../helpers/getDistortionCurve";

export const Amp: React.FC = React.memo(() => {
  const drawing = useRef<HTMLCanvasElement>(null);
  const distortionAmount = useRef(1844);
  const audioCtx = new window.AudioContext();

  const onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minPosition = 0;
    const maxPosition = 100;

    const minValue = Math.log(10);
    const maxValue = Math.log(20000);

    const scale = (maxValue - minValue) / (maxPosition - minPosition);

    distortionAmount.current = Math.ceil(
      Math.exp(minValue + scale * (parseInt(e.target.value) - minPosition))
    );
    distortionModule.curve = getDistortionCurve(
      distortionAmount.current,
      audioCtx
    );
  };

  const { gainNode: inputBoost } = getGainNode(audioCtx, 1);
  const { gainNode: distortionGain } = getGainNode(audioCtx, 1);

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 1024;

  const cabConvolver = audioCtx.createConvolver();

  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  const distortionModule = audioCtx.createWaveShaper();
  distortionModule.curve = getDistortionCurve(
    distortionAmount.current,
    audioCtx
  );
  distortionModule.oversample = "4x";

  (async () => {
    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        autoGainControl: false,
        noiseSuppression: false,
        latency: 0
      }
    });

    const source = audioCtx.createMediaStreamSource(audioStream);

    if (!cabConvolver.buffer)
      cabConvolver.buffer = await getImpulseBuffer(audioCtx, cabImpulse);

    source
      .connect(inputBoost)
      .connect(distortionModule)
      .connect(distortionGain)
      .connect(cabConvolver)
      .connect(analyser)
      .connect(audioCtx.destination);
  })();

  useEffect(() => {
    const canvasCtx = drawing.current!.getContext("2d");

    drawAnalyser(dataArray, analyser, canvasCtx!);
  }, [dataArray, analyser]);

  return (
    <div className={ampVisuals}>
      <canvas
        className={canvas}
        ref={drawing}
        id="drawing"
        width="686"
        height="300"
      >
        <p>Your browser does not support the canvas tag...</p>
      </canvas>
      <div>
        <span>⚡ Distortion amount: </span>
        <input min={10} type="range" onChange={onSliderChange} />
      </div>
    </div>
  );
});
