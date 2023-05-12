import { Card, Space } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../../../context/context";
import { styleInput } from "../../../../../date/styleInput";
import { useCanvasContext } from "../context";
const CanvasDesctiptions = ({ imgName, refConvas }) => {
    const {
        canvasColor,
        descriptionInputValue,
        setDescriptionInputValue,
    } = useCanvasContext();
    const { descriptionsCanvas, setDescriptionsCanvas } = useGlobalContext();


    const compyutationColorNumber = () => {
        let colorNumber = 0
        let data = refConvas.current.getSaveData();
        data = data ? JSON.parse(data) : ''
        if (data?.lines[0]) {
            data.lines.forEach(i => {
                if (i.brushColor === canvasColor) {
                    colorNumber += 1
                }
            })
        }

        return colorNumber ? colorNumber : 1
    }

    const onChangeDescription = (e) => {
        let colorNumber = compyutationColorNumber()
        setDescriptionInputValue(e.target.value);
        let objProperty = imgName + canvasColor + colorNumber;
        descriptionsCanvas[objProperty] = e.target.value;
        setDescriptionsCanvas(descriptionsCanvas);
    };

    useEffect(() => {
        let colorNumber = compyutationColorNumber()
        let objProperty = imgName + canvasColor + colorNumber;
        if (Object.hasOwn(descriptionsCanvas, objProperty)) {
            setDescriptionInputValue(descriptionsCanvas[objProperty]);
        } else setDescriptionInputValue("");
    }, [canvasColor]);
    return (
        <Space
            direction="vertical"
            size="middle"
            style={{
                display: "flex",
                width: "100%",
            }}
        >
            <Card title="Desctiptions" size="small">
                <Space direction="horizontal">
                    <div
                        style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: canvasColor,
                            borderRadius: "50%",
                        }}
                    ></div>
                    <TextArea
                        showCount
                        maxLength={3000}
                        value={descriptionInputValue}
                        onChange={onChangeDescription}
                        style={styleInput}
                    />
                </Space>
            </Card>
        </Space>
    );
};

export default CanvasDesctiptions;
