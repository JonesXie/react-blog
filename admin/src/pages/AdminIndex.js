import React, { useState } from "react";
import "../static/css/AdminIndex.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined, PieChartOutlined, FileOutlined } from "@ant-design/icons";
import { Route } from "react-router-dom";
import AddArticle from "./AddArticle.js";
import ArticleList from "./ArticleList.js";
const { Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

function AdminIndex(props) {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const handleClickArticle = e => {
    if (e.key === "addArticle") {
      props.history.push("/index/add");
    } else {
      props.history.push("/index");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["articleList"]} mode="inline">
          <Menu.Item key="articleList" onClick={handleClickArticle}>
            <PieChartOutlined />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="addArticle" onClick={handleClickArticle}>
            <DesktopOutlined />
            <span>添加文章</span>
          </Menu.Item>
          {/* <SubMenu
            key="sub1"
            onClick={handleClickArticle}
            title={
              <span>
                <UserOutlined />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>
          </SubMenu> */}
          <Menu.Item key="9">
            <FileOutlined />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Route path="/index" exact component={ArticleList} />
            <Route path="/index/add" exact component={AddArticle} />
            <Route path="/index/add/:id" exact component={AddArticle} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Jonesxie Blog</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminIndex;
