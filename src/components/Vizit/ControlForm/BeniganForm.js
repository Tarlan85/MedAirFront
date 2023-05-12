import { Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo } from "react";
import { styleInput } from "../../../date/styleInput";
import useLabel from "../../EditTableComponent/hooks/useLabel";
import { useVisitContext } from "../context";

const BeniganForm = ({ form }) => {
    const { activeRow } = useVisitContext();

    const label = useLabel({ activeRow });

    return (
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
            <Form.Item label={label("Description")} name="benignDescription">
                <TextArea
                    showCount
                    maxLength={3000}
                    style={styleInput} rows={3} />
            </Form.Item>
        </Form>
    );
};

export default memo(BeniganForm);
