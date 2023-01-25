import { Col, Row } from "antd";
import React from "react";

import Canvas from "./Canvas";
import { imagesCanvas1, imagesCanvas2, imagesCanvas3 } from "./Canvas/canvasData";

const Canvases = (props) => {
    return (
        <>
            <Row>
                <Col xs={24} xl={12}>
                    <Canvas images={imagesCanvas1} canvasNumber={1} />
                </Col>
                <Col xs={24} xl={12}>
                    <Canvas images={imagesCanvas2} canvasNumber={2} />
                </Col>
            </Row>
            <Row>
                <Col xs={24} xl={24}>
                    <Canvas images={imagesCanvas3} canvasNumber={3} />
                </Col>
            </Row>
        </>
    );
};

export default Canvases;
