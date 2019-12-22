import React, { useRef } from "react";
//@ts-ignore
import sound from "/Users/mac/Desktop/auxilium_amp/src/static/sound.wav";

export const WebPlayer: React.FC = () => {
  const audio = useRef<HTMLMediaElement>(null);
  const drawing = useRef<HTMLCanvasElement>(null);

  setTimeout(() => {
    const audioCtx = new window.AudioContext();
    const analyser = audioCtx.createAnalyser();

    const source = audioCtx.createMediaElementSource(
      audio.current as HTMLMediaElement
    );

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const canvasCtx = drawing.current!.getContext("2d");
    canvasCtx!.clearRect(0, 0, 456, 150);

    const draw = () => {
      requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      canvasCtx!.fillStyle = "black";
      canvasCtx!.fillRect(0, 0, 456, 150);
      var barHeight;
      var x = 0;
      for (var i = 0; i < bufferLength; i += 128) {
        barHeight = Math.pow(dataArray[i] - 123, 2) / 6;

        canvasCtx!.fillStyle = "white";
        canvasCtx!.fillRect(x, 150 - barHeight / 2, 50, barHeight);

        x += 8 + 50;
      }
    };

    draw();
  }, 1000);
  return (
    <>
      <audio
        style={{
          position: "absolute",
          bottom: 20,
          left: 20
        }}
        ref={audio}
        controls
      >
        <source src={sound} type="audio/wav" />
      </audio>

      <canvas ref={drawing} id="drawing" width="456" height="150">
        <p>Your browser does not support the canvas tag...</p>
      </canvas>
    </>
  );
};
