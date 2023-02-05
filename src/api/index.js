import sendRequest from "./sendRequest";

export const fetchPatientid = async () => {
    let res = await sendRequest("patientid", {}, "get");
    return res.data;
};
export const putVizit = (obj) => {
    sendRequest("visits", obj, "post");
};
export const putVizitFromCalendar = (obj) => {
    sendRequest("visitsformcalendar", obj, "post");
};
export const putAnalyzis = (obj) => {
    sendRequest("analyses", obj, "post");
};
export const putAnket = (obj) => {
    sendRequest("vite", obj, "post");
};
export const putMualice = (obj) => {
    sendRequest("treatment", obj, "post");
};
