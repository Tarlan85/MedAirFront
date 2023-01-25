import { message } from "antd";
import { fetchPatientid, putVizit, putAnket } from "../../api";
import sendRequest from "../../api/sendRequest";

const controlPatient = async (patientId) =>
    sendRequest(`patients/${patientId}`);

export const handleAddVisit = async ({ sendObj }) => {
    let patientId;
    if (sendObj.patientId) {
        let id = sendObj.patientId;
        controlPatient(id).then((res) => {
            if (!res?.data) {
                message.warning({
                    content: "The Patient not find",
                    key: "info_message",
                    duration: 4,
                });
            }else{
              patientId = sendObj.patientId;
            }
        });

        patientId = sendObj.patientId;
    } else {
        patientId = await fetchPatientid();
    }
    const {
        patientName,
        patientSurName,
        patientPatronymic,
        visitDate,
        phoneNumber,
        status,
        visitReason,
    } = sendObj;
    let sendObjVisit = {
        patientVisitsList: [
            {
                patientId,
                status,
                visitDate,
                visitReason,
            },
        ],
    };
    let sendObjAnket = {
        patientId,
        patientName,
        patientSurName,
        patientPatronymic,
        phoneNumber,
    };
    if (patientId) {
        putVizit(sendObjVisit);
        if (!sendObj.patientId) {
            putAnket(sendObjAnket);
        }
    }
};
