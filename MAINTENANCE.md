# 主页长期维护指南

本版本的核心原则是：**内容与界面代码分离**。日常更新通常只编辑 `assets/site-data.js`，不需要修改复杂 HTML。

---

## 1. 修改中文或英文文案

打开：

```text
assets/site-data.js
```

所有双语字段统一采用：

```javascript
{
  zh: '中文内容',
  en: 'English content'
}
```

例如修改首页介绍：

```javascript
summary: {
  zh: '新的中文介绍。',
  en: 'New English introduction.'
}
```

建议每次同时维护 `zh` 和 `en`，避免两个版本信息不同步。

---

## 2. 新增论文

在 `assets/site-data.js` 中找到：

```javascript
publications: [
  // 论文条目
]
```

复制现有论文对象，粘贴到数组末尾，并修改：

```javascript
{
  id: 'unique-paper-id',
  featured: false,
  year: '2027',
  venue: 'AAAI Conference on Artificial Intelligence',
  venueShort: 'AAAI',
  type: { zh: '会议论文', en: 'Conference Paper' },
  title: 'Your New Paper Title',
  authors: [
    { name: 'Yanghui Song', self: true },
    { name: 'Coauthor Name' }
  ],
  meta: ['Accepted'],
  abstract: {
    zh: '中文简介。',
    en: 'English summary.'
  },
  thumbnail: 'assets/paper-new.webp',
  image: 'assets/paper-new.png',
  imageAlt: {
    zh: '论文方法图中文说明。',
    en: 'English description of the method figure.'
  },
  links: [
    { label: 'Paper', url: 'https://...', primary: true },
    { label: 'arXiv', url: 'https://...' },
    { label: 'Code', url: 'https://...' }
  ],
  bibtex: `@INPROCEEDINGS{...}`
}
```

### 图片建议

- 原始主图：`PNG`，用于放大查看
- 首页缩略图：`WebP`，用于提高加载速度
- 推荐宽度：1600–2200 px
- 文件名使用英文小写与连字符，不使用中文和空格

例如：

```text
assets/paper-new.png
assets/paper-new.webp
```

---

## 3. 更换个人照片

当前首页使用：

```text
assets/profile-photo.webp
assets/profile-photo-small.webp
```

最简单的方式是使用相同文件名覆盖这两个文件。

推荐：

```text
profile-photo.webp        1120 × 1400 左右
profile-photo-small.webp   560 × 700 左右
比例                       4:5
```

覆盖后如浏览器仍显示旧图，可在 `index.html` 中临时将：

```html
assets/profile-photo.webp
```

改为：

```html
assets/profile-photo.webp?v=2
```

用于刷新缓存。

---

## 4. 新增或修改项目

在 `assets/site-data.js` 中找到：

```javascript
projects: [
  // 项目条目
]
```

项目模板：

```javascript
{
  repo: 'Repository-Name',
  title: 'Project Title',
  status: { zh: '研究代码', en: 'Research Code' },
  description: {
    zh: '中文项目简介。',
    en: 'English project description.'
  },
  tags: ['Python', 'Remote Sensing'],
  url: 'https://github.com/YanghuiSong/Repository-Name',
  featured: false
}
```

`repo` 用于读取 GitHub Star。仓库不存在、私有或 API 暂时不可用时，Star 数会自动隐藏，不会影响项目卡片显示。

---

## 5. 修改邮箱、GitHub 或 Scholar

只需要修改 `assets/site-data.js` 顶部的：

```javascript
profile: {
  email: 'your-email@example.com',
  github: 'https://github.com/YourName',
  scholar: 'https://scholar.google.com/...'
}
```

页面顶部、联系区域和页脚会同步更新。

---

## 6. 中文界面维护规则

为了保持中文页面的阅读质量，建议：

1. 中文标题尽量控制在 14–26 个汉字。
2. 首页简介控制在 70–120 个汉字。
3. 研究方向说明控制在 60–100 个汉字。
4. 不在中文句子中堆叠过多英文缩写。
5. 模型名称、会议名、方法名保留英文原名。
6. 技术标签保持简短，如 `SAM 3`、`OVSS`、`TTA`。
7. 中文和英文表达不必逐字直译，但事实必须一致。

---

## 7. 发布更新

GitHub 网页端修改后：

```text
Commit changes
```

或者本地提交：

```bash
git add .
git commit -m "Update homepage content"
git push origin main
```

随后查看：

```text
Actions → Deploy static homepage
```

出现绿色勾号后，主页会自动更新。

---

## 8. 不建议随意修改的文件

以下文件已经承担页面结构和交互，普通内容更新无需修改：

```text
index.html
assets/styles.css
assets/app.js
.github/workflows/deploy-pages.yml
```

确需调整布局时，建议先创建分支或备份当前版本。
