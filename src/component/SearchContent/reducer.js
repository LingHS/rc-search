import React from "react";
function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.id]: action.value };

    default:
      throw new Error();
  }
}
export const SearchContext = React.createContext({
  state: {},
  dispatch: () => {}
});
export default reducer;
