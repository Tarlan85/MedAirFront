import { Table } from "antd";
import React, { memo, useMemo } from "react";
import { useGlobalContext } from "../../context/context";
import DeleteTableRow from "../DeleteTableRow";
import { useMualiceContext } from "./context";

const MualiceTable = () => {
    const { setSelectedRowTable, activeRow, setActiveRow } =
        useMualiceContext();
    const { recipeList, setRecipeList } = useGlobalContext();

    const columns = useMemo(() => {
        return [
            {
                title: "Date",
                dataIndex: "treatmentDate",
                key: "treatmentDate",
            },
            {
                title: "Brest type",
                dataIndex: "breastType",
                key: "breastType",
            },
            {
                title: "Treatment type",
                dataIndex: "treatmentTypeName",
                key: "treatmentTypeName",
            },
            {
                title: "Sub type",
                dataIndex: "treatmentSubType",
                key: "treatmentSubType",
            },
            {
                title: "Sub sub type",
                dataIndex: "treatmentSubSubType",
                key: "treatmentSubSubType",
            },
            {
                title: "Description",
                dataIndex: "treatmentTypeDesc",
                key: "treatmentTypeDesc",
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
                            dataSource={recipeList}
                            setDataSource={setRecipeList}
                        />
                    );
                },
            },
        ];
    }, [recipeList]);

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
                locale={{ emptyText: "The document is empty" }}
                className="my_table"
                columns={columns}
                dataSource={recipeList}
                onRow={(r) => ({
                    onClick: (e) => onClickRow(r),
                })}
            />
        </>
    );
};

export default memo(MualiceTable);
