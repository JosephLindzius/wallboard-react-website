import { ICounterAction } from "./actions";
export function counterReducer(state = 0, action: ICounterAction) {
  if (action.type === "INC") {
    return state + action.step;
  }
  if (action.type === "DEC") {
    return state - action.step;
  }
  return state;
}
