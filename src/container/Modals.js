import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import Swal from "sweetalert2";

export default function App() {
    const [open, setOpen] = useState(false);

    const onFinish = (values) => {
        console.log(values);

        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Form submitted successfully",
        });

        setOpen(false);
    };

    return (
        <div style={{ padding: 40 }}>
            <Button type="primary" onClick={() => setOpen(true)}>
                Create
            </Button>

            <Modal
                title="User Form"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                width={800}
            >

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="Enter name" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </Modal>
        </div>
    );
}
