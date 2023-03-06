import { Form, Input } from 'antd';
import React, { memo, useMemo } from 'react';

const InputComponent = ({dataIndex, title, inputRef, save}) => {
    const required = useMemo(() => {
        if(dataIndex === 'cureTabUsing') return false
        else return true
    },[dataIndex])
    return (
        <Form.Item
            style={{
                margin: 0,
            }}
            name={dataIndex}
            rules={[
                {
                    required: required,
                    message: `Please enter the valid ${title.toLowerCase()}...`,
                },
            ]}
        >
            <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
    );
};

export default memo(InputComponent);