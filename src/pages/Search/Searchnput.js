import { Col, Form, Input, InputNumber, Row, Spin } from "antd";
import React, { memo, useState } from "react";
import sendRequest from "../../api/sendRequest";
import useClearDataProfileTables from "./hooks/useClearDataProfileTables";

const Searchnput = ({ setdataSource }) => {
  const [form] = Form.useForm();
  const [isSpin, setisSpin] = useState(false);

  const { clearDataProfileTables } = useClearDataProfileTables();

  const onSearch = async () => {
    setisSpin(true);
    clearDataProfileTables();
    const searchObj = form.getFieldsValue();
    try {
      let res = await sendRequest("search", searchObj, "post");
      setdataSource(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setisSpin(false);
    }
  };

  return (
    <Form
      form={form}
      layout="inline"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
    >
      <Col sm={24} xs={24} md={12} xl={4}>
        <Form.Item
          labelCol={{ span: 12 }}
          wrapperCol={{ span: 12 }}
          key="patientId"
          name="patientId"
          label="Patient №"
        >
          <InputNumber placeholder="Axtar..." />
        </Form.Item>
      </Col>
      <Col sm={24} xs={24} md={12} xl={5}>
        <Form.Item key="patientName" name="patientName" label="Name">
          <Input placeholder="Axtar..." />
        </Form.Item>
      </Col>
      <Col sm={24} xs={24} md={12} xl={6}>
        <Form.Item key="patientSurName" name="patientSurName" label="Surename">
          <Input placeholder="Axtar..." />
        </Form.Item>
      </Col>
      <Col sm={24} xs={24} md={12} xl={6}>
        <Form.Item key="phoneNumber" name="phoneNumber" label="Phone number">
          <Input placeholder="Axtar..." />
        </Form.Item>
      </Col>
      <Col sm={24} xs={24} md={12} xl={2}>
        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <button disabled={isSpin} onClick={onSearch} className="new_button">
            {isSpin ? <Spin /> : "Axtar"}
          </button>
        </Form.Item>
      </Col>
    </Form>
  );
};

export default memo(Searchnput);
