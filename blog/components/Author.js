import { Avatar, Divider } from "antd";
import { UserOutlined, GithubFilled, QqCircleFilled, WechatFilled } from "@ant-design/icons";
import "../static/style/components/Author.css";
const Author = () => (
  <div className="author-div comm-box">
    <div>
      {" "}
      <Avatar size={100} src="../static/img/cat.jpg" icon={<UserOutlined />} />
    </div>
    <div className="author-introduction">
      IT农名工，努力搬砖，争取尽早迎娶白富美，当上CEO，走向人生巅峰！
      <Divider>社交账号</Divider>
      <Avatar size={28} icon={<GithubFilled />} className="account" />
      <Avatar size={28} icon={<QqCircleFilled />} className="account" />
      <Avatar size={28} icon={<WechatFilled />} className="account" />
    </div>
  </div>
);
export default Author;
