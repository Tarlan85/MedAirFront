import React, { useMemo, useState } from "react";
import sendRequest from "../../api/sendRequest";
import DeleteTableRow from "../../components/DeleteTableRow";
import ManagersButtons from "../../components/ManagersButtons";
import { useGlobalContext } from "../../context/context";
import EditTableComponent from "../../components/EditTableComponent";
import { message } from "antd";

function Pathologists(props) {
    const [count, setCount] = useState(0);
    const [showSaveButton, setShowSaveButton] = useState(false);

    const { pathologistsList, setPathologistsList } = useGlobalContext();

    const onClickNewBundle = () => {
        let key = count;
        let newData = { key, Id: key };
        setPathologistsList([...pathologistsList, newData]);
        setCount(count + 1);
        setShowSaveButton(true);
    };
    const handleSave = async () => {
        setShowSaveButton(false);
        for (let i = 0; i < pathologistsList.length; i++) {
            let sendObj = { ...pathologistsList[i] };
            let res = await sendRequest("managers/pathologists", sendObj, "post");
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
        let newList =  pathologistsList.filter(i => i.Id !== delItem.Id)
        setPathologistsList(newList)
        message.success('Deleted')
    }
    const del = async (delItem) => {
        let Id = delItem.pathologistId;
        if(!Id){
            return deleteItem(delItem)
        }
        let res = await sendRequest("managers/pathologists/" + Id, {}, "delete");
        if(res?.data === 'success'){
            message.success('Deleted')
            let res = await sendRequest("managers/pathologists");
            res.data.forEach(i => i.Id = i.pathologistId )
            setPathologistsList(res.data);
        }else {
            message.warning("Don't deleted.")
        }
    };
    const columns = useMemo(() => {
        return [
            {
                title: "Name",
                dataIndex: "pathologistName",
                key: "pathologistName",
                editable: true,
                width: "200px",
            },
            {
                title: "Place",
                dataIndex: "pathologistPlace",
                key: "pathologistPlace",
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
                            dataSource={pathologistsList}
                            setDataSource={setPathologistsList}
                            delFunct={del}
                        />
                    );
                },
            },
        ];
    }, [pathologistsList.length]);
    return (
        <div className="managers-table">
            <ManagersButtons
                showSaveButton={showSaveButton}
                handleSave={handleSave}
                onClickNewBundle={onClickNewBundle}
            />
            <EditTableComponent
                setShowSaveButton={setShowSaveButton}
                dataSource={pathologistsList}
                setDataSource={setPathologistsList}
                defaultColumns={columns}
            />

        </div>
    );
}

export default Pathologists;
