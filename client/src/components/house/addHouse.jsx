import React from "react";
import { Form, Input, Button, Card } from "antd";

import './addHouse.css'

export default function AddHouse({ onAddHouse }) {
  const onFinish = (values) => {
    const newHouse = {
      _id: crypto.randomUUID(), // Генерира уникално ID
      name: values.name,
      address: values.address,
      imageUrl: values.imageUrl,
      price: values.price,
    };

    onAddHouse(newHouse);
  };

  return (
    <div className="add-house-container">
      <Card title="Add a New House" className="add-house-card">
        <Form name="add-house" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="House Name"
            name="name"
            rules={[{ required: true, message: "Please enter the house name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter the address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="imageUrl"
            rules={[{ required: true, message: "Please enter an image URL!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Price ($)"
            name="price"
            rules={[{ required: true, message: "Please enter the price!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add House
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
