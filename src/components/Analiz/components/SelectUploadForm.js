import { Select } from "antd";
import React, { useState } from "react";
import { useAnalizContext } from "../context";

const SelectUploadForm = () => {
    const { selectOption } = useAnalizContext();

    const onSelectUploadFormIteem = (e) => {};

    if (!selectOption) {
        return;
    }
    return (
        <>
            <Select
                style={{ width: "150px" }}
                onSelect={onSelectUploadFormIteem}
            >
                {selectOption?.map((i) => (
                    <Select.Option value={i}>{i}</Select.Option>
                ))}
            </Select>
        </>
    );
};

export default SelectUploadForm;
