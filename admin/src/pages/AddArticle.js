import React, { useState, useEffect } from "react";
import "../static/css/AddArtitcle.css";
import { Row, Col, Input, Button, Select, DatePicker, message } from "antd";
import marked from "marked";
import axios from "axios";
import servicePath from "../config/apiUrl";
// import {Rro} from "react-router-dom"
const { TextArea } = Input;
const { Option } = Select;

function AddArtitcle(props) {
  const [articleId, setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState(""); //文章标题
  const [articleContent, setArticleContent] = useState(""); //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState("预览内容"); //html内容
  const [introducemd, setIntroducemd] = useState(); //简介的markdown内容
  const [introducehtml, setIntroducehtml] = useState("等待编辑"); //简介的html内容
  const [showDate, setShowDate] = useState(); //发布日期
  const [typeInfo, setTypeInfo] = useState([]); // 文章类别信息
  const [selectedType, setSelectedType] = useState("选择类别"); //选择的文章类别
  useEffect(() => {
    getArticleList();
    let tmpId = props.match.params.id;
    if (tmpId) {
      setArticleId(tmpId);
      getArticleById(tmpId);
    }
  }, []);
  const getArticleList = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: servicePath.getTypeInfo
    }).then(res => {
      if (res.data.data === "你尚未登录") {
        message.error(res.data.data);
        localStorage.removeItem("openId");
        props.history.push("/login");
      } else {
        setTypeInfo(res.data.data);
      }
    });
  };
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  });
  const getArticleById = id => {
    axios(servicePath.getArticleById + id, {
      withCredentials: true,
      header: { "Access-Control-Allow-Origin": "*" }
    }).then(res => {
      //let articleInfo= res.data.data[0]
      setArticleTitle(res.data.data[0].title);
      setArticleContent(res.data.data[0].article_content);
      let html = marked(res.data.data[0].article_content);
      setMarkdownContent(html);
      setIntroducemd(res.data.data[0].introduce);
      let tmpInt = marked(res.data.data[0].introduce);
      setIntroducehtml(tmpInt);
      setShowDate(res.data.data[0].addTime);
      setSelectedType(res.data.data[0].typeId);
    });
  };
  const changeContent = e => {
    setArticleContent(e.target.value);
    let html = marked(e.target.value);
    setMarkdownContent(html);
    if (html) setMarkdownContent(html);
    else setMarkdownContent("预览内容");
  };
  const changeIntroduce = e => {
    setIntroducemd(e.target.value);
    let html = marked(e.target.value);
    if (html) setIntroducehtml(html);
    else setIntroducehtml("等待编辑");
  };
  const saveArticle = () => {
    if (!articleTitle) {
      message.error("文章标题不能为空");
      return false;
    } else if (!articleContent) {
      message.error("文章内容不能为空");
      return false;
    } else if (!introducemd) {
      message.error("文章简介不能为空");
      return false;
    } else if (!showDate) {
      message.error("发布日期不能为空");
      return false;
    } else if (!selectedType || selectedType === "选择类别") {
      message.error("文章类别不能为空");
      return false;
    }

    let tmpData = {
      type_id: selectedType,
      title: articleTitle,
      article_content: articleContent,
      introduce: introducemd,
      addTime: new Date(showDate.replace("-", "/")).getTime() / 1000,
      view_count: Math.ceil(Math.random() * 100)
    };
    if (articleId === 0) {
      axios({
        method: "POST",
        withCredentials: true,
        url: servicePath.addArticle,
        data: tmpData
      }).then(res => {
        setArticleId(res.data.insertId);
        if (res.data.isSuccess) {
          message.success("文章添加成功");
        } else {
          message.error("文章添加失败");
        }
      });
    } else {
      tmpData.id = articleId;
      axios({
        method: "POST",
        withCredentials: true,
        url: servicePath.updateArticle,
        data: tmpData
      }).then(res => {
        if (res.data.isSuccess) {
          message.success("文章保存成功");
        } else {
          message.error("文章保存失败");
        }
      });
    }
  };
  return (
    <div>
      <Row gutter={5}>
        <Col span={18}>
          <Row>
            <Col span={20}>
              <Input
                placeholder="文章标题"
                size="large"
                value={articleTitle}
                onChange={e => {
                  setArticleTitle(e.target.value);
                }}
              />
            </Col>
            <Col span={4}>
              &nbsp;
              <Select
                defaultValue={selectedType}
                size="large"
                style={{ width: 120 }}
                onChange={value => {
                  setSelectedType(value);
                }}
              >
                {typeInfo.map((item, index) => {
                  return (
                    <Option key={index} value={item.Id}>
                      {item.typeName}
                    </Option>
                  );
                })}
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                className="markdown-content"
                rows={35}
                placeholder="文章内容"
                onChange={changeContent}
                onPressEnter={changeContent}
                value={articleContent}
              />
            </Col>
            <Col span={12}>
              <div className="show-html" dangerouslySetInnerHTML={{ __html: markdownContent }}></div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col span={24}>
              <Button size="large">暂存文章</Button>
              &nbsp; &nbsp;
              <Button size="large" type="primary" onClick={saveArticle}>
                保存文章
              </Button>
            </Col>
            <br />
            <br />
            <Col span={24}>
              <TextArea
                rows={4}
                value={introducemd}
                placeholder="文章简介"
                onChange={changeIntroduce}
                onPressEnter={changeIntroduce}
              />
              <br />
              <br />
              <div className="introduce-html" dangerouslySetInnerHTML={{ __html: introducehtml }}></div>
            </Col>

            <Col span={24}>
              <div className="date-select">
                <DatePicker
                  placeholder="发布日期"
                  size="large"
                  onChange={(data, dataString) => {
                    setShowDate(dataString);
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default AddArtitcle;
