# 个人学术主页维护指南

这版主页的目标是：**日常维护只修改 `assets/site-data.js`**。除非要改变页面布局，否则不用碰 HTML、CSS 和 JavaScript 逻辑。

## 1. 默认显示英文

配置位于：

```javascript
settings: {
  defaultLanguage: 'en'
}
```

首次访问默认英文。访客如果手动切换为中文，浏览器会记住其选择。

若你自己以前访问过旧版本并保存了中文，可以在浏览器控制台执行：

```javascript
localStorage.removeItem('site-language');
location.reload();
```

## 2. 修改个人简介 / 履历

打开：

```text
assets/site-data.js
```

找到：

```javascript
about: {
  paragraphs: [ ... ]
}
```

每段都使用：

```javascript
{
  zh: '中文内容',
  en: 'English content'
}
```

建议中文和英文事实保持完全一致，但无需逐字翻译。

## 3. 修改教育经历

找到：

```javascript
education: {
  items: [ ... ]
}
```

每段经历模板：

```javascript
{
  period: { zh: '2026—至今', en: '2026 — Present' },
  degree: { zh: '电子信息 · 研究生阶段', en: 'Electronic Information · Graduate Study' },
  school: { zh: '学校/学院', en: 'School / University' },
  note: { zh: '培养计划或备注', en: 'Program or note' }
}
```

## 4. 新增论文

找到：

```javascript
publications: {
  items: [ ... ]
}
```

复制现有论文对象，在数组后追加：

```javascript
{
  id: 'paper-short-id',
  featured: false,
  year: '2027',
  venue: 'Full Venue Name',
  venueShort: 'AAAI',
  type: { zh: '会议论文', en: 'Conference Paper' },
  title: 'Paper Title',
  authors: [
    { name: 'Yanghui Song', self: true },
    { name: 'Coauthor Name' }
  ],
  meta: ['Accepted'],
  abstract: {
    zh: '适合主页阅读的中文简介，不必粘贴完整摘要。',
    en: 'A concise homepage summary rather than the entire abstract.'
  },
  thumbnail: 'assets/paper-new.webp',
  image: 'assets/paper-new.png',
  imageAlt: {
    zh: '论文主图说明',
    en: 'Description of the paper figure'
  },
  links: [
    { label: 'Paper', url: 'https://...', primary: true },
    { label: 'arXiv', url: 'https://...' },
    { label: 'Code', url: 'https://...' }
  ],
  bibtex: `@INPROCEEDINGS{...}`
}
```

论文图片建议：

```text
PNG   原始高清图，用于点击放大
WebP  网页缩略图，用于快速加载
```

建议文件名：

```text
assets/paper-method-name.png
assets/paper-method-name.webp
```

## 5. 更换头像

直接覆盖：

```text
assets/profile-photo.webp
assets/profile-photo-small.webp
```

推荐比例：`4:5`。

推荐尺寸：

```text
profile-photo.webp        1120 × 1400 左右
profile-photo-small.webp   560 × 700 左右
```

如果 GitHub Pages 更新后浏览器仍显示旧头像，可清除缓存，或临时给图片路径添加版本参数。

## 6. 修改研究方向

找到：

```javascript
research: {
  items: [ ... ]
}
```

建议长期维持 **3 个主方向**，不要持续增加小方向。个人主页比简历更需要突出一条统一的研究主线。

## 7. 新增 / 删除项目

找到：

```javascript
projects: {
  items: [ ... ]
}
```

模板：

```javascript
{
  repo: 'Repository-Name',
  title: 'Project Name',
  label: { zh: '研究代码', en: 'Research Code' },
  description: {
    zh: '简洁中文简介。',
    en: 'Concise English description.'
  },
  tags: ['Remote Sensing', 'SAM 3'],
  url: 'https://github.com/YanghuiSong/Repository-Name'
}
```

主页建议只保留 3–6 个与你当前研究方向最相关的仓库。

## 8. 修改邮箱 / GitHub / Scholar

在文件顶部修改：

```javascript
profile: {
  email: '...',
  github: '...',
  scholar: '...',
  repositories: '...'
}
```

全站会同步更新。

## 9. 中文界面的维护建议

- 首页中文介绍控制在约 80–140 字。
- About 每段约 90–180 字。
- 研究方向标题尽量短，说明控制在 60–110 字。
- 专有名词如 SAM 3、OVSS、TTA、IEEE GRSL 保留英文。
- 不要把所有英文术语都加中文括号解释，会破坏阅读节奏。
- 中英文保持事实一致，但中文应自然表达，不要直译式句法。

## 10. 发布

GitHub 网页修改后点击：

```text
Commit changes
```

或本地：

```bash
git add .
git commit -m "Update homepage"
git push origin main
```

然后查看：

```text
Actions → Deploy static homepage
```

出现绿色勾号即完成发布。

## 11. 哪些文件平时不要改

```text
index.html
assets/styles.css
assets/app.js
.github/workflows/deploy-pages.yml
```

这些文件分别承担页面骨架、视觉系统、交互逻辑和自动部署。普通内容更新不需要修改它们。
