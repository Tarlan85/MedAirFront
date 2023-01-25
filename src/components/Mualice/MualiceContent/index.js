import { Col, Form, Row } from "antd";
import React, { memo } from "react";
import Buttons from "../components/Buttons";
import useAddAndResetForm from "../hooks/useAddAndResetForm";
import LeftForm from "./LeftForm";
import RightForm from "./RightForm";

const MualiceContent = () => {
    const [form] = Form.useForm();

    useAddAndResetForm({ form });

    return (
        <>
            <Row>
                <Col xs={24} xl={12}>
                    <LeftForm form={form} />
                </Col>
                <Col xs={24} xl={12}>
                    <RightForm form={form} />
                </Col>
            </Row>
            <Buttons />
        </>
    );
};

export default memo(MualiceContent);
