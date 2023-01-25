import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/context";
import { deepCopy } from "../../../functions/deepCopy";
import { useMorbyContext } from "../context";

const useEditRowTable = ({ resetForm, form }) => {
  const {
    selectedRowTable,
    setSelectedRowTable,
    isEdit,
    setIsEdit,
    setActiveRow,
    setihkEr,
    setihkPr,
    setihkHer2,
  } = useMorbyContext();

  const { deseaseHistoryDynamicsList, setDeseaseHistoryDynamicsList } =
    useGlobalContext();

  const [selectedRowId, setselectedRowId] = useState();

  const openOtherForm = (formObj) => {
    if (formObj.ihkEr === 1 || formObj.erN) {
      setihkEr(1);
      form.setFieldsValue({ihkEr: 1})
    }
    if (formObj.ihkPr === 1 || formObj.prN) {
      setihkPr(1);
      form.setFieldsValue({ihkPr: 1})
    }
    if (formObj.ihkHer2 === 2) {
      setihkHer2(2);
    }
  };

  useEffect(() => {
    if (selectedRowTable) {
      let copy = deepCopy(selectedRowTable);
      setselectedRowId(copy.Id);
      resetForm();
      form.setFieldsValue(copy);
      setSelectedRowTable();
      openOtherForm(copy);
    }
  }, [selectedRowTable]);

  useEffect(() => {
    if (isEdit) {
      let findIndex = deseaseHistoryDynamicsList.findIndex(
        (i) => i.Id === selectedRowId
      );

      let copydataForm = deepCopy(form.getFieldsValue());
      copydataForm.key = selectedRowId;
      copydataForm.Id = selectedRowId;
      let copyDataSource = deepCopy(deseaseHistoryDynamicsList);
      copyDataSource[findIndex] = copydataForm;
      setDeseaseHistoryDynamicsList(copyDataSource);
      resetForm();
      setIsEdit();
      setActiveRow();
    }
  }, [isEdit]);

  return {};
};

export default useEditRowTable;
