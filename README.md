# 基于 react hooks 和 antd 封装的搜索栏

B 端管理系统经常出现下面这样的布局

| logo | 页头                                  |
| ---- | ------------------------------------- |
| 侧边 | 搜索栏（几个 input 框加一个搜索按钮） |
| 侧边 | 表格                                  |
| 侧边 | 页脚                                  |

由于很场景很常见，每次都实现相同的逻辑是不能接受的。
所以将搜索栏封装成组件

| 参数    | 功能               | 值                                                |
| ------- | ------------------ | ------------------------------------------------- |
| request | 点击查询执行的函数 | function(queryConditions:{})                      |
| list    | 查询条件列表       | [type, label, id] 种类，输入框前显示的值，字段 id |

type
| 种类 | |
| ------- |---|
| input ||
| select | 多一个 option 属性 [{key,value}]
|date|

截图
![image](https://raw.githubusercontent.com/LingHS/rc-search/master/pic.png)

使用

```js
import React, { useMemo } from "react";
import SearchContent, { useSearchContent } from "xxx";
// ...
function fetchData(params) {
  return Promise.resolve({ success: true });
}
// fetchData函数，应直接返回一个Promise，返回的值将赋值给result。
// 你应该处理好关于请求的一切

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
const [result, searchContentProps] = useSearchContent(fetchData, list);
// result --> { success: true }
//...
return (
  // ...
  <SearchContent {...searchContentProps} />
  // ...
);
```
