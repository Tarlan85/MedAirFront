import React, { useEffect } from "react";
import { useProfileContext } from "../../../../pages/Profile/context";
import CanvasElement from "./CanvasElement";
import { useCanvasContext } from "./context";

const CanvasComponent = (props) => {
    const { canvasNumber, images } = props;
    const { activeKey } = useProfileContext();
    const { convasImagesArrIndex, setImagesLength } = useCanvasContext();

    useEffect(() => {
        setImagesLength(images.length)
    },[images])

    if (activeKey !== "2") {
        return "";
    }
    const getImgName = (img) => {
        return img.split("/")[3].toString().split(".")[0];
    };
    return (
        <div className="convas">
            {images.map((img, index) => {
                const imgName = getImgName(img);
                if (index === convasImagesArrIndex) {
                    return (
                        <CanvasElement
                            key={index.toString()}
                            img={img}
                            imgName={imgName}
                        />
                    );
                }
            })}
        </div>
    );
};

export default CanvasComponent;
