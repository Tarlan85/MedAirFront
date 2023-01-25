import React from 'react';
import SaveButton from './SaveButton';

const ManagersButtons = (props) => {
    const {onClickNewBundle, handleSave, showSaveButton} = props
    return (
        <div className="managers_buttons">
          <button
            type="button"
            className="new_button w-100"
            onClick={onClickNewBundle}
          >
            + Add new
          </button>
          {showSaveButton && 
          <SaveButton disabled={showSaveButton} onClick={handleSave} />}
        </div>
    );
};

export default ManagersButtons;