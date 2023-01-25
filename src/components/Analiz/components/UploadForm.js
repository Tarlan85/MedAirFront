import { Button, Form, Upload } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo } from "react";
import { styleInput } from "../../../date/styleInput";
import { useAnalizContext } from "../context";
import { UploadOutlined } from "@ant-design/icons";

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

    if (!selectedUploadFormIteem) {
        return null;
    }

    return (
            <Form className="upload_form" form={form}>
                <Form.Item label="Description" name="analyzesDesc">
                    <TextArea rows={3} style={styleInput} />
                </Form.Item>
                <Form.Item name="analyzesContent">
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
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
