import { message } from "antd";
import React, { useMemo, useState } from "react";
import sendRequest from "../../api/sendRequest";
import DeleteTableRow from "../../components/DeleteTableRow";
import EditTableComponent from "../../components/EditTableComponent";
import ManagersButtons from "../../components/ManagersButtons";
import { useGlobalContext } from "../../context/context";

function ManagersPatientTableComponent(props) {
    const [count, setCount] = useState(0);
    const [showSaveButton, setShowSaveButton] = useState(false);

    const { managersPlaces, setManagersPlaces, setisAddNewRow } = useGlobalContext();

    const onClickNewBundle = () => {
        let key = count;
        let newData = { key, Id: key };
        setManagersPlaces([...managersPlaces, newData]);
        setCount(count + 1);
        setShowSaveButton(true);
        setisAddNewRow(true)
    };
    const handleSave = async () => {
        setShowSaveButton(false);
        for (let i = 0; i < managersPlaces.length; i++) {
            let sendObj = { ...managersPlaces[i] };
            let res = await sendRequest("managers/places", sendObj, "post");
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
        let newList =  managersPlaces.filter(i => i.Id !== delItem.Id)
        setManagersPlaces(newList)
        message.success('Deleted')
    }
    const del = async (delItem) => {
        let Id = delItem.visitPlaceId;
        if(!Id){
            return deleteItem(delItem)
        }
        let res = await sendRequest("managers/places/" + Id, {}, "delete");
        if(res?.data === 'success'){
            message.success('deleted')
            let res = await sendRequest("managers/places");
            res.data.forEach(i => i.Id = i.visitPlaceId )
            setManagersPlaces(res.data);
        }
    };
    const columns = useMemo(() => {
        return [
            {
                title: "Name",
                dataIndex: "placeName",
                key: "placeName",
                editable: true,
                width: "200px",
            },
            {
                title: "City",
                dataIndex: "placeCity",
                key: "placeCity",
                editable: true,
                width: "200px",
            },
            {
                title: "Country",
                dataIndex: "placeCountry",
                key: "placeCountry",
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
                            dataSource={managersPlaces}
                            setDataSource={setManagersPlaces}
                            delFunct={del}
                        />
                    );
                },
            },
        ];
    }, [managersPlaces.length]);
    return (
        <div className="managers-table">
            <ManagersButtons
                showSaveButton={showSaveButton}
                handleSave={handleSave}
                onClickNewBundle={onClickNewBundle}
            />

            <EditTableComponent
                setShowSaveButton={setShowSaveButton}
                dataSource={managersPlaces}
                setDataSource={setManagersPlaces}
                defaultColumns={columns}
            />
        </div>
    );
}

export default ManagersPatientTableComponent;
