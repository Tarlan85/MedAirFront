import moment from "moment";
import { useEffect, useState } from "react";
import { deepCopy } from "../../../functions/deepCopy";
import { useVisitContext } from "../context";

const useEditRowTable = ({ resetForm, form, putListToGlobalContext }) => {
    const {
        selectedRowTable,
        setSelectedRowTable,
        isEdit,
        setIsEdit,
        dataSource,
        setdataSource,
        setActiveRow,
        setisControl,
        setSelectedRatioButton,
    } = useVisitContext();

    const [selectedRowId, setselectedRowId] = useState();

    const maliganArr = ['USM','Blood','Lungs','Reason']

    const openMaliganForm = (formObj) => {
        maliganArr.forEach(i => {
            if(formObj[i]){
                setSelectedRatioButton('Maligant')
            }else if(formObj[i.toLowerCase()  + 'Description']){
                setSelectedRatioButton('Maligant')
            }
        })
    }
    const openDescriptionBenigan = (formObj) => {
        if(formObj.benignDescription){
            setSelectedRatioButton("Benign")
        }
    }

    const selectedVisitReason = (formObj) => {
        if(formObj.visitReason === 'Prophylactic'){
            setisControl(true)
            openMaliganForm(formObj)
            openDescriptionBenigan(formObj)
        }
    };

    useEffect(() => {
        if (selectedRowTable) {
            resetForm();
            let copy = deepCopy(selectedRowTable);
            setselectedRowId(copy.Id);
            copy.visitDate = moment(copy.visitDate);
            console.log('copy',copy)
            selectedVisitReason(copy);
            form.setFieldsValue(copy);
            setSelectedRowTable();
        }
    }, [selectedRowTable]);

    useEffect(() => {
        if (isEdit) {
            let findIndex = dataSource.findIndex(
                (i) => i.Id === selectedRowId
            );

            let copydataForm = deepCopy(form.getFieldsValue());
            copydataForm.key = selectedRowId;
            copydataForm.Id = selectedRowId;
            copydataForm.visitDate = moment(
                copydataForm.visitDate
            ).format("YYYY-MM-DD HH:mm");

            let copyDataSource = deepCopy(dataSource);
            copyDataSource[findIndex] = copydataForm;
            setdataSource(copyDataSource);
            putListToGlobalContext(copyDataSource);
            resetForm();
            setIsEdit();
            setActiveRow();
        }
    }, [isEdit]);

    return {};
};

export default useEditRowTable;
