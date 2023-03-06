import { Table } from "antd";
import React, { memo, useEffect, useMemo } from "react";
import { useGlobalContext } from "../../context/context";
import DeleteTableRow from "../DeleteTableRow";
import { useVisitContext } from "./context";
import FooterButtons from "./FooterButtons";
import useSetDataTableOnSelectedSearchPatient from "./hooks/useSetDataTableOnSelectedSearchPatient";

const VisitTable = () => {
  const {
    dataSource,
    setdataSource,
    setSelectedRowTable,
    activeRow,
    setActiveRow,
  } = useVisitContext();

  useSetDataTableOnSelectedSearchPatient();

  const { isClearForm } = useGlobalContext();

  useEffect(() => {
    if (isClearForm) {
      setdataSource([]);
    }
  }, [isClearForm]);

  const columns = useMemo(() => {
    return [
      {
        title: "Date",
        dataIndex: "visitDate",
        key: "visitDate",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
      },
      {
        title: "Visit type",
        dataIndex: "visitType",
        key: "visitType",
      },
      {
        title: "Reason",
        dataIndex: "visitReason",
        key: "visitReason",
      },
      {
        title: "Description",
        dataIndex: "visitDesc",
        key: "visitDesc",
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
              dataSource={dataSource}
              setDataSource={setdataSource}
            />
          );
        },
      },
    ];
  }, [dataSource]);

  const onClickRow = (r) => {
    if (!r.key) {
      r.Id = new Date().getTime();
      r.key = r.Id;
    }
    setSelectedRowTable(r);
    setActiveRow(r.key);
  };
  return (
    <>
      <FooterButtons />
      <Table
        rowClassName={(record, index) =>
          record.key === activeRow && "rowClassName_active"
        }
        locale={{ emptyText: "The document is empty" }}
        className="my_table"
        columns={columns}
        dataSource={dataSource}
        onRow={(r) => ({
          onClick: (e) => onClickRow(r),
        })}
      />
    </>
  );
};

export default memo(VisitTable);
