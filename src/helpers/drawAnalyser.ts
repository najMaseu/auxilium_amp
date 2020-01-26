export const drawAnalyser = (
  soundDataArray: Uint8Array,
  connectedAnalyser: AnalyserNode,
  canvasContext2d: CanvasRenderingContext2D
) => {
  requestAnimationFrame(() =>
    drawAnalyser(soundDataArray, connectedAnalyser, canvasContext2d)
  );

  connectedAnalyser.getByteTimeDomainData(soundDataArray);

  canvasContext2d!.clearRect(0, 0, 686, 300);
  canvasContext2d!.fillStyle = "black";
  canvasContext2d!.fillRect(0, 0, 686, 300);
  let x = 0;

  soundDataArray.forEach((instance: number, index: number) => {
    if (index % 64 === 0) {
      const barHeight = instance < 127 ? 3 : Math.pow(instance - 123, 3);

      canvasContext2d!.fillStyle = "white";
      canvasContext2d!.fillRect(x, 300 - barHeight / 2, 84, barHeight);
      x += 2 + 84;
    }
  });
};
