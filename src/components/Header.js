import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const HeaderComponent = (props) => {
    const { setIsLogin } = useGlobalContext();
    const headerNavigateItems = [
        { title: "Calendar", navigate: "/home" },
        { title: "Search", navigate: "/search" },
        { title: "Profile", navigate: "/profile" },
        { title: "Managers", navigate: "/managers" },
    ];

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            {headerNavigateItems.map((item, index) => {
                const { title, navigate } = item;
                return (
                    <Menu.Item key={index + 1}>
                        <Link to={navigate}>{title}</Link>
                    </Menu.Item>
                );
            })}
            <Menu.Item ket={'LogOut'} onClick={() => setIsLogin(false)}>Log Out</Menu.Item>
        </Menu>
    );
};

export default HeaderComponent;
