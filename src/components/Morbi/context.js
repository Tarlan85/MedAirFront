import React, { useState, createContext, useContext } from "react";

const MorbyContext = createContext();

export const MorbyProvider = ({ children }) => {
    const [morbyFormTableData, setMorbyFormTableData] = useState({})
    const [dataSource, setdataSource] = useState([]);
    const [isReset, setIsReset] = useState(false);
    
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedRowTable, setSelectedRowTable] = useState()
    const [activeRow, setActiveRow] = useState();
    

    const [ihkEr, setihkEr] = useState();
    const [ihkPr, setihkPr] = useState();
    const [ihkHer2, setihkHer2] = useState();

    const values = {
        isReset, setIsReset,
        morbyFormTableData, setMorbyFormTableData,
        dataSource, setdataSource,
        
        activeRow, setActiveRow,
        selectedRowTable, setSelectedRowTable,
        isAdd, setIsAdd,
        isEdit, setIsEdit,

        ihkEr, setihkEr,
        ihkPr, setihkPr,
        ihkHer2, setihkHer2,
    }
    return (
        <MorbyContext.Provider value={values}>
            {children}
        </MorbyContext.Provider>
    );
}

export const useMorbyContext = () => useContext(MorbyContext);