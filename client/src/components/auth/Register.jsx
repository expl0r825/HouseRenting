import React from "react";
import { Form, Input, Button, Card } from "antd";

import './auth.css'

export default function Register() {
  const onFinish = (values) => {
    console.log("Success:", values);
    // Добави логика за регистрация
  };

  return (
    <div className="auth-container">
      <Card title="Register" className="auth-card">
        <Form name="register" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input />
          </Form.Item>

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
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
