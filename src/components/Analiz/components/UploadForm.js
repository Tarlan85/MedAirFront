import { Button, Form, Image, Input, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useEffect, useState } from "react";
import { styleInput } from "../../../date/styleInput";
import { useAnalizContext } from "../context";
import { UploadOutlined } from "@ant-design/icons";
import sendRequest from "../../../api/sendRequest";
import { deepCopy } from "../../../functions/deepCopy";

const UploadForm = ({ form }) => {
  const { selectedUploadFormIteem, selectedRowTable, setSelectedRowTable } =
    useAnalizContext();

  const [imageUrl, setImageUrl] = useState();
  const [imagePdfUrl, setImagePdfUrl] = useState();

  const showImage = (url) => {
    if (url) {
      const lastDotIndex = url.lastIndexOf(".");
      const result = url.substring(lastDotIndex + 1);
      if (result === 'pdf') {
        setImagePdfUrl(url)
      } else {
        setImageUrl(url)
      }
    }
  }

  useEffect(() => {
    const url = selectedRowTable?.analyzesContentUrl
    if (url) {
      showImage(url)
    } else {
      setImageUrl(null)
      setImagePdfUrl(null)
    }
  }, [selectedRowTable])

  const onChange = (e) => {
    try {
      const { fileList: newFileList } = e;
      if (newFileList && newFileList[0]?.name) {
        let analyzesContentName = newFileList[0]?.name
        form.setFieldsValue({ analyzesContentName })
      }
    } catch (error) {
      console.log('%c error', 'background: red; color: dark', error);
    }
  };

  const beforeUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    let res = await sendRequest("analysesImage", formData, "post");
    if (res?.data) {
      const url = res.data
      showImage(url)
      form.setFieldsValue({ analyzesContentUrl: res.data });
    }
    return false;
  };

  const handleDeleteImg = () => {
    try {
      setImageUrl(null)
      setImagePdfUrl(null)
      form.setFieldsValue({ analyzesContentUrl: '' });
      let copy = deepCopy(selectedRowTable)
      delete copy.analyzesContentUrl
      delete copy.analyzesContentName
      setSelectedRowTable(copy)
    } catch (error) {
      console.log('%c error', 'background: red; color: dark', error);
    }
  }

  if (!selectedUploadFormIteem) {
    return null;
  }

  return (
    <>
      <Form.Item label="Description" name="analyzesDesc">
        <TextArea
          showCount
          maxLength={3000}
          rows={3} style={styleInput} />
      </Form.Item>
      <Form.Item hidden name="analyzesContentUrl">
        <Input />
      </Form.Item>
      <Form.Item hidden name="analyzesContentName">
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {
          imageUrl ? (
            <div style={{ display: 'flex' }}>
              <Image width={200} src={imageUrl} />
              <div onClick={handleDeleteImg} style={{ cursor: 'pointer', marginLeft: '5px' }}>X</div>
            </div>
          ) : imagePdfUrl ? (
            <div style={{ display: 'flex' }}>
              <embed src={imagePdfUrl} type="application/pdf" width="100%" height="600px"
              />
              <div onClick={handleDeleteImg} style={{ cursor: 'pointer', marginLeft: '5px' }}>X</div>
            </div>
          ) : (
            <Form.Item>
              <Upload
                accept=".png,.pdf,.jpeg,.jpg"
                listType="picture"
                beforeUpload={beforeUpload}
                onChange={onChange}
              >
                {!imageUrl ? (
                  <Button icon={<UploadOutlined />}>Upload</Button>
                ) : (
                  ""
                )}
              </Upload>
            </Form.Item>
          )}
      </Form.Item>
    </>
  );
};
export default memo(UploadForm);





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