import React, { memo } from "react";
import { Col, Form, Row } from "antd";
import { DatePicker, Select } from "antd";
import moment from "moment";
import { styleInput } from "../../date/styleInput";
import TextArea from "antd/lib/input/TextArea";
import ControlForm from "./ControlForm";
import useLabel from "../EditTableComponent/hooks/useLabel";
import { useVisitContext } from "./context";
import useAddAndResetForm from "./hooks/useAddAndResetForm";
import { useGlobalContext } from "../../context/context";
import useResetForm from "../../hooks/useResetForm";

const { Option } = Select;

const VisitContent = () => {
    const [form] = Form.useForm();
    const { managersPlaces } = useGlobalContext();
    const { activeRow, isControl, setisControl } = useVisitContext();

    useAddAndResetForm({ form });

    const onChangeSelectSəbəb = (e) => {
        if (e === "Prophylactic") setisControl(true);
        else setisControl(false);
    }

    const label = useLabel({ activeRow });

    useResetForm({ form });

    return (
        <>
            <Row>
                <Col xs={24} xl={12}>
                    <Form
                        form={form}
                        labelAlign="right"
                        labelCol={{
                            span: 5,
                        }}
                        wrapperCol={{
                            span: 13,
                        }}
                    >
                        <Form.Item label={label("Date")} name="visitDate">
                            <DatePicker
                                style={styleInput}
                                format="YYYY-MM-DD HH:mm"
                                defaultValue={moment()}
                                showTime
                            />
                        </Form.Item>

                <Form.Item label="Address" name="placeName">
                    <Select style={styleInput} allowClear>
                        {managersPlaces.map((i) => {
                            let val =
                                i.placeName +
                                " " +
                                i.placeCity +
                                " " +
                                i.placeCountry;
                            return <Option value={val}>{val}</Option>;
                        })}
                    </Select>
                </Form.Item>

                        <Form.Item label={label("Status")} name="status">
                            <Select allowClear style={styleInput}>
                                <Option value="Unsolved">Unsolved</Option>
                                <Option value="Approved">Approved</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label={label("Reception Type")} name="visitType">
                            <Select
                                allowClear
                                defaultValue="Fiziki"
                                style={styleInput}
                            >
                                <Option value="Fiziki">Face to face</Option>
                                <Option value="Telefon">By phone</Option>
                                <Option value="Chat">By chat</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label={label("Sebeb")} name="visitReason">
                            <Select
                                onChange={onChangeSelectSəbəb}
                                style={styleInput}
                                allowClear
                            >
                                <Option value="Inspection">Inspection</Option>
                                <Option value="Treatment">Treatment</Option>
                                <Option value="Operation">Operation</Option>
                                <Option value="Control">Control</Option>
                                <Option value="Aesthetics">Aesthetics</Option>
                                <Option value="Prophylactic">Prophylactic</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label={label("Description")}
                            name="visitDesc"
                        >
                            <TextArea style={styleInput} rows={3} />
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={24} xl={12}>
                    {isControl && <ControlForm form={form} />}
                </Col>
            </Row>
        </>
    );
};

export default memo(VisitContent);
