import { Form, Select, Spin } from 'antd';
import React from 'react';

const { Option } = Select;

const CureTabType = ({dataIndex,title,inputRef, save}) => {
    return (
        <Form.Item
            style={{
                margin: 0,
            }}
            name={dataIndex}
            rules={[
                {
                    required: true,
                    message: `Please enter the valid ${title.toLowerCase()}...`,
                },
            ]}
        >
            <Select
                allowClear
                ref={inputRef}
                notFoundContent={<Spin size="small" />}
                lazyLoad
                className="customSelect detail-select stepSelectCustomer"
                onBlur={save}
            >
                            <Option value="Tabletka">Tablet</Option>
                            <Option value="Ampula">Ampoule</Option>
                            <Option value="Kapli">Drops</Option>
            </Select>
        </Form.Item>
    );
};

export default CureTabType;