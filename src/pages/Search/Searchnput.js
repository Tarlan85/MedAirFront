import { Col, Form, Input, Row, Spin } from "antd";
import React, { memo, useState } from "react";
import sendRequest from "../../api/sendRequest";
import useClearDataProfileTables from "./hooks/useClearDataProfileTables";

const Searchnput = ({ setdataSource }) => {
    const [form] = Form.useForm();
    const [isSpin, setisSpin] = useState(false);

    const {clearDataProfileTables} = useClearDataProfileTables()
    
    const onSearch = async () => {
        setisSpin(true);
        clearDataProfileTables()
        const searchObj = form.getFieldsValue();
        try {
            let res = await sendRequest("search",searchObj,'post');
            setdataSource(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setisSpin(false);
        }
    };

    return (
        <Row>
            <Form form={form} layout="inline">
                <Col sm={24} xs={24} md={12} xl={4}>
                    <Form.Item key='patientId' name="patientId" label="Patient №">
                        <Input placeholder="Axtar..." />
                    </Form.Item>
                </Col>
                <Col sm={24} xs={24} md={12} xl={6}>
                    <Form.Item key='patientName' name="patientName" label="Name">
                        <Input placeholder="Axtar..." />
                    </Form.Item>
                </Col>
                <Col sm={24} xs={24} md={12} xl={6}>
                    <Form.Item key='patientSurName' name="patientSurName" label="Surename">
                        <Input placeholder="Axtar..." />
                    </Form.Item>
                </Col>
                <Col sm={24} xs={24} md={12} xl={6}>
                    <Form.Item key='phoneNumber' name="phoneNumber" label="Phone n.">
                        <Input placeholder="Axtar..." />
                    </Form.Item>
                </Col>
                <Col sm={24} xs={24} md={12} xl={2}>
                    <button
                        disabled={isSpin}
                        onClick={onSearch}
                        className="new_button"
                    >
                        {isSpin ? <Spin /> : "Axtar"}
                    </button>
                </Col>
            </Form>
        </Row>
    );
};

export default memo(Searchnput);