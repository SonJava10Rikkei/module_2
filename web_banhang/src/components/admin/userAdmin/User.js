import React, { useEffect, useState } from "react";

import { deleteUser, getUser } from "../../../services/userService";
import ModalEditUser from "./ModalEditUser";

export const User = () => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    getListUser();
  }, []);
  function getListUser() {
    getUser().then((res) => {
      setListUsers(res.data);
    });
  }
  let element = listUsers.map((data, index) => {
    return (
      <tr key={data.id}>
        <td>{index + 1}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.address}</td>
        <td>{data.phone}</td>
        <td>
          <div className="template-demo">
            <ModalEditUser
              user={data}
              id={data.id}
              className="btn btn-danger btn-icon-text"
            />
            <button
              type="button"
              className="btn btn-success btn-icon-text"
              onClick={() => handleDelete(data.id)}
            >
              Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  });
  const handleDelete = (index) => {
    deleteUser(index).then(() => {
      getListUser();
    });
  };
  return (
    <div>
      <div className="card-body">
        <h3 className="card-title">Danh sách người dùng</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>{element}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
