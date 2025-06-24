/*
寻简 
解锁会员 支持无水印下载 无水印保存 
部分功能未测试
[rewrite_local]
https:\/\/api\.mindyushu\.com\/user\/(get-apple-member|me|storage-info) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/xunjian.js


[mitm] 

hostname = api.mindyushu.com
*/
let obj = JSON.parse($response.body);
const url = $request.url;

if (/https:\/\/api\.mindyushu\.com\/user\/(get-apple-member|me|storage-info)/.test(url)) {
  if (RegExp.$1 === 'me') {
    obj.totalExperience = 9888888;
    obj.motto = "我他妈是永久VIP";
    obj.collectCount = 2;
    obj.isMember = true;
    obj.level = 1;
    obj.memberExpire = 9999999999;
    obj.memberType = 1;
  } else if (RegExp.$1 === 'get-apple-member') {
    obj.isMember = true;
    obj.memberExpire = 1;
  } else if (RegExp.$1 === 'storage-info') {
    obj.total = "99999999.00MB";
    obj.totalBytes = 9999999999999; 
    obj.showAlert = false;//空间不足弹窗？
  }
}

$done({
  body: JSON.stringify(obj)
});
