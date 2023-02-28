import moment from "moment";
import React, { memo, useEffect, useMemo, useState } from "react";
import { useGlobalContext } from "../../../context/context";
import DeleteTableRow from "../../DeleteTableRow";
import EditTableComponent from "../../EditTableComponent";

function TabsTableMualice() {
    const [count, setCount] = useState(0);

    const { isChangeTable, setIsChangeTable, listRecipe, setListRecipe } =
        useGlobalContext();


    useEffect(() => {
        if (isChangeTable) {
            setIsChangeTable(false);
        }
    }, [isChangeTable]);
    const onClickNewBundle = () => {
        let key = count;
        let newData = { key, date: moment().format("DD-MM-YYYY") };
        setListRecipe([...listRecipe, newData]);
        setCount(count + 1);
    };
    const columns = useMemo(() => {
        return [
            {
                title: "Date",
                dataIndex: "date",
                key: "date",
                editable: true,
                width: "200px",
            },
            {
                title: "Name",
                dataIndex: "cureTabName",
                key: "cureTabName",
                inputType:'select',
                editable: true,
                width: "200px",
            },
            {
                title: "Type",
                dataIndex: "cureTabType",
                inputType:'select',
                editable: true,
                width: "200px",
                render: (value, row, index) => {
                    if (!value && row.Type) {
                        return row.Type;
                    } else return value;
                },
            },
            {
                title: "Mg/Ml",
                dataIndex: "cureTabDose",
                key: "cureTabDose",
                editable: true,
                width: "200px",
            },
            {
                title: "Usage guide",
                dataIndex: "cureTabUsing",
                key: "cureTabUsing",
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
                            dataSource={listRecipe}
                            setDataSource={setListRecipe}
                        />
                    );
                },
            },
        ];
    }, [listRecipe.length, isChangeTable]);
    return (
        <div className="managers-table my_table">
            <h2 className="tablets_table_header">Medications</h2>
            <EditTableComponent
                dataSource={listRecipe}
                setDataSource={setListRecipe}
                defaultColumns={columns}
            />
            <button
                type="button"
                className="new-button w-100"
                onClick={onClickNewBundle}
            >
                + New medications
            </button>
        </div>
    );
}

export default memo(TabsTableMualice);
