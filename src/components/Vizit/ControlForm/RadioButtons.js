import { Radio } from "antd";
import React, { memo } from "react";
import { useVisitContext } from "../context";

const RadioButtons = () => {
    const { selectedRatioButton, setSelectedRatioButton, } = useVisitContext();
  
    const handleModeChange = (e) => {
        setSelectedRatioButton(e.target.value);
    }
    return (
        <>
            <Radio.Group
                onChange={handleModeChange}
                value={selectedRatioButton}
                style={{
                    marginBottom: 8,
                }}
            >
                <Radio.Button value="Maligant">Maligant</Radio.Button>
                <Radio.Button value="Benign">Benign</Radio.Button>
            </Radio.Group>
        </>
    );
};

export default memo(RadioButtons);
