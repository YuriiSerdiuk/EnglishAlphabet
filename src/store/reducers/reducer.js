import { MainState } from "../state";

export function rootReducer(state = MainState, action) {
  console.log(action)
  switch (action.type) {
    case "INIT_LANGUAGES": return { ...state, alphabets: action.payload }
    default: return state
  }
}
