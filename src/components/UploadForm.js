import { Form, message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import { styleInput } from "../date/styleInput";

const UploadForm = (props) => {
    const { label, name } = props;

    const [fileList, setFileList] = useState([]);

    const { analizFileList, setAnalizFileList } = useGlobalContext();

    const onChange = (e) => {
        const { fileList: newFileList } = e;
        setFileList(newFileList);
        analizFileList[name + "Media"] = newFileList;
        setAnalizFileList(analizFileList);
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

    return (
        <div className="upload_form">
            <Form.Item label={label} name={name + "Desc"}>
                <TextArea rows={3} style={styleInput} />
            </Form.Item>
            <ImgCrop rotate>
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={onPreview}
                    onChange={onChange}
                >
                    {fileList.length < 5 && "+ Upload"}
                </Upload>
            </ImgCrop>
        </div>
    );
};
export default UploadForm;
