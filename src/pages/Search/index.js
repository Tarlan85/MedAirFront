import React, { useState } from "react";
import { Empty, Row } from "antd";
import { Table } from "antd";
import moment from "moment";
import Searchnput from "./Searchnput";
import useOnRowTable from "./hooks/useOnRowTable";

const Search = () => {
    const [dataSource, setdataSource] = useState([]);
    const columns = [
        {
            title: "Name",
            dataIndex: "patientName",
            key: "patientName",
        },
        {
            title: "Surname",
            dataIndex: "patientSurName",
            key: "patientSurName",
        },
        {
            title: "Patronymic",
            dataIndex: "patientPatronymic",
            key: "patientPatronymic",
        },
        {
            title: "Birth date",
            dataIndex: "birthDate",
            key: "birthDate",
            render: (value, row, index) => {
                return moment(value).format("DD-MM-YYYY");
            },
        },
        {
            title: "Birth Place",
            dataIndex: "birthPlace",
            key: "birthPlace",
        },
    ];

    const { onRowTable } = useOnRowTable()
    
    return (
        <>
            <Searchnput setdataSource={setdataSource} />
            <Row>
                <Table
                    locale={{
                        emptyText: (
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description="Patient not found..."
                            />
                        ),
                    }}
                    bordered
                    className="Table_Search"
                    columns={columns}
                    dataSource={dataSource}
                    onRow={(record, index) => ({
                        onClick: (e) => onRowTable(record, index),
                    })}
                />
            </Row>
        </>
    );
};

export default Search;
