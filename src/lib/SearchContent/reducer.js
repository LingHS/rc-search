import React from "react";
function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.id]: action.value };
    case "reset":
      let newState = {};
      Object.keys(state).forEach(element => {
        if (Array.isArray(state[element])) {
          newState[element] = [];
        } else {
          newState[element] = null;
        }
      });
      return newState;

    default:
      throw new Error();
  }
}
export const SearchContext = React.createContext({
  state: {},
  dispatch: () => {}
});
export default reducer;
