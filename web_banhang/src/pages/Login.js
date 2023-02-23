import { Button, Checkbox, Form, Input, Select } from "antd";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getUser } from "../services/userService";

import "../assets/style/LoginRegister.scss";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    getUser()
      .then((res) => {
        const result = res.data.find((e) => {
          return e.email === email;
        });
        if (!result) {
          setErr("Tài khoản không tồn tại");
        } else {
          if (result.password !== password) {
            setErr("Mật khẩu không chính xác");
          } else {
            localStorage.setItem("user", JSON.stringify(email));
            navigate("/");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form_user">
      <p>{err}</p>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <p className="form_text">Log In</p>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <NavLink to="/agreement">agreement</NavLink>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button className="login_btn" type="primary" onClick={handleSubmit}>
            Login
          </Button>
          <p>
            {" "}
            Do not have an account?
            <NavLink to="/register">Register</NavLink>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
