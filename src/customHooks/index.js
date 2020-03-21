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
  return { value: state[id], onChange };
}

export function useSelect(id) {
  const { state, dispatch } = useContext(SearchContext);
  const onChange = useCallback(
    value => {
      dispatch({ type: "update", id, value });
    },
    [dispatch, id]
  );
  return { value: state[id], onChange };
}

export function useSearchButton(request, setResult) {
  const { state } = useContext(SearchContext);
  const [search, setSearch] = useState();
  useEffect(() => {
    request(search).then(res => {
      setResult(res);
    });
  }, [search, request, setResult]);
  const onClick = useCallback(() => {
    setSearch(state);
  }, [state]);
  return { onClick };
}

export function useResetButton() {
  const { dispatch } = useContext(SearchContext);
  const onClick = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);
  return { onClick };
}

export function useDate(id) {
  const { state, dispatch } = useContext(SearchContext);
  const onChange = useCallback(
    (date, dateString) => {
      dispatch({ type: "update", id, value: date });
    },
    [dispatch, id]
  );
  return { value: state[id], onChange };
}

export function useSearchContent(req, list) {
  const [result, setResult] = useState();
  const request = useCallback(req, []);
  return [result, { request, list, setResult }];
}
