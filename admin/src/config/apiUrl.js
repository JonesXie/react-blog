let baseUrl = "http://127.0.0.1:7001";
const service = {
  checkLogin: baseUrl + "/admin/checkLogin",
  getTypeInfo: baseUrl + "/admin/getTypeInfo",
  addArticle: baseUrl + "/admin/addArticle",
  updateArticle: baseUrl + "/admin/updateArticle",
  getArticleList: baseUrl + "/admin/getArticleList"
};

export default service;
