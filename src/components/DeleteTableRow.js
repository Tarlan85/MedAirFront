import { Popconfirm, Typography } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { message } from "antd";

function DeleteTableRow({ dataSource, setDataSource, row, delFunct, setTablesDataToFormValues }) {
    const onClick = (e) => {
        setOwnPropertyId();
        const newData = dataSource.filter((item) => item.Id !== row.Id);
        const delEl = dataSource.find((item) => item.Id === row.Id);
        if (delFunct) {
            deleteFunct({ delEl, newData });
        } else {
            if(setTablesDataToFormValues){
                setTablesDataToFormValues(newData)
            }
            setDataSource(newData);
        }
    };
    const deleteFunct = async ({ delEl, newData }) => {
        message.loading({ content: "Yüklənir...", key: "delete" });
        let res = await delFunct(delEl);
        if (res) {
            message.success({
                content: "Silindi.",
                key: "delete",
                duration: 2,
            });
            setDataSource(newData);
        }
    };
    const setOwnPropertyId = () => {
        if (row.Id) {
            return;
        } else if (row.id) {
            row.Id = row.id;
            dataSource.forEach((i) => (i.Id = i.id));
        }
    };
    return (
        <Typography.Link>
            <div onClick={(e) => e.stopPropagation()}>
                <Popconfirm
                    title="Are you sure you want to delete this item?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={onClick}
                >
                    <div style={{ color: "red" }}>
                        <DeleteOutlined />
                    </div>
                </Popconfirm>
            </div>
        </Typography.Link>
    );
}

export default DeleteTableRow;
