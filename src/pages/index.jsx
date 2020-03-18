import React from "react";
import SearchContent from "../component/SearchContent/SearchContent";
function Index(params) {
  return (
    <section>
      <SearchContent
        list={[
          { type: "input", label: "姓名", id: "name" },
          { type: "input", label: "年龄", id: "age" },
          { type: "input", label: "身高", id: "height" },
          { type: "select", label: "select身高", id: "sheight" },
          { type: "button", label: "按钮" }
        ]}
      />
    </section>
  );
}

export default Index;
