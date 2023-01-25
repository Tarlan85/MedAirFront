import { Affix, Form, Input } from "antd";
import React from "react";
import { useGlobalContext } from "../context/context";
import { useHandleSavePotient } from "../hooks";

const Potient = () => {
    const { formValues, setFormValues } = useGlobalContext();
    const { handleSavePotient } = useHandleSavePotient();
    const onFieldsChange = ([{ name, value }]) => {
        formValues.Potient = { ...formValues.Potient, [name]: value };
        setFormValues(formValues);
    };
    const handleSave = async () => {
        handleSavePotient();
    };
    return (
        <>
            <Affix className="affixProfile" offsetTop={"0"}>
                <div>
                    <Form
                        onFieldsChange={onFieldsChange}
                        layout="inline"
                        className="collapsForm"
                        initialValues={formValues.Potient}
                    >
                        <Form.Item label="Patient №" name="patientId">
                            <Input readOnly disabled style={{width: "100px"}} />
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
                        <button onClick={handleSave} className="new_button">
                            Save
                        </button>
                    </Form>
                </div>
            </Affix>
        </>
    );
};

export default Potient;
