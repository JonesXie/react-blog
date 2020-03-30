import React, { useState } from "react";
import { Card, Input, Button, Spin, message } from "antd";
import "antd/dist/antd.css";
import "../static/css/Login.css";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import axios from "axios";
import servicePath from "../config/apiUrl";
const Login = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const checkLogin = () => {
    setisLoading(true);
    let dataProps = {
      userName: userName,
      password: password
    };
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
    if (!userName) {
      message.error("用户名不能为空");
      setisLoading(false);
      return false;
    } else if (!password) {
      message.error("密码不能为空");
      setisLoading(false);
      return false;
    } else {
      axios({
        method: "POST",
        url: servicePath.checkLogin,
        data: dataProps,
        withCredentials: true
      }).then(res => {
        setisLoading(false);
        if (res.data.data == "登录成功") {
          localStorage.setItem("openId", res.data.openId);
          props.history.push("/index");
        } else {
          message.error("用户名密码错误");
        }
      });
    }
  };
  return (
    <div className="login-div">
      <Spin tip="加载中..." spinning={isLoading}>
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
