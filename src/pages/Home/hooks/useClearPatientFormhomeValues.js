import { useGlobalContext } from "../../../context/context";

function useClearPatientFormhomeValues() {

  const {
      setFormValues,
      setSavedDrawingCanvas,
      setDescriptionsCanvas,
      setAnalizFileList,
      setRecipeList,
      setListRecipe,
      setDataFamily,
      setVisitDataTable,
      setAnalisesDataTable,
      setManagersPlaces,
      setManagersList,
      setDeseaseHistoryDynamicsList,
      setIsClearForm,
  } = useGlobalContext();

  const clearPatient = () => {
    setIsClearForm(true)
      setFormValues({
          Anket: { gender: "Female", alkogol: 0, smoke: 0 },
          Potient: {},
          Morbi: { familyMembersList: [] },
          Vizit: {},
          treatmentRB: {},
          Analiz: {},
      });
      setSavedDrawingCanvas({});
      setDescriptionsCanvas({});
      setAnalizFileList({});
      setRecipeList([]);
      setListRecipe([]);
      setDataFamily([]);
      setDataFamily([]);
      setVisitDataTable([]);
      setAnalisesDataTable([]);
      setManagersPlaces([]);
      setManagersList([]);
      setDeseaseHistoryDynamicsList([])
  };
  return { clearPatient }
}

export default useClearPatientFormhomeValues