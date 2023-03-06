import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo } from "react";
import { useGlobalContext } from "../../context/context";
import { styleInput } from "../../date/styleInput";
import useResetForm from "../../hooks/useResetForm";

const HeaderMualice = () => {
  const [form] = Form.useForm();
  const { formValues, setFormValues } = useGlobalContext();

  const onFieldsChange = ([{ name, value }]) => {
    formValues.treatmentRB = { ...formValues.treatmentRB, [name]: value };
    setFormValues(formValues);
  };

  useResetForm({ form });

  return (
    <>
      <Row>
        <Col xs={24} xl={12}>
          <Form
            form={form}
            initialValues={formValues.treatmentRB}
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
            <Form.Item label="Pre menopause" name="preMenapause">
              <Input style={styleInput} />
            </Form.Item>
            <Form.Item label="Description" name="treatmentDesc">
              <TextArea style={styleInput} rows={3} />
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} xl={12}>
          <Form
            form={form}
            initialValues={formValues.treatmentRB}
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
            <Form.Item label="Menopause" name="menapause">
              <Input style={styleInput} />
            </Form.Item>
            <Form.Item label="Recommendation" name="recommendation">
              <TextArea style={styleInput} />
            </Form.Item>
            <Form.Item label="Advise" name="advise">
              <TextArea style={styleInput} />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default memo(HeaderMualice);
