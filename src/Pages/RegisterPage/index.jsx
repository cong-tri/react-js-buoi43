import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import Lottie from "lottie-react";
import bgAnimate from "../LoginPage/bg-Animate.json";
import { https } from "../../Services/config";
import { useNavigate } from "react-router-dom";
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
function RegisterPage() {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("dữ liệu gửi đi: ", values);
    //     "taiKhoan": "string",
    // "matKhau": "string",
    // "email": "string",
    // "soDt": "string",
    // "maNhom": "string",
    // "hoTen": "string"
    https
      .post("/api/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        console.log(res);

        if (res.status !== 200) throw new Error(`status: ${res}`);

        message.success("Đăng ký thành công!!!");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng ký thất bại!!!");
      });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/2 h-full">
        <Lottie animationData={bgAnimate} loop={true} />
      </div>
      <div className="w-1/2 justify-center items-center">
        <div className="container p-10">
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
            <Form.Item
              name="hoTen"
              label="Họ Tên"
              rules={[
                {
                  required: true,
                  message: "Please input your Name",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="soDt"
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number",
                },
              ]}
            >
              <Input />
            </Form.Item>

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
              <Input />
            </Form.Item>

            <Form.Item
              name="matKhau"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["matKhau"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("matKhau") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="taiKhoan"
              label="Username"
              tooltip="What do you want others to call you?"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                className="bg-orange-500 hover:bg-white"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
