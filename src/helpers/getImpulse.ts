export const getImpulseBuffer = (
  audioCtx: AudioContext,
  impulseUrl: string
) => {
  return fetch(impulseUrl)
    .then(response => {
      return response.arrayBuffer();
    })
    .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer));
};
