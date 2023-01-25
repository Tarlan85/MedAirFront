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
        }
    };
    const del = async (delItem) => {
        let Id = delItem.visitPlaceId;
        let res = await sendRequest("managers/places/" + Id, {}, "delete");
        return res
    };
    const columns = useMemo(() => {
        return [
            {
                title: "Ad",
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
