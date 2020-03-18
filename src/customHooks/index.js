import { useContext, useState, useCallback, useEffect } from "react";
import { SearchContext } from "../component/SearchContent/reducer";

export function useInput(id) {
  const { state, dispatch } = useContext(SearchContext);
  const onChange = useCallback(
    e => {
      dispatch({ type: "update", id, value: e.target.value });
    },
    [dispatch, id]
  );
  return { value: state.id, onChange };
}

export function useSelect(id) {
  const { state, dispatch } = useContext(SearchContext);
  const onChange = useCallback(
    value => {
      dispatch({ type: "update", id, value });
    },
    [dispatch, id]
  );
  return { value: state.id, onChange };
}

export function useButton(params) {
  const { state } = useContext(SearchContext);
  const [search, setSearch] = useState();
  useEffect(() => {
    // api
  }, [search]);
  const onClick = useCallback(() => {
    setSearch(state);
  }, [state]);
  return { onClick };
}
