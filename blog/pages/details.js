import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import { Row, Col, Breadcrumb } from "antd";
import { CalendarOutlined, FolderAddFilled, FireOutlined } from "@ant-design/icons";
import "../static/style/pages/details.css";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from "axios";
import hljs from "highlight.js";
import marked from "marked";
import "highlight.js/styles/monokai-sublime.css";
import Tocify from "../components/tocify.tsx";
import requestUrl from "../config/apiUrl";

const Details = props => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });
  const tocify = new Tocify();
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  let html = marked(props.article_content);
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
            <div className="detailed-content" dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            <div className="toc-list">{tocify && tocify.render()}</div>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
};
Details.getInitialProps = async content => {
  let id = content.query.id;
  const promise = new Promise(resolve => {
    axios.get(requestUrl.details + id).then(res => {
      console.log(res.data);
      resolve(res.data.data[0]);
    });
  });

  return await promise;
};

export default Details;
