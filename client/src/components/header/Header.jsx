import React from 'react';
import { HomeOutlined, UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import useAuth from "../../hooks/useAuth";
import './header.css'
import { Link, Links } from 'react-router';


const onClick = (e) => {
    //redirect
};
export default function Header() {
    const { isAuthenticated } = useAuth();

    const items = isAuthenticated ? [
        {
            key: 'all',
            icon: <HomeOutlined />,
            label: <Link to='/'>All Houses</Link>,
        },
        {
            key: 'my',
            icon: <UnorderedListOutlined />,
            label: <Link to='/houses/my'>My Houses</Link>,
        },
        {
            key: 'add',
            icon: <PlusOutlined />,
            label: <Link to='/houses/add'>Add a House</Link>,
        },
        {
            key: 'spacer', // Празен елемент за разстояние
            label: '',
            disabled: true,
            style: { flexGrow: 1, cursor: "default" } // Разширява се автоматично
        },
        {
            key: 'logout',
            label: <Link to='/logout'>Logout</Link>,
        },
    ] : [
        {
            key: 'all',
            icon: <HomeOutlined />,
            label: <Link to='/'>All Houses</Link>,
        },
        {
            key: 'spacer', // Празен елемент за разстояние
            label: '',
            disabled: true,
            style: { flexGrow: 1, cursor: "default" } // Разширява се автоматично
        },
        {
            key: 'login',
            label: <Link to='/login'>Login</Link>,
            style: { marginLeft: "auto" } // Премества Login вдясно
        },
        {
            key: 'register',
            label: <Link to='/register'>Register</Link>,
        },
    ];


    return (
        <Menu
            onClick={onClick}
            mode="horizontal"
            items={items}
            style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                display: "flex"
            }}
        />
    )
};