import { Button, Col, Form, Modal, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useEffect } from "react";
import { styleInput } from "../../../date/styleInput";
import { useAnalizContext } from "../context";
import { other, breastSelectOpnions } from "../data";
import useHandleOnClickButton from "../hooks/useHandleOnClickButton";
import UploadForm from "./UploadForm";

const selectStyle = { ...styleInput, marginRight: "10px" };

const ModalAnaliz = () => {
    const [form] = Form.useForm();

    const {
        isModalOpen,
        selectOption,
        setSelectOption,
        setSelectedUploadFormIteem,
        breastType,
        setBreastType,
        isNew,
        activeRow,
    } = useAnalizContext();

    useEffect(() => {
        if (isModalOpen && isNew) {
            setSelectOption(breastSelectOpnions);
            form.setFieldsValue({ analyzesType: "Breast" });
        }
    }, [isModalOpen]);

    const onSelectBreastType = (e) => {
        if (e === "Breast") {
            setSelectOption(breastSelectOpnions);
        } else if (e === "Other analysis") {
            setSelectOption(other);
        } else {
            setSelectOption(null);
        }
        form.setFieldsValue({ subType: "" });
        setSelectedUploadFormIteem();
        setBreastType(e);
    };
    const onSelectSubType = (e) => {
        setSelectedUploadFormIteem(e);
    };

    const { handleAdd, handleAddNext, handleCancel, handleEdit } =
        useHandleOnClickButton({
            form,
        });

    const footer = activeRow
        ? [
              <Button onClick={handleEdit}>Edit</Button>,
              <Button onClick={handleCancel} danger type="primary">
                  Cancel
              </Button>,
          ]
        : [
              <Button onClick={handleAdd}>Add</Button>,
              <Button onClick={handleAddNext}>Add next</Button>,
              <Button onClick={handleCancel} danger type="primary">
                  Cancel
              </Button>,
          ];

          
    return (
        <Modal
            width={"60%"}
            title="Analysis"
            visible={isModalOpen}
            onCancel={handleCancel}
            footer={footer}
        >
            <Row>
                <Col xs={24} xl={12}>
                    <Form form={form}>
                        <Form.Item name="analyzesType">
                            <Select
                                style={selectStyle}
                                defaultValue={"Breast"}
                                onSelect={onSelectBreastType}
                            >
                                <Select.Option value="Breast">
                                    Breast
                                </Select.Option>
                                <Select.Option value="Other analysis">
                                    Other analysis
                                </Select.Option>
                                <Select.Option value="Other healthcare area">
                                    Other healthcare area
                                </Select.Option>
                            </Select>
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={24} xl={12}>
                    {selectOption && (
                        <Form form={form}>
                            <Form.Item label="Analysis type" name="analyzesSubeType">
                                <Select
                                    style={selectStyle}
                                    onSelect={onSelectSubType}
                                >
                                    {selectOption?.map((i) => (
                                        <Select.Option key={i} value={i}>
                                            {i}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Form>
                    )}
                </Col>
            </Row>
            {selectOption ? <UploadForm form={form} /> : ''}
            {breastType === "Other healthcare area" && (
                <Form form={form}>
                    <Form.Item label="Description" name="analyzesDesc">
                        <TextArea rows={3} style={selectStyle} />
                    </Form.Item>
                </Form>
            )}
        </Modal>
    );
};

export default memo(ModalAnaliz);
