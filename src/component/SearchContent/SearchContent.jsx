import React, { useReducer } from "react";
import { Input, Select, Button,DatePicker,Row,Col } from "antd";
import { useInput, useSelect, useSearchButton,useDate} from "../../customHooks/index.js";
import reducer, { SearchContext } from "./reducer";
import "./SearchContent.less";

const { Option } = Select;
const { RangePicker } = DatePicker;

function InputWithLabel({ label, id }) {
  const inputConfig = useInput(id);
  return (
    <div className="search-item">
      <div style={{ width: "70px",textAlign:"right",marginRight:'0.7em' }}>{label}:  </div>
      <Input {...inputConfig} allowClear className="search-input" />
    </div>
  );
}

function SelectWithLabel({ label, id }) {
  const selectConfig = useSelect(id);
  return (
    <div className="search-item">
      <div style={{ width: "70px",textAlign:"right",marginRight:'0.7em'  }}>{label}:  </div>
      <Select {...selectConfig} className="search-input" allowClear>
        <Option key="1">1</Option>
        <Option key="2">2</Option>
        <Option key="3">3</Option>
      </Select>
    </div>
  );
}

function ButtonWithLabel({ label ,url}) {
  const buttonConfig = useSearchButton(url);
  return (
    <div className="search-item">
      <Button {...buttonConfig} type="primary">{label}</Button>
    </div>
  );
}

function DateWithLabel({label, id}){
    const dateConfig = useDate(id);
    return (
    <div className="search-item" style={{width:'fit-content'}}>
      <div style={{ width: "70px",textAlign:"right",marginRight:'0.7em'  }}>{label}:  </div>
      <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        {...dateConfig}
        />
    </div>
    )
}

function SearchContent(props) {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <section >
      <Row gutter={[16, 24]}>
        {props.list.map(item => {
          switch (item.type) {
            case "input":
              return (
                 <Col key={item.id} span={8}><InputWithLabel  id={item.id} label={item.label} /></Col>
              );
            case "select":
              return (
                <Col key={item.id} span={8}><SelectWithLabel
                  id={item.id}
                  label={item.label}
                />
                </Col>
              );
            case "searchButton":
              return <Col key={item.label} span={8}><ButtonWithLabel  label={item.label} url={props.url}/></Col>
            case "button":
              return <Col key={item.label} span={8}><div  label={item.label} className="search-item" >
                        <Button onClick={item.onClick} type="primary" ghost>{item.label}</Button>
                    </div></Col>
            case "date":
              return <Col key={item.id} span={8}><DateWithLabel  id={item.id} label={item.label}/></Col>
            default:
              return null;
          }
        })}
        </Row>
      </section>
    </SearchContext.Provider>
  );
}

export default SearchContent;
export { useSearchContent } from "../../customHooks/index.js";
