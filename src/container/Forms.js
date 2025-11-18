import React from "react";
import { Button, Table, Form, Input, Select, Row, Col } from "antd";
import Swal from "sweetalert2";

const { Option } = Select;

const data = [
  { key: 1, name: "Mythili", age: 30, bloodgroup: "b+" },
  { key: 2, name: "Alice", age: 25, bloodgroup: "o+" },
];

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
  { title: "blood Group", dataIndex: "bloodgroup" },
];

export default function App() {
  const onFinish = (values) => {
    console.log("Form values:", values);

    Swal.fire({
      title: "Success!",
      text: "Form Submitted Successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <Form
        onFinish={onFinish}
        layout="vertical"
        style={{ width: "80%", margin: "30px auto" }}
      >
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[{ required: true }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[{ required: true }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
              <Input placeholder="Email" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
              <Input placeholder="Phone Number" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Role" name="role" rules={[{ required: true }]}>
              <Select placeholder="Select Role">
                <Option value="1">Admin</Option>
                <Option value="manager">Manager</Option>
                <Option value="user">User</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="City" name="city">
              <Input placeholder="City" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Pincode" name="pincode">
              <Input placeholder="Pincode" />
            </Form.Item>
          </Col>
        </Row>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      <div style={{ width: "80%", margin: "20px auto" }}>
        <Table dataSource={data} columns={columns} />
      </div>
    </>
  );
}
