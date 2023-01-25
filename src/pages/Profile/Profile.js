import React from "react";
import { Tabs } from "antd";

import Analiz from "../../components/Analiz";
import Vizit from "../../components/Vizit";
import Morbi from "../../components/Morbi";
import Potient from "../../components/Potient";
import Anket from "../../components/Anket";
import Mualice from "../../components/Mualice";
import { useProfileContext } from "./context";
import { useGlobalContext } from "../../context/context";

const Profile = () => {
    const { setActiveKey } = useProfileContext()
    const { defaultActiveKey } = useGlobalContext()

    const onChange = (activeKey) => {
        setActiveKey(activeKey)
    }
    return (
        <>
            <Potient />

            <div className="card-container">
                <Tabs onChange={onChange}
                    type="card"
                    defaultActiveKey={defaultActiveKey}
                    style={{ margin: "0px 20px 0px 20px" }}
                >
                    <Tabs.TabPane tab="Person info" key="1">
                        <Anket />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Disease history" key="2">
                        <Morbi />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Visits" key="3">
                        <Vizit />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Analysis" key="4">
                        <Analiz />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Treatment" key="5">
                        <Mualice />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    );
};

export default Profile;
