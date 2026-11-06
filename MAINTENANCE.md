# 主页维护说明

## 常规更新

日常维护主要编辑 `assets/site-data.js`。文案使用 `{en: '...', zh: '...'}` 维护双语。新增论文，复制 `publications.items` 中任意一项并填入题目、完整作者、年份、期刊、简介、图片、链接。新论文放在数组最前面。

论文主图文件放入 `assets/`，修改 `image`（缩略图）和 `imageFull`（点击查看的高清图片）。如无代码链接，直接删除对应 `links` 对象，不要保留空链接。

头像文件：`assets/profile-photo.webp` 与 `assets/profile-photo-small.webp`。首次访问显示英文，访问者选择中文后会记住偏好。

## 部署

将修改后的文件放回仓库同路径，在 `main` 分支提交即可触发 GitHub Pages。

V4.2 的重点是让论文位于首屏之后。日常不要将长摘要、实验结果表或开发说明加入主页。
