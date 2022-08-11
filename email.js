// 引用发送邮件插件
const nodeMailer = require("nodemailer");

// 创建传输方式
const transporter = nodeMailer.createTransport({
  service: "qq",
  auth: {
    user: "2696675997@qq.com",
    pass: "wukdqwxwgmcfdfig", // 这个需要你的授权码！！！
  },
});

// 注册发送邮件给用户
exports.emailSignUp = function (email, res, content) {
  // 发送信息的内容
  let options = {
    from: "2696675997@qq.com", // 这里是你开启SMTP服务的QQ邮箱号
    to: email, // 这个是前端注册页面输入的邮箱号
    subject: "打卡提醒",
    html: `<span>${content}</span>`,
  };

  // 发送邮件
  transporter.sendMail(options, function (err, msg) {
    if (err) {
      res.send(err);
      // console.log(err)
    } else {
      res.send("邮箱发送成功!");
      // console.log('邮箱发送成功')
    }
  });
};
