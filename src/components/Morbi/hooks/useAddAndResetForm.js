import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/context";
import { deepCopy } from "../../../functions/deepCopy";
import { useMorbyContext } from "../context";
import useEditRowTable from "./useEditRowTable";

const useAddAndResetForm = ({ form }) => {
    const {
        isReset,
        setIsReset,
        isAdd,
        setIsAdd,
        setActiveRow,
        setIsEdit,
        setihkEr,
        setihkPr,
        setihkHer2,
    } = useMorbyContext();

    const { deseaseHistoryDynamicsList, setDeseaseHistoryDynamicsList } =
        useGlobalContext();

    const resetForm = () => {
        form.setFieldsValue({});
        form.resetFields();
        setIsAdd(false);
        setIsReset(false);
        setIsEdit(false);
        setihkEr();
        setihkPr();
        setihkHer2();
    };

    useEditRowTable({ resetForm, form });

    useEffect(() => {
        if (isAdd) {
            const add = () => {
                let copydataForm = deepCopy(form.getFieldsValue());
                copydataForm.key = new Date().getTime();
                copydataForm.Id = new Date().getTime();
                console.log('copydataForm',copydataForm)
                setDeseaseHistoryDynamicsList([
                    ...deseaseHistoryDynamicsList,
                    copydataForm,
                ]);
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
