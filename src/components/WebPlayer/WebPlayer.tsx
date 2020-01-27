import React, { useRef, useEffect } from "react";
//@ts-ignore
import cabImpulse from "../../static/Cab/cabImpulse.wav";
//@ts-ignore
import reverbImpulse from "../../static/Rev/reverbImpulse.wav";
import { drawAnalyser } from "../../helpers/drawAnalyser";
import { canvas } from "./WebPlayer.styles";
import { useDistortion } from "../../hooks/useDistortion";
import { useGain } from "../../hooks/useGain";
import { getImpulseBuffer } from "../../helpers/getImpulse";

export const WebPlayer: React.FC = () => {
  const drawing = useRef<HTMLCanvasElement>(null);

  const audioCtx = new window.AudioContext();

  const { distortionModule } = useDistortion(audioCtx);
  const { gainNode: distortionGain } = useGain(audioCtx, 1);
  const {
    gainNode: reverbWet,
    setGainAmount: setReverbWet,
    gainAmount: reverbWetAmount
  } = useGain(audioCtx, 0);
  const { gainNode: reverbDry, setGainAmount: setReverbDry } = useGain(
    audioCtx,
    0
  );

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

      if (!reverbConvolver.buffer)
        reverbConvolver.buffer = await getImpulseBuffer(
          audioCtx,
          reverbImpulse
        );

      source
        .connect(distortionModule)
        .connect(distortionGain)
        .connect(cabConvolver)
        .connect(reverbConvolver)
        .connect(reverbWet)
        .connect(analyser)
        .connect(audioCtx.destination);

      source
        .connect(distortionModule)
        .connect(distortionGain)
        .connect(cabConvolver)
        .connect(reverbDry)
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
    reverbConvolver,
    reverbWet,
    reverbDry
  ]);

  useEffect(() => {
    setReverbWet(0.5);
    setReverbDry(1 - reverbWetAmount);
  }, [setReverbWet, setReverbDry, reverbWetAmount]);
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
