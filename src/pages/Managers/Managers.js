import { Card } from "antd";
import React from "react";
import ManagersPatientTableComponent from "./ManagersPatientTableComponent";
import ManagersTabsTableComponent from "./ManagersTabsTableComponent";

const Managers = () => {
    return (
        <>
            <div className="managers_content">
                <Card title="Reception locations">
                    <ManagersPatientTableComponent />
                </Card>
                <Card title="Medications">
                    <ManagersTabsTableComponent />
                </Card>
            </div>
        </>
    );
};

export default Managers;
