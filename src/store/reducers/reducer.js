import { MainState } from "../state";
import { SET_LANGUAGE, INIT_LANGUAGES } from "../types";
import { languages } from "../../constants/constant";
import { audioNumbers } from "../../constants/numbers";

export function rootReducer(state = MainState, action) {
  // console.log(action.payload);
  switch (action.type) {
    case INIT_LANGUAGES:
      return {
        ...state,
        alphabets: action.payload,
        language: "english",
        constants: { languages: languages, audioNumbers: audioNumbers },
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}
