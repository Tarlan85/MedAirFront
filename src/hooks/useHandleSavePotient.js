import { message } from "antd";
import sendRequest from "../api/sendRequest";
import { useGlobalContext } from "../context/context";

export function useHandleSavePotient() {
	const {
		formValues,
		analizFileList,
		dataFamily,
		listRecipe,
		recipeList,
		savedDrawingCanvas,
		descriptionsCanvas,
		deseaseHistoryDynamicsList,
	} = useGlobalContext();

	const messageOnSave = (res, nameFunc) => {
		if (res && typeof res !== "string") {
			message.success({
				content: nameFunc + " saved",
				key: nameFunc + "_save",
				duration: 2,
			});
		} else {
			message.error({
				content: nameFunc + " don't saved",
				key: nameFunc + "_save",
				duration: 2,
			});
		}
	};

	const putAncet = async (obj) => {
		let res = await sendRequest("vite", obj, "post");
		messageOnSave(res, "Vite");
	};
	const putMorbi = async (obj) => {
		let familyMembersList = [];
		dataFamily.forEach((i, index) => {
			let familyMember = Object.keys(i)[0];
			familyMembersList.push({
				familyMember: familyMember,
				familyMemberInjury: i[familyMember].trauma,
				familyMemberDied: i[familyMember].dead,
				familyMemberCurrentCancer: i[familyMember].alive,
				familyMemberDesc: i[familyMember].description,
			});
		});
		obj.familyMembersList = familyMembersList;
		savedDrawingCanvas.deseaseImageDesc =
			JSON.stringify(descriptionsCanvas);
		obj.deseaseImagesList = savedDrawingCanvas;
		obj.deseaseHistoryDynamicsList = deseaseHistoryDynamicsList;

		let res = await sendRequest("morby", obj, "post");
		messageOnSave(res, "Morby");
	};
	const putVizit = async (obj) => {
		let res = await sendRequest("visits", obj, "post");
		messageOnSave(res, "Visits");
	};
	const putMualice = async (obj) => {
		let res = await sendRequest("treatment", obj, "post");
		messageOnSave(res, "Treatment");
	};
	const putAnalyzis = async (obj) => {
		let res = await sendRequest("analyses", obj, "post");
		messageOnSave(res, "Analyses");
	};
	const fetchPatientid = async () => {
		try {
			let res = await sendRequest("patientid", {}, "get");
			return res.data;
		} catch (e) {
			message.error({
				content: e,
				key: "doc_save",
				duration: 2,
			});
		}
	};

	const handleSavePotient = async () => {
		message.loading({ content: "Loading...", key: "doc_save" });

		let id = formValues.Potient.patientId;
		let patientId;
		if (id) {
			patientId = id;
		} else {
			patientId = await fetchPatientid();
		}
		if (patientId) {
			if (Object.keys(formValues.Anket).length) {
				const {
					patientName,
					patientSurName,
					patientPatronymic,
					patientId,
				} = formValues.Potient;
				const sendObj = {
					...formValues.Anket,
					patientName,
					patientSurName,
					patientPatronymic,
					patientId,
				};
				putAncet(sendObj);
			}
			if (Object.keys(formValues.Analiz).length) {
				const sendObj = {
					...formValues.Analiz,
					patientId,
					analizFileList,
				};
				putAnalyzis(sendObj);
			}
			if (Object.keys(formValues.Morbi).length) {
				const sendObj = { ...formValues.Morbi, patientId };
				putMorbi(sendObj);
			}
			if (Object.keys(formValues.Vizit).length) {
				const sendObj = { ...formValues.Vizit, patientId };
				putVizit(sendObj);
			}
			if (Object.keys(formValues.treatmentRB).length) {
				const sendObj = {
					// treatmentRB: {
					...formValues.treatmentRB,
					patientId,
					treatmentDynamics: recipeList,
					recipeList: listRecipe,
					// },
				};
				putMualice(sendObj);
			}
		}
	};

	return { handleSavePotient };
}
