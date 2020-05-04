export const makeSound = (id, Howl, Howler, audioAlphabet) => {
  const sound = new Howl({
    src: audioAlphabet[id],
  });
  sound.play();
  Howler.volume(1.0);
};

export const getMediaQuery = (media) =>
  Object.entries(media).filter((el) => el[1] === true)[0];
