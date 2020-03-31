"use strict";

const Controller = require("egg").Controller;

class adminController extends Controller {
  async index() {
    this.ctx.body = "xie";
  }
  async checkLogin() {
    const { userName, password } = this.ctx.request.body;
    const sql = "SELECT userName FROM admin_user WHERE userName= '" + userName + "' AND password = '" + password + "'";
    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      const openId = new Date().getTime();
      this.ctx.session.openId = { openId };
      this.ctx.body = { data: "登录成功", openId };
    } else {
      this.ctx.body = { data: "登录失败" };
    }
  }
  async getTypeInfo() {
    const result = await this.app.mysql.select("type");
    this.ctx.body = { data: result };
  }
  async addArticle() {
    const tmpData = this.ctx.request.body;
    const result = await this.app.mysql.insert("article", tmpData);
    const isSuccess = result.affectedRows === 1;
    const insertId = result.insertId;
    this.ctx.body = {
      isSuccess,
      insertId
    };
  }
  async updateArticle() {
    const tmpData = this.ctx.request.body;
    const result = await this.app.mysql.update("article", tmpData);
    const isSuccess = result.affectedRows === 1;
    const insertId = result.insertId;
    this.ctx.body = {
      isSuccess,
      insertId
    };
  }
  async getArticleList() {
    const sql =
      "SELECT article.id as id," +
      "article.title as title," +
      "article.introduce as introduce," +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
      "type.typeName as typeName " +
      "FROM article LEFT JOIN type ON article.type_id = type.Id " +
      "ORDER BY article.id DESC ";
    const resList = await this.app.mysql.query(sql);
    this.ctx.body = { list: resList };
  }
}

module.exports = adminController;
