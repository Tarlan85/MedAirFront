import { Table } from "antd";
import React, { useMemo } from "react";
import DeleteTableRow from "../DeleteTableRow";
import { useAnalizContext } from "./context";
import useSetDataTableOnSelectedSearchPatient from "./hooks/useSetDataTableOnSelectedSearchPatient";

const AnalizTable = () => {
    const {
        dataSource,
        setdataSource,
        setSelectedRowTable,
        activeRow,
        setActiveRow,
    } = useAnalizContext();

    useSetDataTableOnSelectedSearchPatient()

    const columns = useMemo(() => {
        return [
            {
                title: "Breast Type",
                dataIndex: "analyzesType",
                key: "analyzesType",
            },
            {
                title: "Sub Type",
                dataIndex: "analyzesSubeType",
                key: "analyzesSubeType",
            },
            {
                title: "Description",
                dataIndex: "analyzesDesc",
                key: "analyzesDesc",
            },
            {
                title: "Date",
                dataIndex: "date",
                key: "date",
            },
            {
                title: "Image",
                dataIndex: "analyzesContent",
                key: "analyzesContent",
                render: (value, row, index) => {
                    return row.analyzesContent?.fileList[0]?.name
                }
            },
            // {
            //     title: "Image",
            //     dataIndex: "Image",
            //     key: "Image",
            //     render: (value, row, index) => {
            //         const { fileList: newFileList } = row.Image?.fileList
            //         if (!newFileList) {
            //             return;
            //         }
            //         return (
            //             <Upload
            //                 action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            //                 listType="picture"
            //                 fileList={newFileList}
            //             ></Upload>
            //         );
            //     },
            // },
            {
                title: "",
                dataIndex: "delete",
                key: "delete",
                width: "20px",
                render: (value, row, index) => {
                    return (
                        <DeleteTableRow
                            row={row}
                            dataSource={dataSource}
                            setDataSource={setdataSource}
                        />
                    );
                },
            },
        ];
    }, [dataSource]);

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
                locale={{ emptyText: "Document is empty" }}
                columns={columns}
                dataSource={dataSource}
                onRow={(r) => ({
                    onClick: (e) => onClickRow(r),
                })}
            />
        </>
    );
};

export default AnalizTable;
