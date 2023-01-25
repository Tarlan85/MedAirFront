import { Form, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { styleInput } from "../../../date/styleInput";
import useLabel from "../../EditTableComponent/hooks/useLabel";
import { useMualiceContext } from "../context";

const { Option } = Select;

const Benigen = () => {
    const { activeRow } = useMualiceContext();

    const label = useLabel({ activeRow });

    return (
        <>
            <Form.Item label={label("Alt növ")} name="treatmentSubType">
                <Select
                    className={activeRow && "rowClassName_active"}
                    allowClear
                    style={styleInput}
                >
                    <Option value="lumpektamiya">Lumpectamia</Option>
                    <Option value="reduksiya">Reduction</Option>
                    <Option value="mastopeksiya">Mastopexy</Option>
                    <Option value="augumentasiya">Augmentation</Option>
                    <Option value="Extra breast">Extra breast</Option>
                </Select>
            </Form.Item>
            <Form.Item label={label("Alt alt növ")} name="treatmentSubSubType">
                <Select
                    className={activeRow && "rowClassName_active"}
                    allowClear
                    style={styleInput}
                >
                    <Option value="sag">Right</Option>
                    <Option value="sol">Left</Option>
                    <Option value="herikisi">Both</Option>
                    <Option value="sectoral">Sectoral</Option>
                    <Option value="sectoral round block">
                        Sectoral round block
                    </Option>
                    <Option value="expander">Expander</Option>
                </Select>
            </Form.Item>
            <Form.Item label={label("Description")} name="treatmentTypeDesc">
                <TextArea style={styleInput} rows={3} />
            </Form.Item>
        </>
    );
};

export default Benigen;
