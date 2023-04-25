import { Col, Form, Input, Row, Spin } from "antd";
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
    <Form form={form} layout="vertical">
      <Row>
        <Col sm={24} xs={24} md={12} xl={4} style={{marginLeft: '20px'}}>
          <Form.Item key="patientId" name="patientId" label="Patient №">
            <Input placeholder="Axtar..." />
          </Form.Item>
        </Col>
        <Col sm={24} xs={24} md={12} xl={5} style={{marginLeft: '20px'}}>
          <Form.Item key="patientName" name="patientName" label="Name">
            <Input placeholder="Axtar..." />
          </Form.Item>
        </Col>
        <Col sm={24} xs={24} md={12} xl={5} style={{marginLeft: '20px'}}>
          <Form.Item
            key="patientSurName"
            name="patientSurName"
            label="Surename"
          >
            <Input placeholder="Axtar..." />
          </Form.Item>
        </Col>
        <Col sm={24} xs={24} md={12} xl={5} style={{marginLeft: '20px'}}>
          <Form.Item key="phoneNumber" name="phoneNumber" label="Phone number">
            <Input placeholder="Axtar..." />
          </Form.Item>
        </Col>
        <Col sm={24} xs={24} md={12} xl={2} style={{marginLeft: '20px'}}>
          <button disabled={isSpin} onClick={onSearch} className="new_button" style={{marginTop:'30px'}}>
            {isSpin ? <Spin /> : "Axtar"}
          </button>
        </Col>
      </Row>
    </Form>
  );
};

export default memo(Searchnput);
