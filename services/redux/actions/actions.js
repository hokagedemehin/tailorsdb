import * as types from "../types/types";

export const setInfo = (name) => ({
  type: types.SET_NAME,
  payload: name,
});
