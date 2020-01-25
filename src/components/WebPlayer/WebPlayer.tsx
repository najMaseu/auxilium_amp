import React, { useRef, useEffect } from "react";
//@ts-ignore
import sound from "../../static/sound.wav";
import { drawAnalyser } from "../../helpers/drawAnalyser";
import { canvas } from "./WebPlayer.styles";

export const WebPlayer: React.FC = () => {
  const audio = useRef<HTMLMediaElement>(null);
  const drawing = useRef<HTMLCanvasElement>(null);

  const audioCtx = new window.AudioContext();
  const analyser = audioCtx.createAnalyser();
  analyser.connect(audioCtx.destination);
  analyser.fftSize = 32;

  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  useEffect(() => {
    const source = audioCtx.createMediaElementSource(
      audio.current as HTMLMediaElement
    );
    source.connect(analyser);

    const canvasCtx = drawing.current!.getContext("2d");

    drawAnalyser(dataArray, analyser, canvasCtx!);
  }, [analyser, audioCtx, dataArray]);

  return (
    <>
      <audio
        style={{
          position: "fixed",
          bottom: 20,
          left: 20
        }}
        ref={audio}
        controls
      >
        <source src={sound} type="audio/wav" />
      </audio>

      <canvas
        className={canvas}
        ref={drawing}
        id="drawing"
        width="686"
        height="150"
      >
        <p>Your browser does not support the canvas tag...</p>
      </canvas>
    </>
  );
};
