import { DatePicker, Form, InputNumber, Radio } from "antd";
import TextArea from "antd/lib/input/TextArea";
import moment from "moment";
import React, { memo } from "react";
import { styleInput } from "../../../date/styleInput";
import { useMualiceContext } from "../context";
import useLabel from "../../EditTableComponent/hooks/useLabel";

const LeftForm = ({ form }) => {
    const { treatmentsType, SLNB, setSLNB, axilla, setAxilla, activeRow } =
        useMualiceContext();

    const label = useLabel({ activeRow });

    return (
        <>
            <Form
                form={form}
                className="collapsForm"
                labelAlign="right"
                labelWrap={true}
                labelCol={{
                    span: 5,
                }}
                wrapperCol={{
                    span: 13,
                }}
            >
                <Form.Item label={label("Date")} name="treatmentDate">
                    <DatePicker
                        format="YYYY-MM-DD HH:mm"
                        defaultValue={moment()}
                        style={styleInput}
                    />
                </Form.Item>
                <Form.Item
                    label={label("Urgent Histology")}
                    name="histologyUrgent"
                >
                    <TextArea style={styleInput} rows={3} />
                </Form.Item>
                <Form.Item
                    label={label("Histology Final")}
                    name="histologyFinal"
                >
                    <TextArea style={styleInput} rows={3} />
                </Form.Item>
                {treatmentsType !== "benigen" ? (
                    <>
                        <Form.Item label={label("SLNB")} name="SLNB">
                            <Radio.Group
                                onChange={(e) => {
                                    setSLNB(e.target.value);
                                }}
                            >
                                <Radio value={1}>Yes</Radio>
                                <Radio value={2}>No</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {SLNB === 1 && (
                            <>
                                <Form.Item
                                    label={label("Reactive")}
                                    name="SLNB_reactive"
                                >
                                    <InputNumber
                                        style={styleInput}
                                        min={0}
                                        defaultValue={0}
                                    />
                                </Form.Item>

                                <Form.Item label={label("MTS")} name="SLNB_mts">
                                    <InputNumber
                                        style={styleInput}
                                        min={0}
                                        defaultValue={0}
                                    />
                                </Form.Item>
                            </>
                        )}
                        <Form.Item
                            label={label("Axilla dissection")}
                            name="axillaDeseksiya"
                        >
                            <Radio.Group
                                onChange={(e) => setAxilla(e.target.value)}
                            >
                                <Radio value={1}>Yes</Radio>
                                <Radio value={2}>No</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {axilla === 1 && (
                            <>
                                <Form.Item
                                    label={label("Reactive")}
                                    name="axillaDeseksiyaActive"
                                >
                                    <InputNumber
                                        style={styleInput}
                                        min={0}
                                        defaultValue={0}
                                    />
                                </Form.Item>

                                <Form.Item
                                    label={label("MTS")}
                                    name="axillaDeseksiyaMts"
                                >
                                    <InputNumber
                                        style={styleInput}
                                        min={0}
                                        defaultValue={0}
                                    />
                                </Form.Item>
                            </>
                        )}
                    </>
                ) : (
                    ""
                )}
            </Form>
        </>
    );
};

export default memo(LeftForm);
