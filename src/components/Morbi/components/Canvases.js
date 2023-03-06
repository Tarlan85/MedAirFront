import { Col, Row } from "antd";
import React from "react";

import Canvas from "./Canvas";
import {
  imagesCanvas1,
  imagesCanvas2,
  imagesCanvas3,
} from "./Canvas/canvasData";

const Canvases = (props) => {
  return (
    <>
      <Row>
        <Col xs={24} xl={12}>
          <Canvas images={imagesCanvas1} canvasNumber={1} />
          <Canvas
            images={imagesCanvas3}
            canvasNumber={3}
          />
        </Col>
        <Col xs={24} xl={12}>
          <Canvas
            canvasWidth={600}
            canvasHeight={600}
            images={imagesCanvas2}
            canvasNumber={2}
          />
        </Col>
      </Row>
    </>
  );
};

export default Canvases;
