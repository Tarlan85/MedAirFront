import { useEffect } from "react";
import { useGlobalContext } from "../../../context/context";
import { useVisitContext } from "../context";

const useSetDataTableOnSelectedSearchPatient = () => {
    const { visitDataTable } = useGlobalContext();
    const {
        dataSource,
        setdataSource,
    } = useVisitContext();

    useEffect(() => {
        if(visitDataTable[0]){
            setdataSource([ ...visitDataTable, ...dataSource])
        }
    },[visitDataTable])
};

export default useSetDataTableOnSelectedSearchPatient;