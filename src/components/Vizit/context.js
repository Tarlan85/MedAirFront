import React, { useState, createContext, useContext } from "react";

const VisitContext = createContext();

export const VisitProvider = ({ children }) => {
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [dataSource, setdataSource] = useState([]);
    const [isReset, setIsReset] = useState(false);
    const [selectedRowTable, setSelectedRowTable] = useState()
    const [activeRow, setActiveRow] = useState();

    const [isControl, setisControl] = useState(false);
    const [selectedRatioButton, setSelectedRatioButton] = useState();

    const values = {
        isControl, setisControl,
        selectedRatioButton, setSelectedRatioButton,

        activeRow, setActiveRow,
        selectedRowTable, setSelectedRowTable,
        isAdd, setIsAdd,
        isEdit, setIsEdit,
        isReset, setIsReset,
        dataSource, setdataSource,
    }
    return (
        <VisitContext.Provider value={values}>
            {children}
        </VisitContext.Provider>
    );
}

export const useVisitContext = () => useContext(VisitContext);