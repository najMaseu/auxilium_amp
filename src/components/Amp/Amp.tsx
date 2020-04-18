import React, { useRef, useEffect } from "react";
//@ts-ignore
import cabImpulse from "../../static/Cab/cabImpulse.wav";
//@ts-ignore
import { drawAnalyser } from "../../helpers/drawAnalyser";
import { canvas } from "./Amp.styles";
import { useDistortion } from "../../hooks/useDistortion";
import { useGain } from "../../hooks/useGain";
import { getImpulseBuffer } from "../../helpers/getImpulse";

export const Amp: React.FC = () => {
  const drawing = useRef<HTMLCanvasElement>(null);

  const audioCtx = new window.AudioContext();

  const { distortionModule } = useDistortion(audioCtx);
  const { gainNode: distortionGain } = useGain(audioCtx, 1);

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 1024;

  const cabConvolver = audioCtx.createConvolver();
  const reverbConvolver = audioCtx.createConvolver();

  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  useEffect(() => {
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
        .connect(distortionModule)
        .connect(distortionGain)
        .connect(cabConvolver)
        .connect(analyser)
        .connect(audioCtx.destination);
    })();

    const canvasCtx = drawing.current!.getContext("2d");

    drawAnalyser(dataArray, analyser, canvasCtx!);
  }, [
    analyser,
    audioCtx,
    cabConvolver,
    dataArray,
    distortionGain,
    distortionModule,
    reverbConvolver.buffer
  ]);

  return (
    <canvas
      className={canvas}
      ref={drawing}
      id="drawing"
      width="686"
      height="300"
    >
      <p>Your browser does not support the canvas tag...</p>
    </canvas>
  );
};
