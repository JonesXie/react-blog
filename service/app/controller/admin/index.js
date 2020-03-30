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
}

module.exports = adminController;
