import React, { memo } from "react";
import { useAnalizContext } from "../context";

const Bottons = () => {
    const { setIsModalOpen, setActiveRow, setIsNew } =
        useAnalizContext();

    const addNew = () => {
        setActiveRow();
        setIsNew(true);
        setIsModalOpen(true);
    };
    return (
        <>
            <button className="new_buttpn" onClick={addNew}>
                + Add new
            </button>
        </>
    );
};

export default memo(Bottons);
