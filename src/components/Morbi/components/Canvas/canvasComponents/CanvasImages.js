import { Row } from "antd";
import React, { memo } from "react";
import CanvasDraw from "react-canvas-draw";
import { useGlobalContext } from "../../../../../context/context";
import ErrorBoundary from "../../../../../ErrorBoundary";
import { useCanvasContext } from "../context";
import useMouseMove from "../hooks/useMouseMove";

const CanvasImages = (props) => {
    const { refConvas, imgSrc, imgName } = props;

    const { disableCanvas, canvasColor, setDescriptionInputValue } =
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
                    style={{ width: "400px", height: "400px" }}
                    className="CanvasDraw"
                    onMouseMove={handleMouseMove}
                    onClick={onClick}
                >
                    <CanvasDraw
                        style={{ border: "1px solid rgb(24, 23, 23)" }}
                        onChange={(e) => onChangeCanvas(e)}
                        disabled={disableCanvas}
                        canvasWidth={400}
                        canvasHeight={400}
                        ref={refConvas}
                        brushColor={canvasColor}
                        brushRadius={20}
                        imgSrc={imgSrc}
                        saveData={
                            savedDrawingCanvas[imgName]
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
