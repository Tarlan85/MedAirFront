import { useGlobalContext } from '../../../context/context';

function useClearDataProfileTables() {
    const {
      setRecipeList,
      setListRecipe,
      setFormValues,
      setVisitDataTable,
      setAnalisesDataTable,
    } = useGlobalContext();

    const clearDataProfileTables = () => {
        setFormValues({
            Anket: { gender: "Female", alkogol: 0, smoke: 0 },
            Potient: {},
            Morbi: {familyMembersList: []},
            Vizit: {},
            treatmentRB: {},
            Analiz: {},
        })
        setVisitDataTable([]);
        setRecipeList([]);
        setListRecipe([]);
        setAnalisesDataTable([]);
    }
  return {clearDataProfileTables}
}

export default useClearDataProfileTables