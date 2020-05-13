import { MainState } from "../state";
import { SET_LANGUAGE, INIT_LANGUAGES } from "../types";

export function rootReducer(state = MainState, action) {
  // console.log(action);
  switch (action.type) {
    case INIT_LANGUAGES:
      return { ...state, alphabets: action.payload, language: "english" };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
}
