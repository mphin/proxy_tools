/*************************************

项目名称：彩云天气-净化/解锁SVIP
下载地址：https://t.cn/A66d95hV
更新日期：2024-04-12
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|activity\?app_name|visitors|operation\/banners|operation\/homefeatures|config)|p\/v\d\/(vip_info|user_info|entries|privileges|trial_card\/info)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js
^https?:\/\/(api|wrapper)\.(cyapi|caiyunapp)\.(cn|com)\/v\d\/(satellite|nafp\/origin_images) url script-request-header https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyuntianqi.js

[mitm]
hostname = *.cyapi.cn, *.caiyunapp.com

*************************************/


const chxm1024 = {};
const chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const url = $request.url;
const adUrl = /(activity\?app_name|operation\/banners)/;
const tcUrl = /conditions/;
const vipUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/;
const userUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/;
const syUrl = /trial_card\/info/;
const qyUrl = /entries/;
const peUrl = /privileges/;
const topUrl = /operation\/homefeatures/;

if (typeof $response == "undefined") {
  chxm1024.headers = $request.headers;
  chxm1024.headers['device-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjYyNzQxMzVkYWM3MGMwMDE4YzFlNDBmIiwidXNlcl9pZCI6IjVmNWJmYzU3ZDJjNjg5MDAxNGUyNmJiOCIsInZlcnNpb24iOjIsImV4cCI6MTcyMTYyNDYyOSwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE3MTM4NDg2MjksInN2aXBfZXhwaXJlZF9hdCI6MTg1NjY4NTAzMSwicHJpbWFyeSI6dHJ1ZX0.bBT3vbfATa-LF1G34j4VjPTYtwcKHfG3oHIkFlmg1dY';
} else {
  switch (true) {
    case adUrl.test(url):
      chxm1023.status = "ok";
      chxm1023.activities = [{"items":[{}]}];
      chxm1023.data = [];
      break;
    case tcUrl.test(url):
      chxm1023.actions = [];
      chxm1023.popups = [];
      break;
    case vipUrl.test(url):
      chxm1023.vip = {  ...chxm1023.vip,
  "expires_time" : "4092599349",  "is_auto_renewal" : true  };
      chxm1023.svip =  {  ...chxm1023.svip,  "expires_time" : "4092599349",  "is_auto_renewal" : true  };
      chxm1023.show_upcoming_renewal = false;
      break;
    case userUrl.test(url):
      chxm1023.result = { ...chxm1023.result,  is_vip: true,  vip_expired_at: 4092599349,  svip_given: 1,  is_xy_vip: true,  xy_svip_expire: 4092599349,  wt: {  ...chxm1023.result.wt,  vip: {  ...chxm1023.result.wt.vip,  "expired_at" : 0,  "enabled" : true,  "svip_apple_expired_at" : 4092599349,  "is_auto_renewal" : true,  "svip_expired_at" : 4092599349    },    svip_given: 1,  },  is_phone_verified: true,  vip_take_effect: 1,  is_primary: true,  xy_vip_expire: 4092599349,  svip_expired_at: 4092599349,  svip_take_effect: 1,  vip_type: "s",  };
      break;
    case syUrl.test(url):
      chxm1023.receive_status = 0;
      chxm1023.vip_type = "svip";
      chxm1023.activated_at = 1712600671;
      chxm1023.vip_duration = "999";
      chxm1023.expired_at = 4092599349;
      chxm1023.has_valid_card = 0;
      break;
    case qyUrl.test(url):
      chxm1023["entries"] = [{  "url" : "https://t.me/chxm1023",  "id" : 1,  "name" : "叮当猫",  "type" : 1,  "pos" : 2  }];
      break;
    case peUrl.test(url):
      chxm1023["privileges"] = [{  "vip_type" : "svip",  "subscription_chat_quota" : 999  }];
      break;
    case topUrl.test(url):
      chxm1023["data"] = [{  "badge_type" : "",  "title" : "叮当猫",  "url" : "https://t.me/chxm1023",  "feature_type" : "",  "avatar" : "https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/ddm2.png"  },...chxm1023.data];
      break;
    }
  chxm1024.body = JSON.stringify(chxm1023);
}

$done(chxm1024);