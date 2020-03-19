import React, { useReducer } from "react";
import { Input, Select, Button } from "antd";
import { useInput, useSelect, useSearchButton} from "../../customHooks/index.js";
import reducer, { SearchContext } from "./reducer";
import "./SearchContent.less";

const { Option } = Select;
function InputWithLabel({ label, id }) {
  const inputConfig = useInput(id);
  return (
    <div className="search-item">
      <div style={{ width: "70px" }}>{label}: </div>
      <Input {...inputConfig} allowClear className="search-input" />
    </div>
  );
}

function SelectWithLabel({ label, id }) {
  const selectConfig = useSelect(id);
  return (
    <div className="search-item">
      <div style={{ width: "70px" }}>{label}: </div>
      <Select {...selectConfig} className="search-input" allowClear>
        <Option key="1">1</Option>
        <Option key="2">2</Option>
        <Option key="3">3</Option>
      </Select>
    </div>
  );
}

function ButtonWithLabel({ label }) {
  const buttonConfig = useSearchButton();
  return (
    <div className="search-item">
      <Button {...buttonConfig}>{label}</Button>
    </div>
  );
}

function SearchContent(props) {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <section className="search">
        {props.list.map(item => {
          switch (item.type) {
            case "input":
              return (
                <InputWithLabel key={item.id} id={item.id} label={item.label} />
              );
            case "select":
              return (
                <SelectWithLabel
                  key={item.id}
                  id={item.id}
                  label={item.label}
                />
              );
            case "searchButton":
              return <ButtonWithLabel key={item.label} label={item.label} />;
            default:
              return null;
          }
        })}
      </section>
    </SearchContext.Provider>
  );
}

export default SearchContent;
export { useSearchContent } from "../../customHooks/index.js";
