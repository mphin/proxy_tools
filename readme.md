# 介绍
* 自用Subconverter订阅转换配置文件，修改自原作者[ACL4SSR](https://github.com/ACL4SSR/ACL4SSR)  
* 自用Loon配置文件和[插件仓库](https://github.com/mphin/proxy_tools/blob/main/loon/readme.md)
* ACL4SSR规则为基础合并碎片补充剔除重复
* Adblack广告规则来源于[anti-AD](https://github.com/privacy-protection-tools/anti-AD) 修改Actions每天自动构建
* 规则数量: 8354条
* 最近更新: 2025年11月08日16:07:17
## ⚙Clash订阅转换远程配置:
```
https://raw.githubusercontent.com/mphin/proxy_tools/main/config/ACL4SSR_Online_Full_MultiMode_777.ini
```
## 🎈Loon:
* 【插件仓库】[🔗链接地址](https://github.com/mphin/proxy_tools/blob/main/loon/readme.md)
* 【配置文件】
  -  [点击一键导入Loon](https://www.nsloon.com/openloon/import?sub=https://raw.githubusercontent.com/mphin/proxy_tools/main/config/Loon_config_mphin.conf)
  -  通过复制链接从URL下载:
    ```
    https://raw.githubusercontent.com/mphin/proxy_tools/main/config/Loon_config_mphin.conf
    ```
## ✍策略组内容及顺序
> 规则集非碎片化，建议添加所有规则集确保完整性，注意规则集优先级
- **🎯 全球直连**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/LocalAreaNetwork.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/LocalAreaNetwork.list)
- **🚫 广告拦截**：(⚠️低性能设备不建议添加)
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Adblack.txt](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Adblack.txt)
- **📢 谷歌服务**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Google.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Google.list)
- **🤖 AI｜奈飞**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/OpenaiNetflix.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/OpenaiNetflix.list)
- **🎥 国外媒体**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/ProxyMedia.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/ProxyMedia.list)
- **Ⓜ️ 微软服务**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Microsoft.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Microsoft.list)
- **🍎 苹果服务**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Apple.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Apple.list)
- **📺 国内媒体**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/ChinaMedia.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/ChinaMedia.list)
- **🎮 游戏平台**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/GamesPlatform.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/GamesPlatform.list)
- **📡 IP｜测速**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/IpinfoSpeedtest.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/IpinfoSpeedtest.list)
- **📲 电报消息**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Telegram.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/Telegram.list)
- **✈️ 国外常规**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/ProxyGFWlist.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/ProxyGFWlist.list)
- **🎯 全球直连**：
  - [https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/GlobalDirect.list](https://raw.githubusercontent.com/mphin/proxy_tools/main/rules/GlobalDirect.list)
- **🎯 全球直连**：GEOIP,CN
- **🐟 漏网之鱼**：FINAL
## ⚠️免责声明
- 本项目的部分内容收集于互联网，仅供资源共享和学习研究之用，不能保证其合法性、准确性、完整性和有效性。请用户根据具体情况自行判断其适用性。
- 任何间接使用脚本的用户，包括但不限于搭建VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播，本项目对于由此引起的任何隐私泄漏或其他后果概不负责。
- 请勿将本项目的任何内容用于商业或非法目的，否则后果自负。
- 若任何单位或个人认为本项目的脚本可能侵犯其权利，应及时通知并提供身份证明、所有权证明，我们将在收到认证文件后删除相关内容。
- 对于任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。
- 用户必须在下载后的24小时内从计算机或手机中完全删除以上内容。
- 任何以任何方式查看此项目的人或直接或间接使用本项目的使用者都应仔细阅读此声明。保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或本项目的规则，则视为您已接受此免责声明。
## 🫂致谢（如有遗漏请提醒补充）
- [@ACL4SSR/ACL4SSR](https://github.com/ACL4SSR/ACL4SSR)
- [@Loon0x00/LoonExampleConfig](https://github.com/Loon0x00/LoonExampleConfig)
- [@privacy-protection-tools/anti-AD](https://github.com/privacy-protection-tools/anti-AD)
## 📈项目 Star 数增长趋势
[![Stargazers over time](https://starchart.cc/mphin/proxy_tools.svg)](https://starchart.cc/mphin/proxy_tools)

**本仓库创建于2023年7月2日**
