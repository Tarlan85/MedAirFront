import { Form, Input } from 'antd';
import React, { memo } from 'react';

const InputComponent = ({dataIndex, title, inputRef, save}) => {
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
            <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
    );
};

export default memo(InputComponent);