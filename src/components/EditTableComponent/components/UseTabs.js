import { Form, Select, Spin } from 'antd';
import React from 'react';
import { useGlobalContext } from '../../../context/context';

const { Option } = Select;

const UseTabs = ({dataIndex,title,inputRef, save}) => {
    const { managersList } =
        useGlobalContext();
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
                {managersList?.map((c, index) => {
                    return (
                        <Option
                            key={c.cureTabId}
                            value={JSON.stringify(c)}
                        >
                            {c.cureTabName}
                        </Option>
                    );
                })}
            </Select>
        </Form.Item>
    );
};

export default UseTabs;