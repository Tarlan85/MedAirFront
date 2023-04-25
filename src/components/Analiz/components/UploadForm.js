import { Button, Form, Input, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useState } from "react";
import { styleInput } from "../../../date/styleInput";
import { useAnalizContext } from "../context";
import { UploadOutlined } from "@ant-design/icons";
import sendRequest from "../../../api/sendRequest";

const UploadForm = ({ form }) => {
  const { selectedUploadFormIteem, fileList, setFileList } = useAnalizContext();

  const onChange = (e) => {
    const { fileList: newFileList } = e;
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const beforeUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    let res = await sendRequest("analysesImage", formData, "post");
    if(res?.data){
      form.setFieldsValue({analyzesContentUrl: res.data})
    }
    return false;
  };

  if (!selectedUploadFormIteem) {
    return null;
  }

  return (
    <Form className="upload_form" form={form}>
      <Form.Item label="Description" name="analyzesDesc">
        <TextArea rows={3} style={styleInput} />
      </Form.Item>
      <Form.Item hidden name="analyzesContentUrl">
        <Input  />
      </Form.Item>
      <Form.Item name="analyzesContent">
        <Upload
          accept=".png,.pdf,.jpeg,.jpg"
          // action="http://localhost:3000/"
          listType="picture"
          beforeUpload={beforeUpload}
          defaultFileList={[...fileList]}
          onChange={onChange}
          onPreview={onPreview}
        >
          {!fileList[0] ? (
            <Button icon={<UploadOutlined />}>Upload</Button>
          ) : (
            ""
          )}
        </Upload>
      </Form.Item>
    </Form>
  );
};
export default memo(UploadForm);
