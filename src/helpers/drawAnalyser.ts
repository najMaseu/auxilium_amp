export const drawAnalyser = (
  soundDataArray: Uint8Array,
  connectedAnalyser: AnalyserNode,
  canvasContext2d: CanvasRenderingContext2D
) => {
  requestAnimationFrame(() =>
    drawAnalyser(soundDataArray, connectedAnalyser, canvasContext2d)
  );

  connectedAnalyser.getByteTimeDomainData(soundDataArray);

  canvasContext2d!.clearRect(0, 0, 686, 150);
  canvasContext2d!.fillStyle = "black";
  canvasContext2d!.fillRect(0, 0, 686, 150);
  let x = 0;

  soundDataArray.forEach((instance: number, index: number) => {
    if (index % 2 === 0) {
      const barHeight = Math.pow(instance - 123, 2) / 6;

      canvasContext2d!.fillStyle = "white";
      canvasContext2d!.fillRect(x, 150 - barHeight / 2, 84, barHeight);
      x += 2 + 84;
    }
  });
};
