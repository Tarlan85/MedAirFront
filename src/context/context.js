import React, { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [formValues, setFormValues] = useState({
        Anket: { gender: "Female", alkogol: 0, smoke: 0 },
        Potient: {},
        Morbi: {familyMembersList: []},
        Vizit: {},
        treatmentRB: {},
        Analiz: {},
    });
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [dataFamily, setDataFamily] = useState([]);
    const [managersList, setManagersList] = useState([]);
    const [managersPlaces, setManagersPlaces] = useState([]);
    const [isChangeTable, setIsChangeTable] = useState(false);
    const [patientID, setPatientID] = useState()
    const [analizFileList, setAnalizFileList] = useState({})
    const [formVisitCalendar, setformVisitCalendar] = useState({})
    const [isAddNewRow, setisAddNewRow] = useState(false)
    const [isAddVisit, setIsAddVisit] = useState(false)
    const [defaultActiveKey,setdefaultActiveKey] = useState(1)
    const [listRecipe, setListRecipe] = useState([])
    const [recipeList, setRecipeList] = useState([])
    const [visitDataTable, setVisitDataTable] = useState([])
    const [analisesDataTable, setAnalisesDataTable] = useState([])
    const [savedDrawingCanvas, setSavedDrawingCanvas] = useState({})
    const [descriptionsCanvas, setDescriptionsCanvas] = useState({})
    const [deseaseHistoryDynamicsList, setDeseaseHistoryDynamicsList] = useState([])
    const [isClearForm, setIsClearForm] = useState(false)
    const [pathologistsList, setPathologistsList] = useState([]);

    const values = {
        pathologistsList, setPathologistsList,
        isClearForm, setIsClearForm,
        token, setToken,
        deseaseHistoryDynamicsList, setDeseaseHistoryDynamicsList,
        descriptionsCanvas, setDescriptionsCanvas,
        savedDrawingCanvas, setSavedDrawingCanvas,
        analisesDataTable, setAnalisesDataTable,
        visitDataTable, setVisitDataTable,
        recipeList, setRecipeList,
        listRecipe, setListRecipe,
        defaultActiveKey,setdefaultActiveKey,
        isAddVisit, setIsAddVisit,
        isAddNewRow, setisAddNewRow,
        formVisitCalendar, setformVisitCalendar,
        analizFileList, setAnalizFileList,
        managersPlaces, setManagersPlaces,
        patientID, setPatientID,
        isChangeTable, setIsChangeTable,
        managersList,
        setManagersList,
        dataFamily,
        setDataFamily,
        formValues,
        setFormValues,
        isLogin,
        setIsLogin,
    };
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
