export const getGainNode = (
  currentAudioContext: AudioContext,
  initialGain: number
) => {
  const gainNode = currentAudioContext.createGain();

  gainNode.gain.value = initialGain;
  return {
    gainNode
  };
};
