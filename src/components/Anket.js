import React, { useEffect, useState } from "react";
import { Col, Form, Input, Row } from "antd";
import { Checkbox } from "antd";
import { Rate } from "antd";
import { DatePicker, Select, InputNumber } from "antd";
import { useGlobalContext } from "../context/context";
import moment from "moment";
import { styleInput } from "../date/styleInput";
import useResetForm from "../hooks/useResetForm";

const { Option } = Select;

const Anket = (props) => {
  const [form] = Form.useForm();
  const { formValues, setFormValues } = useGlobalContext();
  const [gender, setgender] = useState("Qadın");
  const OPTIONS = ["0-6", "6-12", "12-24", "24+"];

  const onFieldsChange = ([{ name, value }]) => {
    if (name[0] === "birthDate") {
      formValues.Anket = {
        ...formValues.Anket,
        [name]: moment(value).format("YYYY-MM-DD"),
      };
      setFormValues(formValues);
    } else if (name[0] === "alkogol" || name[0] === "smoke") {
      if (value) value = 1;
      else {
        value = 0;
      }
      formValues.Anket = { ...formValues.Anket, [name]: value };
      setFormValues(formValues);
    } else {
      formValues.Anket = { ...formValues.Anket, [name]: value };
      setFormValues(formValues);
    }
  };
  const onChangeSelectGender = (e) => {
    setgender(e);
  };
  useEffect(() => {
    if (formValues?.Anket) {
      formValues.Anket = { ...formValues.Anket, gender: "Gadın" };
      setFormValues(formValues);
    }
  }, []);

  useResetForm({ form });

  return (
    <>
      <Row>
        <Col xs={24} xl={12}>
          <Form
            form={form}
            initialValues={formValues.Anket}
            className="first"
            onFieldsChange={onFieldsChange}
            labelAlign="right"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 13,
            }}
          >
            <Form.Item label="Birth date" name="birthDate">
              <DatePicker style={styleInput} />
            </Form.Item>

            <Form.Item label="Birth place" name="birthPlace">
              <Input style={styleInput} />
            </Form.Item>
            <Form.Item name="phoneNumber" label="Phone Number">
              <Input style={styleInput} />
              {/* <Input style={{ width: "100%" }} /> */}
            </Form.Item>
            <Form.Item label="Sex" name="gender">
              <Select
                style={styleInput}
                allowClear
                onChange={onChangeSelectGender}
                defaultValue="Qadın"
              >
                <Option value="Qadın">Female</Option>
                <Option value="Kişi">Male</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Marital status" name="maritalStatus">
              <Select allowClear style={styleInput}>
                <Option value="Subay">Single</Option>
                <Option value="Evli">Married</Option>
                <Option value="Boşanmış">Divorced</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Sex status" name="sexStatus">
              <Select allowClear style={styleInput}>
                <Option value="Regular">Regular</Option>
                <Option value="Geyri regular">Irregular</Option>
              </Select>
            </Form.Item>

            <Form.Item valuePropName="checked" label="Alcohol" name="alkogol">
              <Checkbox />
            </Form.Item>

            <Form.Item valuePropName="checked" label="Smoking " name="smoke">
              <Checkbox />
            </Form.Item>

            <Form.Item label="Recom. person" name="recommendationPerson">
              <Input allowClear style={styleInput} />
            </Form.Item>

            <Form.Item label="Raiting" name="raiting">
              <Rate style={{ backgroundColor: "white" }} />
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} xl={12}>
          {gender === "Qadın" && (
            <>
              <Form
                form={form}
                className="second"
                onFieldsChange={onFieldsChange}
                labelAlign="right"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 13,
                }}
                initialValues={formValues.Anket}
              >
                <Form.Item
                  label="A cure for infertility"
                  name="cureForInfertility"
                >
                  <Input style={styleInput} />
                </Form.Item>
                <Form.Item label="Menopause" name="menopause">
                  <Input style={styleInput} />
                </Form.Item>

                <Form.Item label="Menarche" name="menarxe">
                  <Input style={styleInput} />
                </Form.Item>

                <Form.Item
                  label="Age of first childbirth"
                  name="firstChildbirth"
                >
                  <InputNumber
                    style={styleInput}
                    min={10}
                    max={60}
                    defaultValue={0}
                  />
                </Form.Item>

                <Form.Item label="Age of last childbirth" name="lastChildbirth">
                  <InputNumber
                    style={styleInput}
                    min={10}
                    max={60}
                    defaultValue={0}
                  />
                </Form.Item>

                <Form.Item label="Number of abortions" name="abortCount">
                  <InputNumber style={styleInput} min={0} defaultValue={0} />
                </Form.Item>
                <Form.Item label="Breastfeeding period" name="lactationPeriod">
                  <Select allowClear style={styleInput}>
                    {OPTIONS.map((option) => (
                      <Select.Option key={option} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Number of artificial inseminations"
                  name="artificialInseminationCount"
                >
                  <InputNumber style={styleInput} min={0} defaultValue={0} />
                </Form.Item>

                {/* <Form.Item
                                    label="Medications taken"
                                    name="cureTab"
                                >
                                    <TextArea style={styleInput} rows={3} />
                                </Form.Item> */}
              </Form>
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Form
          form={form}
          style={{ marginLeft: "9.5%" }}
          labelAlign="right"
          layout="inline"
          onFieldsChange={onFieldsChange}
          initialValues={formValues.Anket}
        >
          <Form.Item label="Height" name="height">
            <InputNumber min={0} defaultValue={0} />
          </Form.Item>

          <Form.Item label="Weight" name="weight">
            <InputNumber min={0} defaultValue={0} />
          </Form.Item>

          <Form.Item label="IMT" name="imt">
            <InputNumber min={0} defaultValue={0} />
          </Form.Item>
        </Form>
      </Row>
    </>
  );
};
export default Anket;
