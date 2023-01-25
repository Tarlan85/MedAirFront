import { Col, Form, Input, InputNumber, Radio, Row, Select, Space } from "antd";
import React from "react";
import { styleInput } from "../../../date/styleInput";
import useLabel from "../../EditTableComponent/hooks/useLabel";
import { useMorbyContext } from "../context";
import useAddAndResetForm from "../hooks/useAddAndResetForm";

const { TextArea } = Input;
const { Option } = Select;

const MorbyContent = () => {
    const [form] = Form.useForm();
    const { ihkEr, setihkEr, ihkPr, setihkPr, ihkHer2, setihkHer2, activeRow } =
        useMorbyContext();

    useAddAndResetForm({ form });

    const label = useLabel({ activeRow });

    return (
        <Row>
            <Col xs={24} xl={12}>
                <Form
                    form={form}
                    className="collapsForm"
                    labelAlign="right"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 13,
                    }}
                >
                    <Form.Item
                        label={label("Breast")}
                        name="complaintBreastType"
                    >
                        <Select allowClear style={styleInput}>
                            <Option value="no">Missing</Option>
                            <Option value="right">Right</Option>
                            <Option value="left">Left</Option>
                            <Option value="both">Both</Option>
                            <Option value="postmastektR">
                                Post mastectomy right
                            </Option>
                            <Option value="postmastektL">
                                Post mastectomy left
                            </Option>
                            <Option value="axilaR">Axilla right</Option>
                            <Option value="axilaL">Axilla left</Option>
                            <Option value="anotherBrestR">
                                Extra breast right
                            </Option>
                            <Option value="anotherBrestL">
                                Extra breast left
                            </Option>
                            <Option value="anotherBrestBoth">
                                Both extra breasts
                            </Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={label("Duration of illness")}
                        name="durationOfIllness"
                    >
                        <Input style={styleInput} />
                    </Form.Item>
                    <Form.Item
                        label={label("Complaints")}
                        name="complaintDescription"
                    >
                        <TextArea style={styleInput} rows={3} />
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={24} xl={12}>
                <Form
                    form={form}
                    className="collapsForm"
                    labelAlign="right"
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 13,
                    }}
                >
                    <Form.Item label={label("ER")} name="ihkEr">
                        <Radio.Group onChange={(e) => setihkEr(e.target.value)}>
                            <Space style={styleInput} direction="horizontal">
                                <Radio value={1}>Positive</Radio>
                                <Radio value={2}>Negative</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    {ihkEr === 1 && (
                        <Form.Item label={label("N")} name="erN">
                            <InputNumber style={styleInput} />
                        </Form.Item>
                    )}
                    <Form.Item label={label("PR")} name="ihkPr">
                        <Radio.Group onChange={(e) => setihkPr(e.target.value)}>
                            <Space style={styleInput} direction="horizontal">
                                <Radio value={1}>Positive</Radio>
                                <Radio value={2}>Negative</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>
                    {ihkPr === 1 && (
                        <Form.Item label={label("N")} name="prN">
                            <InputNumber style={styleInput} />
                        </Form.Item>
                    )}
                    <Form.Item label={label("HER2")} name="her2">
                        <InputNumber
                            style={styleInput}
                            value={ihkHer2}
                            onChange={(e) => setihkHer2(e)}
                            min={0}
                            max={3}
                            defaultValue={0}
                        />
                    </Form.Item>
                    {ihkHer2 === 2 && (
                        <Form.Item label={label("FT")} name="her2FT">
                            <Input />
                        </Form.Item>
                    )}
                    <Form.Item label={label("K67")} name="k67">
                        <InputNumber
                            style={styleInput}
                            min={0}
                            defaultValue={0}
                        />
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default MorbyContent;
