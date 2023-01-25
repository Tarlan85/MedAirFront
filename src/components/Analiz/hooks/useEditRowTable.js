import { useEffect, useState } from "react";
import { deepCopy } from "../../../functions/deepCopy";
import { useAnalizContext } from "../context";
import { other, breastSelectOpnions } from "../data";

const useEditRowTable = ({ resetForm, form, putListToGlobalContext }) => {
    const {
        selectedRowTable,
        setSelectedRowTable,
        isEdit,
        setIsEdit,
        dataSource,
        setdataSource,
        setActiveRow,
        setBreastType,
        setSelectOption,
        setSelectedUploadFormIteem,
        setIsModalOpen,
        setFileList,
    } = useAnalizContext();

    const [selectedRowId, setselectedRowId] = useState();

    const openOtherForm = (formObj) => {
        const { analyzesType, subType, Image, analyzesSubeType } = formObj
        if(analyzesType){
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
        if(subType){
            setSelectedUploadFormIteem(subType)
        }
        if(Image){
            const { fileList: newFileList } = Image;
            setFileList(newFileList);
        }
    }

    useEffect(() => {
        if (selectedRowTable) {
            resetForm();
            let copy = deepCopy(selectedRowTable);
            setselectedRowId(copy.Id);
            form.setFieldsValue(copy);
            setSelectedRowTable();
            openOtherForm(copy)
            setIsModalOpen(true);
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
            let copyDataSource = deepCopy(dataSource);
            copydataForm.Moment = copyDataSource[findIndex].Moment
            copyDataSource[findIndex] = copydataForm;
            setdataSource(copyDataSource);
            putListToGlobalContext(copyDataSource);
            resetForm();
            setIsEdit();
            setActiveRow();
            setIsModalOpen(false);
        }
    }, [isEdit]);

    return {};
};

export default useEditRowTable;
