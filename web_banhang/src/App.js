import React from "react";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/admin/productAdmin/Product";
import { User } from "./components/admin/userAdmin/User";

import { Layout } from "./components/layout/Layout";
import { LayoutAdmin } from "./pages/Admin/LayoutAdmin";

import { Home } from "./pages/Home";
import Login from "./pages/Login";
import MyCart from "./pages/MyCart";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mycart" element={<MyCart />} />
        </Route>
        <Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="/admin/user" element={<User />} />
            <Route path="/admin/product" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
