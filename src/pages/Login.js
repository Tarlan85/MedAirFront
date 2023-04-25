import { Form, Input, Button, message } from "antd";
import sendRequest from "../api/sendRequest";
import React from "react";
import { useGlobalContext } from "../context/context";

const Login = () => {
    const { setIsLogin, setToken } = useGlobalContext();

    const onFinish = async (values) => {
        try{
            let result = await sendRequest('login',values,'post')
            if(result.data.token){
                const { token } = result.data
                localStorage.setItem('token',token)
                setToken(token)
                setIsLogin(true);
            }else{
                message.warning({
                    content: 'Login or password not correct',
                    key: "warning_message",
                    duration: 4,
                });
            }
        }catch(err){
            console.error(err)
        }
    };

    return (
        <div className="login">
            <div  style={{display:'flex', justifyContent:'center', alignItems:'center', position:'absolute', top:'0', marginLeft:'70px'}}>
                <img style={{width:'300px'}} alt='medAir' src={'/images/MedAir.jpg'} />
            </div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 13,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Username"
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="userPass"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Sign in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;
