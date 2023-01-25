import { DatePicker, Form, Input, Row, Select } from "antd";
import { MaskedInput } from "antd-mask-input";
import moment from "moment";
import React from "react";
import { useGlobalContext } from "../../context/context";
import { handleAddVisit } from "./api";

const { Option } = Select;

const VizitForm = () => {
    const [form] = Form.useForm();
    const { formVisitCalendar, setformVisitCalendar, isAddVisit, setIsAddVisit } = useGlobalContext();

    const onFieldsChange = ([{ name, value }]) => {
        setformVisitCalendar({ ...formVisitCalendar, [name]: value });
    };
    const onClickAdd = async () => {
        let visitDate = formVisitCalendar.visitDate;
        formVisitCalendar.visitDate =
            moment(visitDate).format("YYYY-MM-DD HH:mm");
        const sendObj = formVisitCalendar;
        
        await handleAddVisit({ sendObj });
        setIsAddVisit(!isAddVisit)
    };
    return (
        <div>
            <Row justify="space-between" style={{ marginLeft: "5%" }}>
                <Form
                    style={{ margin: "10px" }}
                    onFieldsChange={onFieldsChange}
                    form={form}
                    layout={"inline"}
                >
                    <Form.Item label="Id" name="patientId">
                        <Input type="number" allowClear />
                    </Form.Item>
                    <Form.Item label="Name" name="patientName">
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item label="Surname" name="patientSurName">
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item label="Reason" name="visitReason">
                        <Input allowClear />
                    </Form.Item>
                </Form>
            </Row>
            <Row style={{ marginLeft: "5%" }}>
                <Form
                    style={{ margin: "10px" }}
                    onFieldsChange={onFieldsChange}
                    form={form}
                    layout={"inline"}
                >
                    <Form.Item label="Date" name="visitDate">
                        <DatePicker
                            showTime
                            allowClear
                            format={"YYYY-MM-DD HH:mm"}
                            defaultValue={moment()}
                        />
                    </Form.Item>
                    <Form.Item label="Mobile Number" name="phoneNumber">
                        <MaskedInput
                            allowClear
                            style={{ width: "130px" }}
                            mask={"000 000 00 00"}
                        />
                    </Form.Item>
                    <Form.Item label="Status" name="status">
                        <Select allowClear style={{ width: 120 }}>
                            <Option value="unsolved">Unsolved</Option>
                            <Option value="approved">Approved</Option>
                        </Select>
                    </Form.Item>
                    <button onClick={onClickAdd} className="new_button">
                        Add
                    </button>
                </Form>
            </Row>
        </div>
    );
};

export default VizitForm;
