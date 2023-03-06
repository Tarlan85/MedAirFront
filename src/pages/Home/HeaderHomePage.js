import { Row } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../../context/context";
import useClearPatientFormhomeValues from "./hooks/useClearPatientFormhomeValues";
import VizitForm from "./VizitForm";

const HeaderHomePage = () => {
  const navigate = useNavigate();

  const {
    isAddVisit,
    setIsAddVisit,
    setformVisitCalendar,
  } = useGlobalContext();

  const onClickAdd = () => {
    setIsAddVisit(true);
    setformVisitCalendar({});
  };

  const { clearPatient } = useClearPatientFormhomeValues();

  const onClickNewPatientButton = () => {
    clearPatient();
    navigate("/profile");
  };
  return (
    <>
      <Row style={{ marginLeft: "5%" }}>
        <button onClick={onClickNewPatientButton} className="new_button">
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
