import { Form, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { memo, useCallback } from "react";
import { useGlobalContext } from "../../context/context";

const { Option } = Select;

const HeaderVisit = () => {
    const { formValues, setFormValues, managersPlaces } = useGlobalContext();

    const onFieldsChange = useCallback(([{ name, value }]) => {
        formValues.Vizit = { ...formValues.Vizit, [name]: value };
        setFormValues(formValues);
    }, []);
    return (
        <div>
            <Form
                onFieldsChange={onFieldsChange}
                style={styleHeaderVisit}
                layout="inline"
            >
            </Form>
            <hr style={{ margin: "20px" }} />
        </div>
    );
};

export default memo(HeaderVisit);

const styleInput = { width: "250px" };
const styleHeaderVisit = { margin: "20px" };
