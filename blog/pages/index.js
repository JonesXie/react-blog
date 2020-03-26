import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, List } from "antd";
import { CalendarOutlined, FolderAddFilled, FireOutlined } from "@ant-design/icons";
import "../static/style/pages/index.css";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from "axios";
import Link from "next/link";
const Home = propsList => {
  const [list, setList] = useState(propsList.data);
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
                <Link href={{ pathname: "/details", query: { id: item.id } }}>
                  <a>
                    <div className="list-title">{item.title}</div>
                  </a>
                </Link>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined /> {item.addTime}
                  </span>
                  <span>
                    <FolderAddFilled /> {item.typeName}
                  </span>
                  <span>
                    <FireOutlined /> {item.view_count}人
                  </span>
                </div>
                <div className="list-context">{item.introduce}</div>
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

Home.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios.get("http://127.0.0.1:7001/default/index").then(res => {
      resolve(res.data);
    });
  });

  return await promise;
};

export default Home;
