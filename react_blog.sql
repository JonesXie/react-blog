# Host: localhost  (Version: 5.7.26)
# Date: 2020-04-01 23:43:06
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin_user"
#

DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Data for table "admin_user"
#

/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES (1,'xie','123456');
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;

#
# Structure for table "article"
#

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `article_content` text NOT NULL,
  `introduce` text NOT NULL,
  `addTime` bigint(13) NOT NULL DEFAULT '1585233598915',
  `view_count` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Data for table "article"
#

/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,1,'vue-title','# react 基础\n\n## 安装环境\n\n> 全局安装脚手架工具\n\n```javascript\nnpm install create-react-app -g\n```\n\n> 创建项目\n\n```javascript\ncreate-react-app projectName\n```\n\n## 基础知识\n\n### 组件\n\n> 1、组件必须首字母大写，如: `<App/>`  \n> 2、组件内必须是有一个包裹标签，使用`className`定义 classname  \n> 3、可以使用`Fragment`当做最外层\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  render() {\n    return (\n      <Fragment>\n        <input />\n        <button>点击</button>\n        <ul>\n          <li>加油</li>\n          <li>未来</li>\n        </ul>\n      </Fragment>\n    );\n  }\n}\nexport default Todo;\n```\n\n### 数据绑定\n\n> 1、继承 **Component**  中的 **props**  \n> 2、使用`{}`进行数据绑定， **setState**  进行改变数据， **bind**  绑定当前 **this**\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"xie\",\n      list: []\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button>添加</button>\n        <ul>\n          <li>加油</li>\n          <li>未来</li>\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n}\nexport default Todo;\n```\n\n### 循环数据\n\n> 1、在 JSX 中使用数组循环方法进行循环  \n> 2、必须添加 **key**  值\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"\",\n      list: [\"react\", \"vue\"]\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button onClick={this.addV.bind(this)}>添加</button>\n        <ul>\n          {this.state.list.map((v, i) => {\n            return <li key={i + v}>{v}</li>;\n          })}\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n  addV() {\n    this.setState({\n      list: [...this.state.list, this.state.inputVal],\n      inputVal: \"\"\n    });\n  }\n}\nexport default Todo;\n```\n\n### 数据增删\n\n> 1、不能直接操作 **this.state**  中的数据\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"\",\n      list: [\"react\", \"vue\"]\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button onClick={this.addV.bind(this)}>添加</button>\n        <ul>\n          {this.state.list.map((v, i) => {\n            return (\n              <li key={i + v} onClick={this.delItem.bind(this, i)}>\n                {v}\n              </li>\n            );\n          })}\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n  addV() {\n    this.setState({\n      list: [...this.state.list, this.state.inputVal],\n      inputVal: \"\"\n    });\n  }\n  delItem(i) {\n    // 千万不能直接操作 this.state中数据\n    let list = this.state.list;\n    list.splice(i, 1);\n    this.setState({\n      list: list\n    });\n  }\n}\nexport default Todo;\n```\n\n### JSX 注意事项\n\n```javascript\n\n1、使用  {/*我是注释*/}  注释\n2、class应该写成 className ，如：<h2 className=\'xie\'>nihao</h2>\n3、HTML 解析， dangerouslySetInnerHTML ，如：<li dangerouslySetInnerHTML={{__html:item}}></li>\n4、label 标签中使用 for，如：<label htmlFor=\'xie\'></label>\n\n```','vue-introduce',1585233598,666),(2,2,'react-title','# react 基础\n\n## 安装环境\n\n> 全局安装脚手架工具\n\n```javascript\nnpm install create-react-app -g\n```\n\n> 创建项目\n\n```javascript\ncreate-react-app projectName\n```\n\n## 基础知识\n\n### 组件\n\n> 1、组件必须首字母大写，如: `<App/>`  \n> 2、组件内必须是有一个包裹标签，使用`className`定义 classname  \n> 3、可以使用`Fragment`当做最外层\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  render() {\n    return (\n      <Fragment>\n        <input />\n        <button>点击</button>\n        <ul>\n          <li>加油</li>\n          <li>未来</li>\n        </ul>\n      </Fragment>\n    );\n  }\n}\nexport default Todo;\n```\n\n### 数据绑定\n\n> 1、继承 **Component**  中的 **props**  \n> 2、使用`{}`进行数据绑定， **setState**  进行改变数据， **bind**  绑定当前 **this**\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"xie\",\n      list: []\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button>添加</button>\n        <ul>\n          <li>加油</li>\n          <li>未来</li>\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n}\nexport default Todo;\n```\n\n### 循环数据\n\n> 1、在 JSX 中使用数组循环方法进行循环  \n> 2、必须添加 **key**  值\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"\",\n      list: [\"react\", \"vue\"]\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button onClick={this.addV.bind(this)}>添加</button>\n        <ul>\n          {this.state.list.map((v, i) => {\n            return <li key={i + v}>{v}</li>;\n          })}\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n  addV() {\n    this.setState({\n      list: [...this.state.list, this.state.inputVal],\n      inputVal: \"\"\n    });\n  }\n}\nexport default Todo;\n```\n\n### 数据增删\n\n> 1、不能直接操作 **this.state**  中的数据\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"\",\n      list: [\"react\", \"vue\"]\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button onClick={this.addV.bind(this)}>添加</button>\n        <ul>\n          {this.state.list.map((v, i) => {\n            return (\n              <li key={i + v} onClick={this.delItem.bind(this, i)}>\n                {v}\n              </li>\n            );\n          })}\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n  addV() {\n    this.setState({\n      list: [...this.state.list, this.state.inputVal],\n      inputVal: \"\"\n    });\n  }\n  delItem(i) {\n    // 千万不能直接操作 this.state中数据\n    let list = this.state.list;\n    list.splice(i, 1);\n    this.setState({\n      list: list\n    });\n  }\n}\nexport default Todo;\n```\n\n### JSX 注意事项\n\n```javascript\n\n1、使用  {/*我是注释*/}  注释\n2、class应该写成 className ，如：<h2 className=\'xie\'>nihao</h2>\n3、HTML 解析， dangerouslySetInnerHTML ，如：<li dangerouslySetInnerHTML={{__html:item}}></li>\n4、label 标签中使用 for，如：<label htmlFor=\'xie\'></label>\n\n```','react-introduce',1585233598,888),(3,3,'angular-title','# react 基础\n\n## 安装环境\n\n> 全局安装脚手架工具\n\n```javascript\nnpm install create-react-app -g\n```\n\n> 创建项目\n\n```javascript\ncreate-react-app projectName\n```\n\n## 基础知识\n\n### 组件\n\n> 1、组件必须首字母大写，如: `<App/>`  \n> 2、组件内必须是有一个包裹标签，使用`className`定义 classname  \n> 3、可以使用`Fragment`当做最外层\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  render() {\n    return (\n      <Fragment>\n        <input />\n        <button>点击</button>\n        <ul>\n          <li>加油</li>\n          <li>未来</li>\n        </ul>\n      </Fragment>\n    );\n  }\n}\nexport default Todo;\n```\n\n### 数据绑定\n\n> 1、继承 **Component**  中的 **props**  \n> 2、使用`{}`进行数据绑定， **setState**  进行改变数据， **bind**  绑定当前 **this**\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"xie\",\n      list: []\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button>添加</button>\n        <ul>\n          <li>加油</li>\n          <li>未来</li>\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n}\nexport default Todo;\n```\n\n### 循环数据\n\n> 1、在 JSX 中使用数组循环方法进行循环  \n> 2、必须添加 **key**  值\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"\",\n      list: [\"react\", \"vue\"]\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button onClick={this.addV.bind(this)}>添加</button>\n        <ul>\n          {this.state.list.map((v, i) => {\n            return <li key={i + v}>{v}</li>;\n          })}\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n  addV() {\n    this.setState({\n      list: [...this.state.list, this.state.inputVal],\n      inputVal: \"\"\n    });\n  }\n}\nexport default Todo;\n```\n\n### 数据增删\n\n> 1、不能直接操作 **this.state**  中的数据\n\n```javascript\nimport React, { Component, Fragment } from \"react\";\n\nclass Todo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      inputVal: \"\",\n      list: [\"react\", \"vue\"]\n    };\n  }\n  render() {\n    return (\n      <Fragment>\n        <input value={this.state.inputVal} onChange={this.change.bind(this)} />\n        <button onClick={this.addV.bind(this)}>添加</button>\n        <ul>\n          {this.state.list.map((v, i) => {\n            return (\n              <li key={i + v} onClick={this.delItem.bind(this, i)}>\n                {v}\n              </li>\n            );\n          })}\n        </ul>\n      </Fragment>\n    );\n  }\n  change(e) {\n    this.setState({\n      inputVal: e.target.value\n    });\n  }\n  addV() {\n    this.setState({\n      list: [...this.state.list, this.state.inputVal],\n      inputVal: \"\"\n    });\n  }\n  delItem(i) {\n    // 千万不能直接操作 this.state中数据\n    let list = this.state.list;\n    list.splice(i, 1);\n    this.setState({\n      list: list\n    });\n  }\n}\nexport default Todo;\n```\n\n### JSX 注意事项\n\n```javascript\n\n1、使用  {/*我是注释*/}  注释\n2、class应该写成 className ，如：<h2 className=\'xie\'>nihao</h2>\n3、HTML 解析， dangerouslySetInnerHTML ，如：<li dangerouslySetInnerHTML={{__html:item}}></li>\n4、label 标签中使用 for，如：<label htmlFor=\'xie\'></label>\n\n```','angular-introduce',1585233598,999),(4,1,'测试添加文章','## 测试添加文章','测试添加文章简介',1585584000,62),(5,1,'添加文章','添加文章','添加文章',1585584000,67);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;

#
# Structure for table "type"
#

DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) DEFAULT NULL,
  `orderNum` int(11) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Data for table "type"
#

/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'react',1,NULL),(2,'vue',2,NULL),(3,'angular',3,NULL);
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
