export const getDistortionCurve = (value: number, context: AudioContext) => {
  const curve = new Float32Array(context.sampleRate);
  const deg = Math.PI / 90;
  var x;

  return curve.map((element, index) => {
    x = (index * 2) / context.sampleRate - 1;
    return ((3 + value) * x * 5 * deg) / (Math.PI + value * Math.abs(x));
  });
};
