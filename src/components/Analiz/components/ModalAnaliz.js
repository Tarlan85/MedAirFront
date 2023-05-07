import { Button, Col, Form, Image, Modal, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useEffect } from "react";
import { styleInput } from "../../../date/styleInput";
import { useAnalizContext } from "../context";
import { other, breastSelectOpnions } from "../data";
import useHandleOnClickButton from "../hooks/useHandleOnClickButton";
import UploadForm from "./UploadForm";
import sendRequest from "../../../api/sendRequest";

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

  const fetchAnalysisId = async () => {
    let res = await sendRequest('analysid')
    if (res) {
      return res
    } else return 0
  }

  const onClcikAdd = async () => {
    let analyzesId = await fetchAnalysisId()
    console.log('analyzesId',analyzesId);
    form?.setFieldsValue?.({ analyzesId })
    handleAdd()
  }

  const footer = activeRow
    ? [
      <Button onClick={handleEdit}>Edit</Button>,
      <Button onClick={handleCancel} danger type="primary">
        Cancel
      </Button>,
    ]
    : [
      <Button onClick={onClcikAdd}>Add</Button>,
      <Button onClick={handleAddNext}>Add next</Button>,
      <Button onClick={handleCancel} danger type="primary">
        Cancel
      </Button>,
    ];

  return (
    <Modal
      title="Analysis"
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={footer}
    >
      <Form
        labelAlign="left"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        form={form}
      >
        <Form.Item name="analyzesType" label="Analyzes type">
          <Select
            style={selectStyle}
            defaultValue={"Breast"}
            onSelect={onSelectBreastType}
          >
            <Select.Option value="Breast">Breast</Select.Option>
            <Select.Option value="Other analysis">Other analysis</Select.Option>
            <Select.Option value="Other healthcare area">
              Other healthcare area
            </Select.Option>
          </Select>
        </Form.Item>
        {selectOption && (
          <Form.Item label="Analyses sub type" name="analyzesSubType">
            <Select style={selectStyle} onSelect={onSelectSubType}>
              {selectOption?.map((i) => (
                <Select.Option key={i} value={i}>
                  {i}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        )}

        {selectOption ? (
          <UploadForm form={form} selectOption={selectOption} />
        ) : (
          ""
        )}
        {breastType === "Other healthcare area" && (
          <Form.Item label="Description" name="analyzesDesc">
            <TextArea rows={3} style={selectStyle} />
          </Form.Item>
        )}
      </Form>

      <Form.Item name='analyzesId' />

    </Modal>
  );
};

export default memo(ModalAnaliz);
