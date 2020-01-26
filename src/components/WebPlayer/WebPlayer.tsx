import React, { useRef, useEffect } from "react";
//@ts-ignore
import cabImpulse from "../../static/Cab/cabImpulse.wav";
import { drawAnalyser } from "../../helpers/drawAnalyser";
import { canvas } from "./WebPlayer.styles";
import { useDistortion } from "../../hooks/useDistortion";
import { useGain } from "../../hooks/useGain";
import { getImpulseBuffer } from "../../helpers/getImpulse";

export const WebPlayer: React.FC = () => {
  const drawing = useRef<HTMLCanvasElement>(null);

  const audioCtx = new window.AudioContext();

  const { distortionModule } = useDistortion(audioCtx);
  const { gainNode } = useGain(audioCtx, 0.5);

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 1024;

  const convolver = audioCtx.createConvolver();

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

      if (!convolver.buffer)
        convolver.buffer = await getImpulseBuffer(audioCtx, cabImpulse);

      source
        .connect(distortionModule)
        .connect(convolver)
        .connect(gainNode)
        .connect(analyser)
        .connect(audioCtx.destination);
    })();

    const canvasCtx = drawing.current!.getContext("2d");

    drawAnalyser(dataArray, analyser, canvasCtx!);
  }, [analyser, audioCtx, dataArray, distortionModule, gainNode, convolver]);

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
