import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { Input, Select, Button, DatePicker, Row, Col } from "antd";
import reducer, { SearchContext } from "./reducer";
import {
  useInput,
  useSelect,
  useSearchButton,
  useResetButton,
  useDate
} from "./customHook";
import "./SearchContent.less";

const { Option } = Select;
const { RangePicker } = DatePicker;

function InputWithLabel({ label, id }) {
  const inputConfig = useInput(id);
  return (
    <div className="search-item">
      <div style={{ width: "70px", textAlign: "right", marginRight: "0.7em" }}>
        {label}:{" "}
      </div>
      <Input {...inputConfig} allowClear className="search-input" />
    </div>
  );
}

function SelectWithLabel({ label, id, option }) {
  const selectConfig = useSelect(id);
  return (
    <div className="search-item">
      <div style={{ width: "70px", textAlign: "right", marginRight: "0.7em" }}>
        {label}:{" "}
      </div>
      <Select {...selectConfig} className="search-input" allowClear>
        {option.map(item => (
          <Option key={item.key}>{item.value}</Option>
        ))}
      </Select>
    </div>
  );
}

function SearchButtonWithLabel({ request, setResult }) {
  const buttonConfig = useSearchButton(request, setResult);
  return (
    <Button {...buttonConfig} type="primary">
      查询
    </Button>
  );
}

function ResetButtonWithLabel() {
  const buttonConfig = useResetButton();
  return <Button {...buttonConfig}>重置</Button>;
}

function DateWithLabel({ label, id }) {
  const dateConfig = useDate(id);
  return (
    <div className="search-item">
      <div style={{ width: "70px", textAlign: "right", marginRight: "0.7em" }}>
        {label}:{" "}
      </div>
      <RangePicker
        showTime={{ format: "HH:mm" }}
        format="YYYY-MM-DD HH:mm"
        {...dateConfig}
      />
    </div>
  );
}

function SearchContent({ request, list, setResult }) {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <Row gutter={[16, 24]}>
        {list.map(item => {
          switch (item.type) {
            case "input":
              return (
                <Col key={item.id} span={8}>
                  <InputWithLabel id={item.id} label={item.label} />
                </Col>
              );
            case "select":
              return (
                <Col key={item.id} span={8}>
                  <SelectWithLabel
                    id={item.id}
                    label={item.label}
                    option={item.option}
                  />
                </Col>
              );
            case "date":
              return (
                <Col key={item.id} span={8}>
                  <DateWithLabel id={item.id} label={item.label} />
                </Col>
              );
            default:
              return null;
          }
        })}
        <Col span={4} offset={4}>
          <div className="search-button-group">
            <SearchButtonWithLabel
              label={"search"}
              request={request}
              setResult={setResult}
            />
            <ResetButtonWithLabel label={"reset"} />
          </div>
        </Col>
      </Row>
    </SearchContext.Provider>
  );
}
SearchContent.propTypes = {
  request: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(function(
    propValue,
    key,
    componentName,
    location,
    propFullName
  ) {
    if (
      propValue[key].hasOwnProperty("id") &&
      propValue[key].hasOwnProperty("label") &&
      propValue[key].hasOwnProperty("type")
    ) {
    } else {
      return new Error("请检查list参数的每一项的id，label，type是否存在");
    }
  })
};

export default SearchContent;
