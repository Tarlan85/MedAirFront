import { Card, Tabs } from "antd";
import React from "react";
import ManagersPatientTableComponent from "./ManagersPatientTableComponent";
import ManagersTabsTableComponent from "./ManagersTabsTableComponent";
import Pathologists from "./Pathologists";

const Managers = () => {
  const onChange = (activeKey) => {};
  return (
    <>
      <Tabs
        onChange={onChange}
        centered
        // type="card"
        defaultActiveKey={"1"}
        style={{ margin: "0px 20px 0px 20px" }}
      >
        <Tabs.TabPane tab="Reception locations" key="1">
          <div style={styleTab}>
            <ManagersPatientTableComponent />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Medications" key="2">
          <div style={styleTab}>
            <ManagersTabsTableComponent />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Pathologists" key="3">
          <div style={styleTab}>
            <Pathologists />
          </div>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default Managers;

const styleTab = { padding: "50px" };
