import React, { useEffect, useState } from "react";

import { getProduct } from "../../../services/productService";

import { images } from "../../../assets/images/imageList";
import ModalCreateProduct from "./ModalCreateProduct";

export const Product = () => {
  const [render, setRender] = useState("");
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    getProduct().then((res) => {
      setListProduct(res.data);
    });
  }, [render]);

  const setRenderComponent = (data) => {
    setRender(data);
  };

  let element = listProduct.map((data, index) => {
    let imgUrl = images[data.src];
    return (
      <tr key={data.id}>
        <td>{index + 1}</td>

        <td>
          <img style={{ height: "50px" }} src={imgUrl} />
        </td>
        <td>{data.name_product}</td>
        <td>{data.price}</td>
        <td>
          <div className="template-demo">
            <button type="button" className="btn btn-warning btn-icon-text">
              Sửa
            </button>
            <button type="button" className="btn btn-success btn-icon-text">
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">Danh sách sản phẩm</h3>
        <ModalCreateProduct setRenderComponent={setRenderComponent} />
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Tôn kho</th>
              </tr>
            </thead>
            <tbody>{element}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
