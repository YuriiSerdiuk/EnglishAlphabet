export const makeSound = (id, Howl, Howler, audioAlphabet) => {
  const sound = new Howl({
    src: audioAlphabet[id],
  });
  sound.play();
  Howler.volume(1.0);
};
