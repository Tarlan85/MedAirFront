import { Col, Form, Radio, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/context";
import Family from "../../Family";
import { styleInput } from "../../../date/styleInput";
import { useLayoutEffect } from "react";

const { Option } = Select;

const HeaderMorby = () => {
  const { formValues, setFormValues } = useGlobalContext();

  const [ownInjuryReason, setownInjuryReason] = useState();

  const onFieldsChange = ([{ name, value }]) => {
    formValues.Morbi = { ...formValues.Morbi, [name]: value };
    setFormValues(formValues);
  };

  useLayoutEffect(() => {
    if (formValues.Morbi.ownInjuryReason) {
      setownInjuryReason(1);
    }
  }, [formValues.Morbi]);

  return (
    <>
      <Row>
        <Col xs={24} xl={12}>
          <Form
            initialValues={{
              ...formValues.Morbi,
              Received_traumas: formValues.Morbi.ownInjuryReason ? 1 : null,
            }}
            onFieldsChange={onFieldsChange}
            className="collapsForm"
            labelAlign="right"
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 13,
            }}
          >
            <Form.Item label="Allergies" name="allergyAvailability">
              <TextArea style={styleInput} rows={3} />
            </Form.Item>
            <Form.Item label="Receved treatement" name="medicationTaken">
              <TextArea style={styleInput} rows={3} />
            </Form.Item>
            <Form.Item label="Initial diagnosis" name="preliminaryDiagnosis">
              <TextArea allowClear style={styleInput} rows={3} />
            </Form.Item>
            <Form.Item label="Received traumas" name="Received_traumas">
              <Radio.Group
                value={ownInjuryReason}
                defaultValue={ownInjuryReason}
                onChange={(e) => setownInjuryReason(e.target.value)}
              >
                <Radio value={1}>Yes</Radio>
                <Radio value={2}>No</Radio>
              </Radio.Group>
            </Form.Item>
            {ownInjuryReason === 1 && (
              <Form.Item label="Description" name="ownInjuryReason">
                <TextArea style={styleInput} />
              </Form.Item>
            )}
            <Form.Item label="Malignant" name="maliqan">
              <Select style={styleInput} allowClear>
                <Option value={"Sağ"}>Right</Option>
                <Option value={"Sol"}>Left</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Benign" name="beniqen">
              <Select style={styleInput}>
                <Option value={"Sağ"}>Right</Option>
                <Option value={"Sol"}>Left</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Malignant?" name="maliqanQuestion">
              <Select style={styleInput} allowClear>
                <Option value={"Sağ"}>Right</Option>
                <Option value={"Sol"}>Left</Option>
              </Select>
            </Form.Item>
          </Form>
          {/* <Family /> */}
        </Col>
        <Col xs={24} xl={12}>
          <Family />
        </Col>
      </Row>
      <hr style={{ margin: "20px" }} />
    </>
  );
};

export default HeaderMorby;
