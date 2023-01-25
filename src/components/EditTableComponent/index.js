import React, { memo } from "react";
import EditTable from "./EditTable";

const index = (props) => {
    return (
        <>
            <EditTable {...props} />
        </>
    );
};

export default memo(index);
