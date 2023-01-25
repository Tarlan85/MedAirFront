import { Row } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context/context";
import VizitForm from "./VizitForm";

const HeaderHomePage = () => {
    const navigate = useNavigate();

    const {
        isAddVisit,
        setIsAddVisit,
        setformVisitCalendar,
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
    } = useGlobalContext();

    const onClickAdd = () => {
        setIsAddVisit(true);
        setformVisitCalendar({});
    };

    const onClickNewPatientButton = () => {
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
        navigate("/profile");
    };
    return (
        <>
            <Row style={{ marginLeft: "5%" }}>
                <button
                    onClick={onClickNewPatientButton}
                    className="new_button"
                >
                    New Patient
                </button>
                <button onClick={onClickAdd} className="new_button">
                    Add visit
                </button>
            </Row>
            {isAddVisit ? <VizitForm /> : ""}
        </>
    );
};

export default HeaderHomePage;
