"use strict";

// Nodemailer是一个简单易用的Node.js邮件发送组件
const email = require("./email");
// 易用、简洁且高效的http库
const axios = require("axios");
let sendemail = "2696675997@qq.com";
let messagesucess = "打卡成功";
let messageerror = "打卡失败";
const token =
  "bearer eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJzdHVkZW50IiwidXNlcl9pZCI6IjE0Njk1MTQ5NTY3NjI2OTM2MzQiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwNSIsInVzZXJfbmFtZSI6IjIwMzA1MTE0OCIsIm5pY2tfbmFtZSI6IuW8oOWbveW6hiIsInRva2VuX3R5cGUiOiJhY2Nlc3NfdG9rZW4iLCJkZXB0X2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsImFjY291bnQiOiIyMDMwNTExNDgiLCJjbGllbnRfaWQiOiJhcHAiLCJleHAiOjE2NjAyMDUzOTIsIm5iZiI6MTY2MDIwMTc5Mn0.Ex6Ni7hxz4HEgDfsqIr6MRiislhtIPu-i0FHKtf-6UA";
const dk = "https://microserver4.jvtc.jx.cn/api/blade-signin/signinlog/submit";
const dkdata = {
  jzqk: "3",
  schsjcrq: "0",
  hsbg: "null",
  dqqdw: "0",
  drzt: "0",
  xyhs: "0",
  stzk: "0",
  stzkxq: "",
  sfmj: "0",
  sfzzxn: "0",
  sfmjxq: "",
  sfscgfxdq: "0",
  sfscgfxdqxq: "",
  gfxljs: "0",
  gfxljsxq: "",
  wzsfbd: "0",
  bdfs: "0",
  cc: "",
  ccpz: "null",
  dbrq: "",
  bdqswz: "",
  bdjswz: "",
  location: "江西省九江市濂溪区前进东路308号",
  address: "江西省九江市濂溪区前进东路308号",
  xgh: "203051148",
};
const http = axios.create({
  timeout: 30000,
});
http.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.data = JSON.stringify(config.data);
  config.headers["Blade-Auth"] = token;
  return config;
});
const daka = () => {
  http.post(dk, dkdata).then((res) => {
    if (res.data.code == 401) {
      email.emailSignUp(sendemail, res, messageerror);
    } else if (res.data.code == 200) {
      email.emailSignUp(sendemail, res, messagesucess);
    }
    return res.data;
  });
};
exports.main_handler = () => {
  daka();
};
