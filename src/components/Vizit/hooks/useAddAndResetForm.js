import moment from "moment";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/context";
import { deepCopy } from "../../../functions/deepCopy";
import { useVisitContext } from "../context";
import useEditRowTable from "./useEditRowTable";

const useAddAndResetForm = ({ form }) => {

    const {
        isReset,
        setIsReset,
        isAdd,
        setIsAdd,
        dataSource,
        setdataSource,
        setActiveRow,
        setIsEdit,

        setisControl,
        setSelectedRowTable,
        setSelectedRatioButton,
    } = useVisitContext();

    const resetForm = () => {
        form.setFieldsValue({});
        form.resetFields();
        setIsAdd(false);
        setIsReset(false);
        setIsEdit(false);

        setisControl(false);
        setSelectedRowTable()
        setSelectedRatioButton()
    };
    const { formValues, setFormValues } = useGlobalContext();

    const putListToGlobalContext = (list) => {
        formValues.Vizit = { ...formValues.Vizit, patientVisitsList: list };
        setFormValues(formValues);
    
    }

    useEditRowTable({ resetForm, form, putListToGlobalContext });

    useEffect(() => {
        if (isAdd) {
            const add = () => {
                let copydataForm = deepCopy(form.getFieldsValue());
                copydataForm.key = new Date().getTime();
                copydataForm.Id = new Date().getTime();
                copydataForm.visitDate = moment(
                    copydataForm.visitDate
                ).format("YYYY-MM-DD HH:mm");
                setdataSource([...dataSource, copydataForm]);
                let list = [...dataSource, copydataForm]
                putListToGlobalContext(list)
                resetForm();
                setActiveRow();
            };
            add();
        }
    }, [isAdd]);

    useEffect(() => {
        if (isReset) {
            resetForm();
        }
    }, [isReset]);

    return {};
};

export default useAddAndResetForm;
