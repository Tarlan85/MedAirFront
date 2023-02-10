import React, { useState, createContext, useContext } from "react";

const CanvasContext = createContext();

export const CanvasProvider = ({ children }) => {
    const [convasImagesArrIndex, setConvasImagesArrIndex] = useState(0)
    const [canvasColor, setCanvasColor] = useState("green");
    const [disableCanvas, setDisableCanvas] = useState(true);
    const [imagesLength, setImagesLength] = useState()
    const [colorNumbersCanvas, setColorNumbersCanvas] = useState({})
    const [descriptionInputValue, setDescriptionInputValue] = useState()
    const [brushRadius, setBrushRadius] = useState(20);

    const values = {
        brushRadius, setBrushRadius,
        descriptionInputValue, setDescriptionInputValue,
        colorNumbersCanvas, setColorNumbersCanvas,
        imagesLength, setImagesLength,
        disableCanvas, setDisableCanvas,
        canvasColor, setCanvasColor,
        convasImagesArrIndex, setConvasImagesArrIndex,
    }
    return (
        <CanvasContext.Provider value={values}>
            {children}
        </CanvasContext.Provider>
    );
}

export const useCanvasContext = () => useContext(CanvasContext);