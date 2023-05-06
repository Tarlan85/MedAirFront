import { Table } from "antd";
import React, { useMemo, useState } from "react";
import { useGlobalContext } from "../../context/context";
import DeleteTableRow from "../DeleteTableRow";
import { useAnalizContext } from "./context";
import TableImageCell from "./components/TableImageCell";

const AnalizTable = () => {
  const [isTableChange, setIsTableChange] = useState(false);
  const { setSelectedRowTable, activeRow, setActiveRow } = useAnalizContext();

  const { analisesDataTable, setAnalisesDataTable } = useGlobalContext();

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
        dataIndex: "analyzesContentName",
        key: "analyzesContentName",
        render: (value, row) => (
          <TableImageCell
            value={value}
            row={row}
            setIsTableChange={setIsTableChange}
          />
        ),
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
              dataSource={analisesDataTable}
              setDataSource={setAnalisesDataTable}
            />
          );
        },
      },
    ];
  }, [analisesDataTable, isTableChange]);

  const onClickRow = (r) => {
    console.log('r',r)
    if (!r.key) {
      r.Id = new Date().getTime();
      r.key = r.Id;
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
        dataSource={analisesDataTable}
        onRow={(r) => ({
          onClick: (e) => onClickRow(r),
        })}
      />
    </>
  );
};

export default AnalizTable;
