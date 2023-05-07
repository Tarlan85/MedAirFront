import React, { memo } from "react";
import { useAnalizContext } from "../context";

const Bottons = () => {
    const { setIsModalOpen, setActiveRow, setIsNew, setSelectedRowTable } =
        useAnalizContext();

    const addNew = () => {
        setActiveRow();
        setIsNew(true);
        setIsModalOpen(true);
        setSelectedRowTable()
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
