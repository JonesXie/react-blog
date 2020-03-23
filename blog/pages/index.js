import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, List } from "antd";
import { CalendarOutlined, FolderAddFilled, FireOutlined } from "@ant-design/icons";
import "../static/style/pages/index.css";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
const Home = () => {
  const [list, setList] = useState([
    {
      title: "我是博客的title",
      context:
        "我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context"
    },
    {
      title: "我是博客的title",
      context:
        "我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context"
    },
    {
      title: "我是博客的title",
      context:
        "我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context"
    },
    {
      title: "我是博客的title",
      context:
        "我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context"
    },
    {
      title: "我是博客的title",
      context:
        "我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context"
    },
    {
      title: "我是博客的title",
      context:
        "我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context,我是博客的context"
    }
  ]);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<h2>博客内容</h2>}
            itemLayout="vertical"
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined /> 2020-03-20
                  </span>
                  <span>
                    <FolderAddFilled /> 视频教程
                  </span>
                  <span>
                    <FireOutlined /> 6666人
                  </span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Home;
