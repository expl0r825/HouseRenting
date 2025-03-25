import React from "react";
import { Form, Input, Button, Card } from "antd";

import { useRegister } from "../../api/authApi";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

import './auth.css'

export default function Register() {
  const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            console.log('Password missmatch');

            return;
        }

        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate('/');
    }

  return (
    <div className="auth-container">
      <Card title="Register" className="auth-card">
        <Form name="register" onFinish={registerHandler} layout="vertical">
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

          <Form.Item
            label="Confirm Password"
            name="confirm-password"
            rules={[{ required: true, message: "Please confirm your password!" }]}
          >
            <Input />
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
