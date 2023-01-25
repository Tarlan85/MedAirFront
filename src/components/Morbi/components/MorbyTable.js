import { Table } from "antd";
import React, { memo, useMemo } from "react";
import { useGlobalContext } from "../../../context/context";
import DeleteTableRow from "../../DeleteTableRow";
import { useMorbyContext } from "../context";

const MorbyTable = () => {
    const { setSelectedRowTable, activeRow, setActiveRow } = useMorbyContext();
    const { deseaseHistoryDynamicsList, setDeseaseHistoryDynamicsList } =
        useGlobalContext();
    const columns = useMemo(() => {
        return [
            {
                title: "Breast",
                dataIndex: "complaintBreastType",
                key: "complaintBreastType",
            },
            {
                title: "Duration of illness",
                dataIndex: "durationOfIllness",
                key: "durationOfIllness",
            },
            {
                title: "Complaints",
                dataIndex: "complaintDescription",
                key: "complaintDescription",
            },
            {
                title: "ER",
                dataIndex: "ihkEr",
                key: "ihkEr",
                render: (value) => {
                    if (value === 1) {
                        return "Pozitiv";
                    } else if (value === 2) {
                        return "Negativ";
                    }
                },
            },
            {
                title: "ER N",
                dataIndex: "erN",
                key: "erN",
            },
            {
                title: "PR",
                dataIndex: "ihkPr",
                key: "ihkPr",
                render: (value) => {
                    if (value === 1) {
                        return "Pozitiv";
                    } else if (value === 2) {
                        return "Negativ";
                    }
                },
            },
            {
                title: "PR N",
                dataIndex: "prN",
                key: "prN",
            },
            {
                title: "HER2",
                dataIndex: "her2",
                key: "her2",
            },
            {
                title: "HER2 FT",
                dataIndex: "her2FT",
                key: "her2FT",
            },
            {
                title: "K67",
                dataIndex: "k67",
                key: "k67",
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
                            dataSource={deseaseHistoryDynamicsList}
                            setDataSource={setDeseaseHistoryDynamicsList}
                        />
                    );
                },
            },
        ];
    }, [deseaseHistoryDynamicsList]);

    const onClickRow = (r) => {
        if(!r.key){
            r.Id = new Date().getTime();
            r.key = r.Id
        }
        setSelectedRowTable(r);
        setActiveRow(r.key);
    };
    return (
        <>
            <Table
                rowClassName={(record, index) =>
                    record.key === activeRow && "rowClassName_active"
                }
                locale={{ emptyText: "Sənəd boşdur" }}
                className="my_table"
                columns={columns}
                dataSource={deseaseHistoryDynamicsList}
                onRow={(r) => ({
                    onClick: (e) => onClickRow(r),
                })}
            />
        </>
    );
};

export default memo(MorbyTable);
