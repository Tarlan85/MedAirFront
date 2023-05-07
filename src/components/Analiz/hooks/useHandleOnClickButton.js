import moment from "moment";
import { useGlobalContext } from "../../../context/context";
import { deepCopy } from "../../../functions/deepCopy";
import { useAnalizContext } from "../context";
import { breastSelectOpnions } from "../data";
import useEditRowTable from "./useEditRowTable";

const useHandleOnClickButton = ({ form }) => {
    const {
        setIsModalOpen,
        setActiveRow,
        setSelectOption,
        setSelectedUploadFormIteem,
        setBreastType,
        setIsEdit,
        setIsNew,
        setSelectedRowTable,
    } = useAnalizContext();

    const { analisesDataTable, setAnalisesDataTable } = useGlobalContext();


    
    const resetForm = () => {
        form.resetFields();
        form.setFieldsValue({breastType: 'Breast'});
        setBreastType("Breast");
        setSelectOption(breastSelectOpnions);
        setSelectedUploadFormIteem();
        setIsEdit(false);
        setIsNew(false);
    };
    const { formValues, setFormValues } = useGlobalContext();

    const putListToGlobalContext = (list) => {
        formValues.Analiz = { ...formValues.Analiz, analyzesMediaList: list };
        setFormValues(formValues);
    
    }

    useEditRowTable({ resetForm, form, putListToGlobalContext });

    const handleAdd = (analyzesId) => {
        let copydataForm = deepCopy(form.getFieldsValue());
        copydataForm.analyzesId = analyzesId
        copydataForm.key = analyzesId
        copydataForm.Id = analyzesId
        copydataForm.date = moment().format('YYYY-MM-DD HH:mm:ss')
        setAnalisesDataTable([...analisesDataTable, copydataForm]);
        putListToGlobalContext([...analisesDataTable, copydataForm])
        resetForm();
        setActiveRow();
        setSelectedRowTable()
        setIsModalOpen(false);
    };

    const handleAddNext = (analyzesId) => {
        let copydataForm = deepCopy(form.getFieldsValue());
        copydataForm.analyzesId = analyzesId
        copydataForm.key = analyzesId
        copydataForm.Id = analyzesId
        copydataForm.date = moment().format('YYYY-MM-DD HH:mm:ss')
        setAnalisesDataTable([...analisesDataTable, copydataForm]);
        putListToGlobalContext([...analisesDataTable, copydataForm])
        resetForm();
        setActiveRow();
        setSelectedRowTable()
    };

    const handleEdit = () => {
        setIsEdit(true)
    };
    const handleCancel = () => {
        setSelectedRowTable();
        resetForm();
        setActiveRow(false);
        setIsModalOpen(false);
    };

    return { handleAdd, handleAddNext, handleCancel, handleEdit };
};

export default useHandleOnClickButton;
