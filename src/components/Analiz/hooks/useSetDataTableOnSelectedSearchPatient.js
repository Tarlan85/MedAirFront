import { useEffect } from "react";
import { useGlobalContext } from "../../../context/context";
import { useAnalizContext } from "../context";

const useSetDataTableOnSelectedSearchPatient = () => {
    const { analisesDataTable } = useGlobalContext();
    const {
        dataSource,
        setdataSource,
    } = useAnalizContext();

    useEffect(() => {
        if(analisesDataTable[0]){
            setdataSource([ ...analisesDataTable, ...dataSource])
        }
    },[analisesDataTable])
};

export default useSetDataTableOnSelectedSearchPatient;