"use client";
import React from "react";
import { Button, Form, Input } from "antd";

export default function page() {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        maxWidth: "60%",
        margin: "60px auto",
      }}
    >
      <Form form={form} labelCol={{ span: 6 }} labelAlign="left">
        <Form.Item label="Book Title">
          <Input placeholder="Enter book title" />
        </Form.Item>
        <Form.Item label="Book Description">
          <Input placeholder="Enter book description" />
        </Form.Item>
        <Form.Item label="Book Author">
          <Input placeholder="Enter book author" />
        </Form.Item>
        <Form.Item label="Book Rental Value">
          <Input placeholder="Enter book rental value" />
        </Form.Item>
        <Form.Item label="Book Image">
          <Input placeholder="Upload book image" type="file" disabled />
        </Form.Item>
        <Form.Item style={{ textAlign: "end" }}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
