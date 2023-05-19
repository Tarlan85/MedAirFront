import { Form, Select, Spin } from 'antd';
import React from 'react';

const { Option } = Select;

const CureTabType = ({ dataIndex, title, inputRef, save }) => {

    const onBlur = () => {
        let inputType = 'select'
        save(inputType)
    }

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
                onBlur={onBlur}
            >
                <Option value="Tablet">Tablet</Option>
                <Option value="Ampoule">Ampoule</Option>
                <Option value="Drops">Drops</Option>
            </Select>
        </Form.Item>
    );
};

export default CureTabType;