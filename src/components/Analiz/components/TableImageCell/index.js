import React, { useState } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Image } from "antd";

function TableImageCell(props) {
  const { value, row, setIsTableChange } = props;
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setVisible(true);
          setIsTableChange((prev) => !prev);
        }}
        style={{ marginRight: "10px", color: "blue", cursor: "pointer" }}
      >
        <EyeOutlined />
      </div>
      <div>{value}</div>
        <Image
          width={200}
          style={{
            display: "none",
          }}
          src={row.analyzesContentUrl}
          preview={{
            visible,
            scaleStep: 0.5,
            src: row.analyzesContentUrl,
            onVisibleChange: (value) => {
              console.log("onVisibleChange value", value);
              setVisible(value);
            },
          }}
        />
    </div>
  );
}

export default TableImageCell;
