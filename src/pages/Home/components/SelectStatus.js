import { Select } from "antd";
import React, { memo } from "react";
import sendRequest from "../../../api/sendRequest";

const { Option } = Select;

const SelectStatus = ({ value, row, updatePage }) => {

    const onSelect = async (val) => {
        const { id } = row;
        const sendObj = {
            id: id,
            status: val,
        };
        await sendRequest("visittable", sendObj, "post");
        updatePage()
    };

    return (
        <Select
            onSelect={onSelect}
            defaultValue={value}
            allowClear
            style={{ width: 120 }}
        >
            <Option value="unsolved">Unsolved</Option>
            <Option value="approved">Approved</Option>
        </Select>
    );
};

export default memo(SelectStatus);
