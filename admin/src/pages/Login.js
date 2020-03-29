import React, { useState } from "react";
import { Card, Input, Button, Spin } from "antd";
import "antd/dist/antd.css";
import "../static/css/Login.css";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogining, setIsLogining] = useState(false);
  const checkLogin = () => {
    setIsLogining(true);
    setTimeout(() => {
      setIsLogining(false);
      console.log(userName, password);
    }, 1000);
  };
  return (
    <div className="login-div">
      <Spin tip="加载中..." spinning={isLogining}>
        <Card title="Jonesxie Blog" style={{ width: "400px" }} bordered={true}>
          <Input
            id="userName"
            size="large"
            onChange={e => {
              setUserName(e.target.value);
            }}
            placeholder="请输入用户名"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <Input.Password
            id="password"
            size="large"
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="请输入密码"
            prefix={<KeyOutlined />}
          />
          <br />
          <br />
          <Button type="primary" size="large" block onClick={checkLogin}>
            登录
          </Button>
        </Card>
      </Spin>
    </div>
  );
};
export default Login;
