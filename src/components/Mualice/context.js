import React, { useState, createContext, useContext } from "react";

const MualiceContext = createContext();

export const MualiceProvider = ({ children }) => {
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [dataSource, setdataSource] = useState([]);
    const [isReset, setIsReset] = useState(false);
    const [treatmentsType, settreatmentsType] = useState();
    const [selectedRowTable, setSelectedRowTable] = useState()
    const [activeRow, setActiveRow] = useState();
    const [SLNB, setSLNB] = useState();
    const [axilla, setAxilla] = useState();

    const values = {
        activeRow, setActiveRow,
        selectedRowTable, setSelectedRowTable,
        isAdd, setIsAdd,
        isEdit, setIsEdit,
        isReset, setIsReset,
        dataSource, setdataSource,
        treatmentsType, settreatmentsType,
        SLNB, setSLNB,
        axilla, setAxilla,
    }
    return (
        <MualiceContext.Provider value={values}>
            {children}
        </MualiceContext.Provider>
    );
}

export const useMualiceContext = () => useContext(MualiceContext);