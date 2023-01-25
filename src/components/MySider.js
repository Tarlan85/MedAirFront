import {
    UserOutlined,
    CalendarOutlined,
    FileSearchOutlined,
    ProfileOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const { Sider } = Layout;

const MySider = () => {
    const { setToken } = useGlobalContext();
    const headerNavigateItems = [
        {
            title: "Calendar",
            navigate: "/home",
            icon: React.createElement(CalendarOutlined),
        },
        {
            title: "Search",
            navigate: "/search",
            icon: React.createElement(FileSearchOutlined),
        },
        {
            title: "Profile",
            navigate: "/profile",
            icon: React.createElement(ProfileOutlined),
        },
        {
            title: "Managers",
            navigate: "/managers",
            icon: React.createElement(UserOutlined),
        },
    ];

    const logOut = () => {
        localStorage.removeItem('token')
        localStorage.clear()
        setToken(null)
        window.location.reload();
    }
    return (
        <Sider
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
                {headerNavigateItems.map((item, index) => {
                    const { title, navigate, icon, children } = item;
                    return (
                        <Menu.Item
                            children={children}
                            icon={icon}
                            key={String(index + 1)}
                        >
                            <Link to={navigate}>{title}</Link>
                        </Menu.Item>
                    );
                })}
                <Menu.Item
                    icon={<LogoutOutlined />}
                    ket={"LogOut"}
                    onClick={logOut}
                >
                    Log Out
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default MySider;
