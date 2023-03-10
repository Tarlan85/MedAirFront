import { Row } from "antd";
import React, { memo } from "react";
import CanvasDraw from "react-canvas-draw";
import { useGlobalContext } from "../../../../../context/context";
import ErrorBoundary from "../../../../../ErrorBoundary";
import { useCanvasContext } from "../context";
import useMouseMove from "../hooks/useMouseMove";

const CanvasImages = (props) => {
    const { refConvas, imgSrc, imgName, canvasWidth=400, canvasHeight=400 } = props;

    const { disableCanvas, canvasColor, setDescriptionInputValue, brushRadius } =
        useCanvasContext();

    const { savedDrawingCanvas } = useGlobalContext();

    const { handleMouseMove, onClick } = useMouseMove({ refConvas, imgName });

    const onChangeCanvas = (e) => {
        setDescriptionInputValue("");
    };

    return (
        <ErrorBoundary>
            <Row>
                <div
                    className="CanvasDraw"
                    onMouseMove={handleMouseMove}
                    onClick={onClick}
                >
                    <CanvasDraw
                        style={{ border: "1px solid rgb(24, 23, 23)" }}
                        onChange={(e) => onChangeCanvas(e)}
                        disabled={disableCanvas}
                        canvasWidth={canvasWidth}
                        canvasHeight={canvasHeight}
                        ref={refConvas}
                        brushColor={canvasColor}
                        brushRadius={brushRadius}
                        imgSrc={imgSrc}
                        saveData={
                            savedDrawingCanvas && savedDrawingCanvas[imgName]
                                ? savedDrawingCanvas[imgName]
                                : ""
                        }
                    />
                </div>
            </Row>
        </ErrorBoundary>
    );
};

export default memo(CanvasImages);
