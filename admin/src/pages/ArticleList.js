import React, { useState, useEffect } from "react";
import "../static/css/ArticleList.css";
import { List, Row, Col, Modal, message, Button } from "antd";
import axios from "axios";
import servicePath from "../config/apiUrl";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

function ArticleList(props) {
  const [list, setList] = useState([]);
  const getList = () => {
    axios({
      method: "GET",
      url: servicePath.getArticleList,
      withCredentials: true
    }).then(res => {
      if (res.data.data === "你尚未登录") {
        message.error(res.data.data);
        localStorage.removeItem("openId");
        props.history.push("/login");
      } else {
        setList(res.data.list);
      }
    });
  };
  const delArticle = id => {
    confirm({
      title: "删除此文章?",
      icon: <ExclamationCircleOutlined />,
      content: "此操作不可逆，谨慎操作!",
      onOk() {
        axios(servicePath.delArticle + id, { withCredentials: true }).then(res => {
          getList();
          message.success("文章删除成功");
        });
      },
      onCancel() {}
    });
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <List
        header={
          <Row className="list-div">
            <Col span={8}>
              <b>标题</b>
            </Col>
            <Col span={3}>
              <b>类别</b>
            </Col>
            <Col span={3}>
              <b>发布时间</b>
            </Col>
            <Col span={3}>
              <b>集数</b>
            </Col>
            <Col span={3}>
              <b>浏览量</b>
            </Col>

            <Col span={4}>
              <b>操作</b>
            </Col>
          </Row>
        }
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Row className="list-div">
              <Col span={8}>{item.title}</Col>
              <Col span={3}>{item.typeName}</Col>
              <Col span={3}>{item.addTime}</Col>
              <Col span={3}>
                共<span>{item.part_count}</span>集
              </Col>
              <Col span={3}>{item.view_count}</Col>

              <Col span={4}>
                <Button
                  type="primary"
                  onClick={() => {
                    props.history.push("/index/add/" + item.id);
                  }}
                >
                  修改
                </Button>
                &nbsp;
                <Button
                  onClick={() => {
                    delArticle(item.id);
                  }}
                >
                  删除{" "}
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ArticleList;
