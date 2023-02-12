import moment from "moment";
import { useNavigate } from "react-router";
import sendRequest from "../../../api/sendRequest";
import { useGlobalContext } from "../../../context/context";
import useClearDataProfileTables from "./useClearDataProfileTables";

const useOnRowTable = () => {
  const {
    formValues,
    setRecipeList,
    setListRecipe,
    setFormValues,
    setVisitDataTable,
    setAnalisesDataTable,
    setSavedDrawingCanvas,
    setDescriptionsCanvas,
    setDataFamily,
    setDeseaseHistoryDynamicsList,
  } = useGlobalContext();

  const navigate = useNavigate();

  const getAncet = async (id) => {
    let res = await sendRequest("vite/" + id, {}, "get");
    return res
  };

  const settingDataFamily = (res) => {
    if (res.data?.familyMembersList) {
      try {
        let arrFamily = [];
        res.data.familyMembersList.forEach((family) => {
          const {
            familyMember,
            familyMemberInjury,
            familyMemberDied,
            familyMemberCurrentCancer,
            familyMemberDesc,
          } = family;
          arrFamily.push({
            [familyMember]: {
              trauma: familyMemberInjury,
              dead: familyMemberDied,
              alive: familyMemberCurrentCancer,
              description: familyMemberDesc,
            },
          });
          setDataFamily(arrFamily);
        });
      } catch (e) {}
    }
  };
  const getMorby = async (id) => {
    let res = await sendRequest("morby/" + id, {}, "get");
    if (res) {
      formValues.Morbi = res.data;
      settingDataFamily(res);
      setFormValues(formValues);
      setSavedDrawingCanvas(res.data.deseaseImagesList);
      if (res.data.deseaseImagesList?.deseaseImageDesc) {
        let descCanvas = JSON.parse(
          res.data.deseaseImagesList.deseaseImageDesc
        );
        setDescriptionsCanvas(descCanvas);
      }
      setDeseaseHistoryDynamicsList(res.data.deseaseHistoryDynamicsList);
    }
  };
  const getVizit = async (id) => {
    let res = await sendRequest("visits/patientId/" + id, {}, "get");

    try {
      if (res.data[0]) {
        let dataVT = res.data;
        setVisitDataTable(dataVT);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getTreatment = async (id) => {
    let res = await sendRequest("treatment/" + id, {}, "get");
    try {
      if (res.data) {
        formValues.treatmentRB = res.data;
        setFormValues(formValues);
        let treatmentDynamics = res.data.treatmentDynamics;
        let recipeList = res.data.recipeList;
        setRecipeList(treatmentDynamics);
        setListRecipe(recipeList);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getAnalyses = async (id) => {
    let res = await sendRequest("analyses/" + id, {}, "get");
    try {
      if (res.data[0]) {
        let dataAT = res.data;
        setAnalisesDataTable(dataAT);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = (id) => {
    try {
      Promise.all([
        getAncet(id),
        getMorby(id),
        getVizit(id),
        getTreatment(id),
        getAnalyses(id),
      ]);
    } catch (err) {
    }
  };

  const { clearDataProfileTables } = useClearDataProfileTables();

  const onRowTable = async (record) => {
    clearDataProfileTables();
    // record.birthDate = moment(record.birthDate);
    
    try {
      const res = await getAncet(record.patientId)
      console.log(res.data)
      res.data.birthDate = res.data.birthDate ? moment(res.data.birthDate) : null
      formValues.Anket = res.data;
      formValues.Potient = res.data;
      setFormValues(formValues);
      await fetchData(record.patientId);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  return { onRowTable };
};

export default useOnRowTable;
