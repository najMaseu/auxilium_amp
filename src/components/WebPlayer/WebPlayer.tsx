import React, { useRef, useEffect } from "react";
//@ts-ignore
import { drawAnalyser } from "../../helpers/drawAnalyser";
import { canvas } from "./WebPlayer.styles";

export const WebPlayer: React.FC = () => {
  const drawing = useRef<HTMLCanvasElement>(null);

  const audioCtx = new window.AudioContext();
  const analyser = audioCtx.createAnalyser();
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 32;

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

      source.connect(analyser);
    })();

    const canvasCtx = drawing.current!.getContext("2d");

    drawAnalyser(dataArray, analyser, canvasCtx!);
  }, [analyser, audioCtx, dataArray]);

  return (
    <canvas
      className={canvas}
      ref={drawing}
      id="drawing"
      width="686"
      height="150"
    >
      <p>Your browser does not support the canvas tag...</p>
    </canvas>
  );
};
