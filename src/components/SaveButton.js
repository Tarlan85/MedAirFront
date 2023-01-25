import React from "react";

function SaveButton(props) {
    const { onClick, title = "Save" } = props;

    return (
        <button
            type="button"
            className="new_button w-100 new-success-button"
            onClick={onClick}
            // disabled
        >
            {title}
        </button>
    );
}

export default SaveButton;
