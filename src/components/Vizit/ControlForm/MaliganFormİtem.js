import { Checkbox, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useEffect, useState } from "react";
import { styleInput } from "../../../date/styleInput";
import useLabel from "../../EditTableComponent/hooks/useLabel";
import { useVisitContext } from "../context";

const MaliganFormİtem = ({ name, form }) => {
  const { activeRow } = useVisitContext();

  const [checked, setChecked] = useState();

  const label = useLabel({ activeRow });

  const onChange = (e) => {
    console.log(e);
    setChecked(e);
  };

  useEffect(() => {
    let defaultChecked = form.getFieldsValue()[name.toLowerCase() + "Description"] ? true : false
    setChecked(defaultChecked);
    form.setFieldsValue({ [name.toLowerCase()]: defaultChecked})
  },[])


  return (
    <Form
      form={form}
      className="control_fom"
      labelAlign="right"
      layout="inline"
      labelCol={{
        span: 51,
      }}
      wrapperCol={{
        span: 13,
      }}
    >
      <Form.Item
        valuePropName="checked"
        label={label(name)}
        name={name.toLowerCase()}
      >
        <Checkbox checked={checked} onChange={onChange} />
      </Form.Item>
      <Form.Item
        label={label("Description")}
        name={name.toLowerCase() + "Description"}
      >
        <TextArea style={styleInput} rows={2} />
      </Form.Item>
    </Form>
  );
};

export default memo(MaliganFormİtem);
