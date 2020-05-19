import { SET_SOUND_VALUE } from "../types";

export const setSoundValue = (value) => {
  return {
    type: SET_SOUND_VALUE,
    payload: value,
  };
};
