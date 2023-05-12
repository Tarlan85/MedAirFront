import { Form, List, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { styleInput } from "../../date/styleInput";

const { Option } = Select;

const Benigen = () => {
  const [dataList, setDataList] = useState([]);
  const [list1, setlist1] = useState();
  const [list2, setlist2] = useState();

  const deleteList = (item) => {
    let newDataList = dataList.filter((list) => list.id !== item.id);
    setDataList(newDataList);
  };
  const onClickADD = () => {
    if (list1 && list2) {
      let a = {
        id: new Date().getUTCMilliseconds(),
        text: `${list1} ${list2}`,
      };
      setDataList([...dataList, a]);
    }
  };
  return (
    <>
      <div className="benigen">
        <Select allowClear onChange={(e) => setlist1(e)} style={{ width: "200px" }} >
          <Option value="Lumpektamiya">Lumpektamiya</Option>
          <Option value="Reduksiya">Reduksiya</Option>
          <Option value="Mastopeksiya">Mastopeksiya</Option>
          <Option value="Augumentasiya">Augumentasiya</Option>
          <Option value="Extra breast">Extra breast</Option>
        </Select>
        <Select allowClear
          onChange={(e) => setlist2(e)}
          style={{ width: "200px", marginLeft: "10px" }}
        >
          <Option value="Right">Right</Option>
          <Option value="Left">Left</Option>
          <Option value="Both">Both</Option>
          <Option value="Sectoral">Sectoral</Option>
          <Option value="Sectoral round block">Sectoral round block</Option>
          <Option value="Expander">Expander</Option>
        </Select>
        <button onClick={onClickADD} className="new_button">
          Add
        </button>
        <List
          size="small"
          style={{ ...styleInput, margin: "15px 0px" }}
          bordered
          dataSource={dataList}
          renderItem={(item) => (
            <List.Item>
              <div>{item.text}</div>
              <button
                className="delete-family-list"
                onClick={() => deleteList(item)}
              >
                x
              </button>
            </List.Item>
          )}
        />
      </div>
      <Form.Item label="Description" name="treatmentTypeDesc">
        <TextArea
          showCount
          maxLength={3000}
          style={styleInput} rows={3} />
      </Form.Item>
    </>
  );
};

export default Benigen;
