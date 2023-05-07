import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/context";
import { deepCopy } from "../../../functions/deepCopy";
import { useAnalizContext } from "../context";
import { other, breastSelectOpnions } from "../data";

const useEditRowTable = ({ resetForm, form, putListToGlobalContext }) => {
    const {
        selectedRowTable,
        isEdit,
        setIsEdit,
        setActiveRow,
        setBreastType,
        setSelectOption,
        setSelectedUploadFormIteem,
        setIsModalOpen,
    } = useAnalizContext();

    const { analisesDataTable, setAnalisesDataTable } = useGlobalContext();

    const [selectedRowId, setselectedRowId] = useState();

    const openOtherForm = (formObj) => {
        const { analyzesType, subType, analyzesContent, analyzesSubeType } = formObj
        if (analyzesType) {
            setBreastType(analyzesType)
            if (analyzesType === "Breast") {
                setSelectOption(breastSelectOpnions);
                setSelectedUploadFormIteem(analyzesSubeType)
            } else if (analyzesType === "Other analysis") {
                setSelectOption(other);
                setSelectedUploadFormIteem(analyzesSubeType)
            } else {
                setSelectOption(null);
            }
        }
        if (subType) {
            setSelectedUploadFormIteem(subType)
        }
    }

    useEffect(() => {
        if (selectedRowTable) {
            resetForm();
            console.log('selectedRowTable', selectedRowTable);
            let copy = deepCopy(selectedRowTable);
            const analyzesId = selectedRowTable.analyzesId
            setselectedRowId(analyzesId || copy.Id);
            form.setFieldsValue(copy);
            openOtherForm(copy)
            setIsModalOpen(true);
        }
    }, [selectedRowTable]);

    const edit = () => {
        try {
            let findIndex = analisesDataTable.findIndex(
                (i) => i.analyzesId === selectedRowId
            );
            let copydataForm = deepCopy(form.getFieldsValue());
            copydataForm.key = selectedRowId;
            copydataForm.Id = selectedRowId;
            let analyzesId = copydataForm.analyzesId || selectedRowId;
            copydataForm.analyzesId = analyzesId
            let copyDataSource = deepCopy(analisesDataTable);
            copydataForm.date = copyDataSource[findIndex].date
            copyDataSource[findIndex] = copydataForm;
            setAnalisesDataTable(copyDataSource);
            putListToGlobalContext(copyDataSource);
            resetForm();
            setIsEdit();
            setActiveRow();
            setIsModalOpen(false);
        } catch (error) {
            console.log('%c error', 'background: red; color: dark', error);
        }
    }

    useEffect(() => {
        if (isEdit) {
            edit()
        }
    }, [isEdit]);

    return {};
};

export default useEditRowTable;
