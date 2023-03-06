import React, { useEffect, useMemo, useState } from "react";
import { Badge, Row } from "antd";
import { Calendar } from "antd";
import { Table } from "antd";
import sendRequest from "../../api/sendRequest";
import moment from "moment";
import HeaderHomePage from "./HeaderHomePage";
import SelectStatus from "./components/SelectStatus";
import { useGlobalContext } from "../../context/context";
import DeleteTableRow from "../../components/DeleteTableRow";
import useUpdatePage from "./hooks/useUpdatePage";
import useOnRowTable from "../Search/hooks/useOnRowTable";

const getListData = (value, dataSource) => {
  let listData = [];
  dataSource.forEach((i) => {
    let date = i.visitDate.slice(0, 10);
    if (date === moment(value).format("YYYY-MM-DD")) {
      listData.push({
        type: i.status === "approved" ? "success" : "warning",
        content: i.patientName,
        id: i.id,
      });
    }
  });
  return listData;
};

const Home = () => {
  const { isAddVisit } = useGlobalContext();

  const [dataSource, setDataSource] = useState([]);

  const getDataTable = async (data) => {
    let sendObj = {};
    if (data) {
      sendObj.moment = data;
    }
    let res = await sendRequest("visits/" + data);
    setDataSource(res.data);
  };

  const { isChangeDataTable, updatePage } = useUpdatePage({ getDataTable });

  useEffect(() => {
    if (!isAddVisit) {
      getDataTable(moment().format("YYYY-MM-DD 00:00:00"));
    }
  }, [isAddVisit]);

  function onPanelChange(data, mode) {}

  function onChange(val) {
    const data = moment(val._d).format("YYYY-MM-DD 00:00:00");
    getDataTable(data);
  }
  const delFunct = async (delItem) => {
    let Id = delItem.Id;
    let res = await sendRequest("visits/" + Id, {}, "delete");
    updatePage();
    return res;
  };

  const columns = [
    {
      title: "Patient Number",
      dataIndex: "patientId",
    },
    {
      title: "Time",
      dataIndex: "visitDate",
    },
    {
      title: "Name",
      dataIndex: "patientName",
    },
    {
      title: "Surname",
      dataIndex: "patientSurName",
    },
    {
      title: "Patronymic",
      dataIndex: "patientPatronymic",
    },
    {
      title: "Age",
      dataIndex: "birthDate",
      render: (value) => {
        if (!value) return '';
        else {
          return moment().diff(value, "years");
        }
      },
    },
    {
      title: "Mobile number",
      dataIndex: "phoneNumber",
    },

    {
      title: "Reason",
      dataIndex: "visitReason",
    },
    {
      title: "Address",
      dataIndex: "placeName",
    },
    {
      title: "Recomendation",
      dataIndex: "recommendationPerson",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value, row, index) => {
        return (
          <div
            className="xxxx"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <SelectStatus value={value} row={row} updatePage={updatePage} />
          </div>
        );
      },
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
            setDataSource={setDataSource}
            delFunct={delFunct}
          />
        );
      },
    },
  ];

  const dateCellRender = useMemo(
    (value) => {
      if (dataSource[0]) {
        return (value) => {
          const listData = getListData(value, dataSource);
          if (listData[0]) {
            return <div style={{ borderTop: "1px solid black" }}></div>;
          }
        };
      }
    },
    [dataSource, isAddVisit, isChangeDataTable]
  );
  const { onRowTable } = useOnRowTable();

 const getRowClassName = (record) => {
  console.log('record',record.visitReason)
  //operation
  if(record.visitReason === 'operation') return 'table_row_pink_color'
 }

  return (
    <>
      <HeaderHomePage />
      <Row>
        <Calendar
          dateCellRender={dateCellRender}
          className="CallCalendar"
          fullscreen={false}
          onPanelChange={onPanelChange}
          onChange={onChange}
        />
      </Row>
      <Row>
        <Table
          bordered={true}
          className="Table table_calendar"
          pagination={false}
          columns={columns}
          dataSource={dataSource}
          rowClassName={getRowClassName}
          onRow={(record, index) => ({
            onClick: (e) => onRowTable(record, index),
          })}
        />
      </Row>
    </>
  );
};

export default Home;
