import React, { useState } from "react";
import "../static/css/AddArtitcle.css";
import { Row, Col, Input, Button, Select, DatePicker } from "antd";
import marked from "marked";

const { TextArea } = Input;
const { Option } = Select;

function AddArtitcle() {
  const [articleId, setArticleId] = useState(0); // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState(""); //文章标题
  const [articleContent, setArticleContent] = useState(""); //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState("预览内容"); //html内容
  const [introducemd, setIntroducemd] = useState(); //简介的markdown内容
  const [introducehtml, setIntroducehtml] = useState("等待编辑"); //简介的html内容
  const [showDate, setShowDate] = useState(); //发布日期
  const [updateDate, setUpdateDate] = useState(); //修改日志的日期
  const [typeInfo, setTypeInfo] = useState([]); // 文章类别信息
  const [selectedType, setSelectType] = useState(1); //选择的文章类别
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
  return (
    <div>
      <Row gutter={5}>
        <Col span={18}>
          <Row>
            <Col span={20}>
              <Input placeholder="文章标题" size="large" />
            </Col>
            <Col span={4}>
              &nbsp;
              <Select defaultValue="1" size="large">
                <Option value="1">react</Option>
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
              <Button size="large" type="primary">
                保存文章
              </Button>
            </Col>
            <br />
            <br />
            <Col span={24}>
              <TextArea rows={4} placeholder="文章简介" onChange={changeIntroduce} onPressEnter={changeIntroduce} />
              <br />
              <br />
              <div className="introduce-html" dangerouslySetInnerHTML={{ __html: introducehtml }}></div>
            </Col>

            <Col span={24}>
              <div className="date-select">
                <DatePicker placeholder="发布日期" size="large" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default AddArtitcle;
