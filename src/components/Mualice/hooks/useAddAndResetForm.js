import moment from "moment";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/context";
import { deepCopy } from "../../../functions/deepCopy";
import { useMualiceContext } from "../context";
import useEditRowTable from "./useEditRowTable";

const useAddAndResetForm = ({ form }) => {
    const {
        isReset,
        setIsReset,
        isAdd,
        setIsAdd,
        dataSource,
        setdataSource,
        settreatmentsType,
        setActiveRow,
        setIsEdit,
        setSLNB,
        setAxilla,
    } = useMualiceContext();

    const { recipeList, setRecipeList } = useGlobalContext();

    const resetForm = () => {
        form.setFieldsValue({});
        form.resetFields();
        setSLNB?.();
        setAxilla?.();
        settreatmentsType?.();
        setIsAdd(false);
        setIsReset(false);
        setIsEdit(false);
    };

    useEditRowTable({ resetForm, form });

    useEffect(() => {
        if (isAdd) {
            const add = () => {
                let copydataForm = deepCopy(form.getFieldsValue());
                copydataForm.key = new Date().getTime();
                copydataForm.Id = new Date().getTime();
                copydataForm.treatmentDate = moment(
                    copydataForm.treatmentDate
                ).format("YYYY-MM-DD HH:mm");
                setRecipeList([...recipeList, copydataForm]);
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
