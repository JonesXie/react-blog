import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, Breadcrumb } from "antd";
import { CalendarOutlined, FolderAddFilled, FireOutlined } from "@ant-design/icons";
import "../static/style/pages/details.css";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import MarkDown from "react-markdown";
import axios from "axios";
const Details = () => {
  let markdown =
    "# P01:课程介绍和环境搭建\n" +
    "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
    "**这是加粗的文字**\n\n" +
    "*这是倾斜的文字*`\n\n" +
    "***这是斜体加粗的文字***\n\n" +
    "~~这是加删除线的文字~~ \n\n" +
    "`console.log(111)` \n\n" +
    "# p02:来个Hello World 初始Vue3.0\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n" +
    "***\n\n\n" +
    "# p03:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p04:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "#5 p05:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p06:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "# p07:Vue3.0基础知识讲解\n" +
    "> aaaaaaaaa\n" +
    ">> bbbbbbbbb\n" +
    ">>> cccccccccc\n\n" +
    "``` var a=11; ```";
  return (
    <>
      <Head>
        <title>Details</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>文章详情</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">React实战</div>
            <div className="list-icon center">
              <span>
                <CalendarOutlined /> 2020-03-23
              </span>
              <span>
                <FolderAddFilled /> 博客网站
              </span>
              <span>
                <FireOutlined /> 6666人
              </span>
            </div>
            <div className="detailed-content">
              <MarkDown source={markdown} escapeHtml={false} />
            </div>
          </div>
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
Details.getInitialProps = async content => {
  let id = content.query.id;
  const promise = new Promise(resolve => {
    axios.get("http://127.0.0.1:7001/default/details/" + id).then(res => {
      resolve(res.data);
    });
  });

  return await promise;
};

export default Details;
