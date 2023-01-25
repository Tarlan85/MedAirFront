import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { deepCopy } from '../../../functions/deepCopy';
import { useMualiceContext } from '../context';

const useEditRowTable = ({resetForm, form}) => {
    const {
        selectedRowTable,
        setSelectedRowTable,
        settreatmentsType,
        setSLNB,
        setAxilla,
        isEdit, setIsEdit,
        dataSource,
        setdataSource,
        setActiveRow,
    } = useMualiceContext();

    const [selectedTreatmentId, setselectedTreatmentId] = useState()

    const selectedTreatmentTypeName = (formObj) => {
        settreatmentsType(formObj.treatmentTypeName)
        setSLNB(formObj.SLNB)
        setAxilla(formObj.axillaDeseksiya)
    }

    useEffect(() => {
        if (selectedRowTable) {
            resetForm();
            let copy = deepCopy(selectedRowTable);
            setselectedTreatmentId(copy.Id)
            copy.treatmentDate = moment(copy.treatmentDate);
            selectedTreatmentTypeName(copy)
            form.setFieldsValue(copy);
            setSelectedRowTable();
        }
    }, [selectedRowTable]);

    useEffect(() => {
        if (isEdit) {
            let findIndex = dataSource.findIndex(i => i.Id === selectedTreatmentId)

            let copydataForm = deepCopy(form.getFieldsValue());
            copydataForm.key = selectedTreatmentId
            copydataForm.Id = selectedTreatmentId
            copydataForm.treatmentDate = moment(
                copydataForm.treatmentDate
            ).format("YYYY-MM-DD HH:mm");

            let copyDataSource = deepCopy(dataSource)
            copyDataSource[findIndex] = copydataForm
            setdataSource(copyDataSource)
            resetForm();
            setIsEdit()
            setActiveRow();
        }
    }, [isEdit]);

    return {}
};

export default useEditRowTable;