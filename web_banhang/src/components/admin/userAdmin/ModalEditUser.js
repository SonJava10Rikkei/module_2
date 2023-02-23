import { Modal, Button, Form, Input } from "antd";
import { useState } from "react";

import { updateUser } from "../../../services/userService";

const ModalEditUser = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    updateUser(props.id, user);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeValue = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sửa
      </Button>
      <Modal
        title="Sửa thông tin:"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onChange={handleChangeValue}
          initialValues={props.user}
        >
          <Form.Item name="name" label="Tên">
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Địa Chỉ">
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="SDT">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalEditUser;
