import { Form, InputNumber, Radio, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useState } from "react";
import { styleInput } from "../../date/styleInput";
import Benigen from "./Benigen";

const { Option } = Select;

const TreatmentTypeName = (props) => {
    const [SLNB, setSLNB] = useState();
    const [axilla, setAxilla] = useState();
    const [treatmentsType, settreatmentsType] = useState();

    return (
        <>
            <Form.Item label="Type of treatment" name="treatmentTypeName">
                <Select
                    allowClear
                    style={styleInput}
                    onChange={(e) => settreatmentsType(e)}
                >
                    <Option value="benigen">Benign</Option>
                    <Option value="maligan">Malignant</Option>
                    <Option value="Nak">Nak</Option>
                    <Option value="AK">AK</Option>
                    <Option value="RT">RT</Option>
                    <Option value="target">Target</Option>
                </Select>
            </Form.Item>
            {treatmentsType === "maligan" ? (
                <>
                    <Form.Item label="Operating type" name="Novu">
                        <Select style={styleInput} allowClear>
                            <Option value="Organgoruyucu">Organoprotector</Option>
                            <Option value="Masektamiya">Masectomy</Option>
                            <Option value="SLNB">SLNB</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="TB" name="tb">
                        <Select style={styleInput} allowClear>
                            <Option value="lumA">Lum A</Option>
                            <Option value="lumB">Lum B</Option>
                            <Option value="tripelN">Triple negative</Option>
                            <Option value="hormonP">
                                Hormone positive Her positive
                            </Option>
                            <Option value="hormonN">
                                Hormone negative Her positive
                            </Option>
                            <Option value="prN">PR negative</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Description" name="treatmentTypeDesc">
                        <TextArea style={styleInput} rows={3} />
                    </Form.Item>
                </>
            ) : treatmentsType === "benigen" ? (
                <Benigen />
            ) : treatmentsType === "Nak" || treatmentsType === "RT" ? (
                <>
                    <Form.Item label="patamorphosis" name="Patamarfoz">
                        <Select style={styleInput} allowClear>
                            <Option value="1">&#8544;</Option>
                            <Option value="2">&#8545;</Option>
                            <Option value="3">&#8546;</Option>
                            <Option value="4">&#8547;</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Description" name="descriptionOfType">
                        <TextArea style={styleInput} rows={3} />
                    </Form.Item>
                </>
            ) : treatmentsType ? (
                <Form.Item label="Description" name="Desc">
                    <TextArea style={styleInput} rows={3} />
                </Form.Item>
            ) : (
                ""
            )}
            {treatmentsType !== "benigen" ? (
                <>
                    <Form.Item label="SLNB" name="SLNB">
                        <Radio.Group onChange={(e) => setSLNB(e.target.value)}>
                            <Radio value={1}>Yes</Radio>
                            <Radio value={2}>No</Radio>
                        </Radio.Group>
                    </Form.Item>
                    {SLNB === 1 && (
                        <>
                            <Form.Item label="Reactive" name="SLNB_reactive">
                                <InputNumber style={styleInput} min={0} defaultValue={0} />
                            </Form.Item>

                            <Form.Item label="MTS" name="SLNB_mts">
                                <InputNumber style={styleInput} min={0} defaultValue={0} />
                            </Form.Item>
                        </>
                    )}
                    <Form.Item label="Axilla deseksiya" name="axillaDeseksiya">
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
                                label="Reactive"
                                name="axillaDeseksiyaActive"
                            >
                                <InputNumber style={styleInput} min={0} defaultValue={0} />
                            </Form.Item>

                            <Form.Item label="MTS" name="axillaDeseksiyaMts">
                                <InputNumber style={styleInput} min={0} defaultValue={0} />
                            </Form.Item>
                        </>
                    )}
                </>
            ) : (
                ""
            )}
        </>
    );
};

export default TreatmentTypeName;
