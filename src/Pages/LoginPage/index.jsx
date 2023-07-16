import React from "react";
import { Button, Form, Input, message } from "antd";
import { https } from "../../Services/config";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/userStateSlice";
import { useNavigate } from "react-router-dom";
import { localStorageService } from "../../Services/localStorageService";
import Lottie from "lottie-react";
import bgAnimate from "./bg-Animate.json";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function LoginPage() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    //login
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log(res);
        message.success("Đăng nhập thành công!!!");
        dispatch(setLogin(res.data.content));
        localStorageService.setUser(res.data.content);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại!!!");
      });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-1/2 h-full">
        <Lottie animationData={bgAnimate} loop={true} />
      </div>
      <div className="w-1/2 right-3 h-full">
        <div className="container p-10">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className="bg-orange-500 hover:bg-white"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
