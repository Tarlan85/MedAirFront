import { Affix, Form, Input } from "antd";
import React from "react";
import { useGlobalContext } from "../context/context";
import { useHandleSavePotient } from "../hooks";
import useResetForm from "../hooks/useResetForm";
import useClearPatientFormhomeValues from "../pages/Home/hooks/useClearPatientFormhomeValues";

const Potient = () => {
  const [form] = Form.useForm();
  const { formValues, setFormValues } = useGlobalContext();
  const { handleSavePotient } = useHandleSavePotient();
  const onFieldsChange = ([{ name, value }]) => {
    formValues.Potient = { ...formValues.Potient, [name]: value };
    setFormValues(formValues);
  };
  const handleSave = async () => {
    handleSavePotient();
  };

  const { clearPatient } = useClearPatientFormhomeValues();
  const handleClear = () => {
    clearPatient();
  };

  useResetForm({ form });

  return (
    <>
      <Affix className="affixProfile" offsetTop={"0"}>
        <div>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={form}
            onFieldsChange={onFieldsChange}
            layout="inline"
            className="collapsForm"
            initialValues={formValues.Potient}
          >
            <Form.Item label="Patient №" name="patientId">
              <Input readOnly disabled />
            </Form.Item>
            <Form.Item label="Name" name="patientName">
              <Input />
            </Form.Item>
            <Form.Item label="Surname" name="patientSurName">
              <Input />
            </Form.Item>
            <Form.Item label="Patronymic" name="patientPatronymic">
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
              <button onClick={handleSave} className="new_button">
                Save
              </button>
              <button onClick={handleClear} className="new_button_clear">
                Clear
              </button>
            </Form.Item>
          </Form>
        </div>
      </Affix>
    </>
  );
};

export default Potient;
