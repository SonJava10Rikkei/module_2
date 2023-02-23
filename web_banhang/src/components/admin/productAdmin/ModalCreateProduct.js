import { Modal, Button, Form, Input } from "antd";
import { useState } from "react";
import UploadImage from "./UploadImage";

import { postProduct } from "../../../services/productService";

const ModalCreateProduct = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState({
    name_product: "",
    price: "",
    src: "",
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    delete product[""];
    postProduct(product);
    props.setRenderComponent(product);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeValue = (e) => {
    let name = e.target.id;
    let value = e.target.value;
    setProduct({ ...product, [name]: value });
  };

  const getImgSrc = (src) => {
    setProduct({ ...product, src: src });
  };
  //   console.log("anh chuan", product);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Thêm Mới
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
        >
          <Form.Item name="src" label="Ảnh">
            <UploadImage getImgSrc={getImgSrc} />
          </Form.Item>
          <Form.Item name="name_product" label="Tên Sp">
            <Input />
          </Form.Item>

          <Form.Item name="price" label="Giá">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalCreateProduct;
