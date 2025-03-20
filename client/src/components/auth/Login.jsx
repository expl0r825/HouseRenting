import React from "react";
import { Form, Input, Button, Card } from "antd";

import './auth.css'

export default function Login() {
    const onFinish = (values) => {
        console.log("Success:", values);
        // Добави логика за автентикация
    };

    return (
        <div className="auth-container">
            <Card title="Login" className="auth-card">
                <Form name="login" onFinish={onFinish} layout="vertical">
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please enter your email!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter your password!" }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};