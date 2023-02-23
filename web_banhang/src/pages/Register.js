import { Button, Checkbox, Form, Input, Select } from "antd";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../assets/style/LoginRegister.scss";
import { getUser, postUser } from "../services/userService";

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

const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    getUser().then((res) => {
      setListUser(res.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = { email: email, password: password };
    const checkUser = listUser.find((e) => e.email == email);
    if (checkUser) {
      console.log("Email da ton tai");
    } else {
      postUser(info).then(() => {
        navigate("/login");
      });
    }
  };
  return (
    <div className="form_user">
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
        <p className="form_text">Register</p>

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
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
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
          <Button
            className="register_btn"
            type="primary"
            onClick={handleSubmit}
          >
            Register
          </Button>
          <p>
            {" "}
            Already have an account? Go to
            <NavLink to="/login">Login</NavLink>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Register;
