import React from "react"
import { Row, Col, Menu } from "antd"
import { HomeFilled, YoutubeFilled, SmileFilled } from '@ant-design/icons';
import "../static/style/components/Header.css"
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className="header-logo">Jonesxie</span>
        <span className="header-dec">这是一个博客~~~///(^v^)\\\~~~</span>
      </Col>
      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <HomeFilled />
            首页
          </Menu.Item>
          <Menu.Item key="video">
            <YoutubeFilled />
            视频
          </Menu.Item>
          <Menu.Item key="life">
            <SmileFilled />
            生活
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
)
export default Header