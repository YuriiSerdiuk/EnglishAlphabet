import { Howl, Howler } from "howler";

export const makeSound = (id, audioAlphabet, value) => {
  const sound = new Howl({
    src: audioAlphabet[id],
  });
  sound.play();
  Howler.volume(value);
};

export const getMediaQuery = (media) =>
  Object.entries(media).filter((el) => el[1] === true)[0];
