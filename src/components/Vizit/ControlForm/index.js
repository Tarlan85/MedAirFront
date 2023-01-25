import React, { memo } from "react";
import { useVisitContext } from "../context";
import BeniganForm from "./BeniganForm";
import MaliganForm from "./MaliganForm";
import RadioButtons from "./RadioButtons";

const ControlForm = ({ form }) => {
    const { selectedRatioButton } = useVisitContext();

    return (
        <>
            <RadioButtons />
            {selectedRatioButton === "Maligant" && <MaliganForm form={form} />}
            {selectedRatioButton === "Benign" && <BeniganForm form={form} />}
        </>
    );
};

export default memo(ControlForm);
