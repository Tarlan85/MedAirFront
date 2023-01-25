import React, { memo } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useVisitContext } from "./context";

const FooterButtons = () => {
    const { setIsReset, setIsAdd, setIsEdit, activeRow } = useVisitContext();

    const handleAdd = () => {
        setIsAdd(true);
    };
    const reset = () => {
        setIsReset(true);
    };
    const handleEdit = () => {
        setIsEdit(true);
    };
    const addButton = (
        <button
            onClick={handleAdd}
            style={{ color: "green" }}
            className="new_button"
        >
            Add
        </button>
    );
    const editButton = (
        <button
            onClick={handleEdit}
            className="new_button rowClassName_active"
        >
            Edit
        </button>
    );
    return (
        <div className="visit_footer_buttons">
            {!activeRow && (
                <button
                    onClick={reset}
                    style={{ color: "red" }}
                    className="new_button"
                >
                    <DeleteOutlined />
                    Clear
                </button>
            )}
            {activeRow ? editButton : addButton}
        </div>
    );
};

export default memo(FooterButtons);
