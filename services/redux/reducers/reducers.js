import * as types from "../types/types";

const Reducer = (
  state = {
    userInfo: {
      name: "guest",
    },
  },
  action
) => {
  switch (action.type) {
    case types.SET_NAME:
      return { ...state, userInfo: { name: action.payload } };

    default:
      return { ...state };
  }
};

export default Reducer;
