import React,{ useMemo } from "react";
import SearchContent, {
  useSearchContent
} from "../component/SearchContent/SearchContent";
function Index(params) {
  const list = useMemo(
    () => [
      { type: "input", label: "姓名", id: "name" },
      { type: "input", label: "年龄", id: "age" },
      { type: "input", label: "身高", id: "height" },
      { type: "select", label: "select身高", id: "sheight" },
      { type: "button", label: "查询" },
      { type: "button", label: "按钮" }
    ],
    []
  );
  const [data, searchContentProps] = useSearchContent("url", list);

  return (
    <section>
      <SearchContent {...searchContentProps} />
    </section>
  );
}

export default Index;
