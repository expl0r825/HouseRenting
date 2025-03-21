import React from 'react';
import { HomeOutlined, UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import './header.css'
import { Link, Links } from 'react-router';

const items = [
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
        key: 'login',
        label: <Link to='/login'>Login</Link>,
        style: { marginLeft: "auto" } // Премества Login вдясно
    },
    {
        key: 'register',
        label: <Link to='/register'>Register</Link>,
    },
];


const onClick = (e) => {
    //redirect
};
export default function Header() {

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