import { Popconfirm, Row, Select } from "antd";
import React, { memo, useState } from "react";
import { RetweetOutlined } from "@ant-design/icons";
import { useCanvasContext } from "../context";
import { useGlobalContext } from "../../../../../context/context";

const CanvasHeader = (props) => {
  const { refConvas, imgName } = props;

  const {
    setConvasImagesArrIndex,
    setCanvasColor,
    setDisableCanvas,
    imagesLength,
    setBrushRadius,
  } = useCanvasContext();
  const { savedDrawingCanvas, setSavedDrawingCanvas } = useGlobalContext();

  const [disableAddBtn, setdisableAddBtn] = useState(false);
  const [disableSaveBtn, setdisableSaveBtn] = useState(true);

  const handleAdd = () => {
    setBrushRadius(20);
    setdisableAddBtn(true);
    setDisableCanvas(false);
    setdisableSaveBtn(false);
  };
  const handleSave = () => {
    setBrushRadius(0);
    setdisableAddBtn(false);
    setDisableCanvas(true);
    setdisableSaveBtn(true);
    let data = refConvas.current.getSaveData();
    savedDrawingCanvas[imgName] = data;
    setSavedDrawingCanvas(savedDrawingCanvas);
  };
  const handleClear = () => {
    refConvas.current.undo();
  };
  const onSelect = (e) => {
    setCanvasColor(e);
  };
  const nextCanvas = (index) => {
    if (imagesLength === 1) {
      return 0;
    } else if (index === imagesLength - 1) {
      return 0;
    } else return index + 1;
  };
  const changeConvasImg = () => {
    setConvasImagesArrIndex(nextCanvas);
  };
  return (
    <Row>
      <button
        disabled={disableAddBtn}
        onClick={handleAdd}
        type="button"
        className="new_button"
      >
        Add
      </button>
      <button
        disabled={disableSaveBtn}
        type="button"
        onClick={handleSave}
        className={
          disableSaveBtn ? "new_button" : "new_button new-success-button"
        }
      >
        Save
      </button>
      <button onClick={handleClear} className="new_button">
        Clear
      </button>
      <Select onSelect={onSelect} defaultValue="green" style={{ width: 150 }}>
        <Select.Option value="green">Benign tumor</Select.Option>
        <Select.Option value="red">Maligan tumor</Select.Option>
        <Select.Option value="black">Maligan ?</Select.Option>
        <Select.Option value="blue">My operation</Select.Option>
        <Select.Option value="#AA00FF">Operated not by me</Select.Option>
      </Select>

      {imagesLength !== 1 && disableSaveBtn ? (
        <button onClick={changeConvasImg} className="new_button">
          <RetweetOutlined />
        </button>
      ) : (
        <Popconfirm
          title="Data will not be saved?"
          okText="Yes"
          cancelText="No"
          onConfirm={changeConvasImg}
        >
          <button className="new_button">
            <RetweetOutlined />
          </button>
        </Popconfirm>
      )}
    </Row>
  );
};

export default memo(CanvasHeader);
