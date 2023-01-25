import React, { memo } from "react";
import MaliganFormİtem from "./MaliganFormİtem";

const MaliganForm = ({form}) => {
    return (
        <>
            <MaliganFormİtem form={form} name={"USM"} />
            <MaliganFormİtem form={form} name={"Blood"} />
            <MaliganFormİtem form={form} name={"Lungs"} />
            <MaliganFormİtem form={form} name={"Reason"} />
        </>
    );
};

export default memo(MaliganForm);
