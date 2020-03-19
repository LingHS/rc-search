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

export function useSearchButton(url) {
  const { state } = useContext(SearchContext);
  const [search, setSearch] = useState();
  useEffect(() => {
    // api
    console.log(search,url)
  }, [search,url]);
  const onClick = useCallback(() => {
    setSearch(state);
  }, [state]);
  return { onClick };
}
export function useDate(id) {
  const { state, dispatch } = useContext(SearchContext);
  const onChange = useCallback(
    (date,dateString) => {
        console.log(date,dateString)
      dispatch({ type: "update", id, value:dateString });
    },
    [dispatch, id]
  );
  return { value: state.id, onChange };
}

export function useSearchContent(url, list) {
  const { state } = useContext(SearchContext);
  return [state, { url, list }];
}
