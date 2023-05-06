import React, { useState, createContext, useContext } from "react";

const AnalizContext = createContext();

export const AnalizProvider = ({ children }) => {
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [dataSource, setdataSource] = useState([]);
    const [isReset, setIsReset] = useState(false);
    const [selectedRowTable, setSelectedRowTable] = useState()
    const [activeRow, setActiveRow] = useState();
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectOption, setSelectOption] = useState();
  const [selectedUploadFormIteem, setSelectedUploadFormIteem] = useState()
  const [breastType, setBreastType] = useState();
  const [isNew, setIsNew] = useState(false)

    const values = {
        isNew, setIsNew,
        isModalOpen, setIsModalOpen,
        selectOption, setSelectOption,
        selectedUploadFormIteem, setSelectedUploadFormIteem,
        breastType, setBreastType,

        activeRow, setActiveRow,
        selectedRowTable, setSelectedRowTable,
        isAdd, setIsAdd,
        isEdit, setIsEdit,
        isReset, setIsReset,
        dataSource, setdataSource,
    }
    return (
        <AnalizContext.Provider value={values}>
            {children}
        </AnalizContext.Provider>
    );
}

export const useAnalizContext = () => useContext(AnalizContext)