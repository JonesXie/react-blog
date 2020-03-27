import React, { useState, useEffect } from "react";
import { Row, Col, Menu } from "antd";
import { HomeFilled, YoutubeFilled, SmileFilled } from "@ant-design/icons";
import "../static/style/components/Header.css";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import requestUrl from "../config/apiUrl";

const Header = () => {
  const [navArray, setNavArray] = useState([]);
  useEffect(() => {
    const fentchData = async () => {
      const data = await axios(requestUrl.navbar).then(res => res.data.data);
      setNavArray(data);
    };
    fentchData();
  }, []);

  const turnPage = e => {
    if (e.key == "0") {
      Router.push("/index");
    } else {
      Router.push({ pathname: "/list", query: { id: e.key } });
    }
  };

  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="header-logo">Jonesxie</span>
          <span className="header-dec">这是一个博客~~~///(^v^)\\\~~~</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={turnPage}>
            <Menu.Item key="0">
              <HomeFilled />
              首页
            </Menu.Item>
            {navArray.map(item => {
              return (
                <Menu.Item key={item.Id}>
                  <SmileFilled />
                  {item.typeName}
                </Menu.Item>
              );
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
