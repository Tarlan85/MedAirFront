import React, { memo } from "react";
import CureTabType from "./CureTabType";
import InputComponent from "./InputComponent";
import UseTabs from "./UseTabs";

const EditInputType = (props) => {
    const { dataIndex, title, inputRef, save } = props;
    if (dataIndex === "useTabs" || dataIndex === "cureTabName") {
        return (
            <UseTabs
                dataIndex={dataIndex}
                title={title}
                inputRef={inputRef}
                save={save}
            />
        );
    }
    else if (dataIndex === "cureTabType") {
        return (
            <CureTabType
                dataIndex={dataIndex}
                title={title}
                inputRef={inputRef}
                save={save}
            />
        );
    }
    else {
        return (
            <InputComponent
                dataIndex={dataIndex}
                title={title}
                inputRef={inputRef}
                save={save}
            />
        );
    }
};

export default memo(EditInputType);
