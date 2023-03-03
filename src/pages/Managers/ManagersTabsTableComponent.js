import React, { useMemo, useState } from "react";
import sendRequest from "../../api/sendRequest";
import DeleteTableRow from "../../components/DeleteTableRow";
import ManagersButtons from "../../components/ManagersButtons";
import { useGlobalContext } from "../../context/context";
import EditTableComponent from "../../components/EditTableComponent";
import { message } from "antd";

function ManagersTabsTableComponent(props) {
    const [count, setCount] = useState(0);
    const [showSaveButton, setShowSaveButton] = useState(false);

    const { managersList, setManagersList } = useGlobalContext();

    const onClickNewBundle = () => {
        let key = count;
        let newData = { key, Id: key };
        setManagersList([...managersList, newData]);
        setCount(count + 1);
        setShowSaveButton(true);
    };
    const handleSave = async () => {
        setShowSaveButton(false);
        for (let i = 0; i < managersList.length; i++) {
            let sendObj = { ...managersList[i] };
            let res = await sendRequest("managers/tabs", sendObj, "post");
            if(res){
                message.success({
                    content: 'Saved',
                    key: 'save_manager'
                })
            }else {
                message.error('Error')
            }
        }
    };
    const deleteItem = (delItem) => {
        let newList =  managersList.filter(i => i.Id !== delItem.Id)
        setManagersList(newList)
        message.success('Deleted')
    }
    const del = async (delItem) => {
        let Id = delItem.cureTabId;
        if(!Id){
            return deleteItem(delItem)
        }
        let res = await sendRequest("managers/tabs/" + Id, {}, "delete");
        if(res?.data === 'success'){
            message.success('Deleted')
            let res = await sendRequest("managers/tabs");
            res.data.forEach(i => i.Id = i.cureTabId )
            setManagersList(res.data);
        }else {
            message.warning("Don't deleted.")
        }
    };
    const columns = useMemo(() => {
        return [
            {
                title: "Name",
                dataIndex: "cureTabName",
                key: "cureTabName",
                editable: true,
                width: "200px",
            },
            {
                title: "Type",
                dataIndex: "cureTabType",
                inputType:'select',
                key: "cureTabType",
                editable: true,
                width: "200px",
            },
            {
                title: "Mg/Ml",
                dataIndex: "cureTabSize",
                key: "cureTabSize",
                editable: true,
                width: "200px",
            },
            {
                title: "",
                dataIndex: "delete",
                key: "delete",
                width: "20px",
                render: (value, row, index) => {
                    return (
                        <DeleteTableRow
                            row={row}
                            dataSource={managersList}
                            setDataSource={setManagersList}
                            delFunct={del}
                        />
                    );
                },
            },
        ];
    }, [managersList.length]);
    return (
        <div className="managers-table">
            <ManagersButtons
                showSaveButton={showSaveButton}
                handleSave={handleSave}
                onClickNewBundle={onClickNewBundle}
            />
            <EditTableComponent
                setShowSaveButton={setShowSaveButton}
                dataSource={managersList}
                setDataSource={setManagersList}
                defaultColumns={columns}
            />

        </div>
    );
}

export default ManagersTabsTableComponent;
