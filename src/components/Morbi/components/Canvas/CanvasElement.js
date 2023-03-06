import React, { memo, useRef } from "react";
import CanvasDesctiptions from "./canvasComponents/CanvasDesctiptions";
import CanvasHeader from "./canvasComponents/CanvasHeader";
import CanvasImages from "./canvasComponents/CanvasImages";

const CanvasElement = (props) => {
  const { img, imgName } = props;

  const refConvas = useRef(null);

  return (
    <>
      <CanvasHeader refConvas={refConvas} imgName={imgName} />
      <CanvasImages
        refConvas={refConvas}
        imgSrc={img}
        imgName={imgName}
        {...props}
      />
      <CanvasDesctiptions refConvas={refConvas} imgName={imgName} />
    </>
  );
};

export default memo(CanvasElement);
