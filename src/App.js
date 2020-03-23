import React, { useMemo } from "react";
import SearchContent, { useSearchContent } from "./lib/SearchContent";
function App(params) {
  const list = useMemo(
    () => [
      { type: "input", label: "姓名", id: "name" },
      { type: "input", label: "年龄", id: "age" },
      { type: "input", label: "身高", id: "height" },
      {
        type: "select",
        label: "select",
        id: "sheight",
        option: [
          { key: "1", value: 1 },
          { key: "2", value: 2 },
          { key: "3", value: 3 }
        ]
      },
      { type: "date", label: "time", id: "time" }
    ],
    []
  );
  function fetchData(params) {
    return Promise.resolve({ success: true });
  }

  const [data, searchContentProps] = useSearchContent(fetchData, list);
  return (
    <section
      style={{
        width: "1100px",
        margin: "20px auto",
        background: "#fff",
        padding: "20px"
      }}
    >
      <SearchContent {...searchContentProps} />
      {data && JSON.stringify(data)}
    </section>
  );
}

export default App;
