# Yanghui Song Academic Homepage

面向 **遥感图像智能解译** 的中英双语个人学术主页，适合直接部署到 GitHub Pages。

当前版本采用纯 HTML、CSS 与 JavaScript，不依赖 npm、Node.js 构建或第三方在线字体。内容由一个配置文件集中驱动，便于长期维护论文、项目和中文界面。

## 当前页面内容

- 个人研究简介与真实照片
- 遥感图像智能解译的三条研究主线
- IEEE GRSL 2026 代表性论文
- 论文主图放大查看、论文链接和 BibTeX 复制
- 开源项目列表与可选 GitHub Star 动态读取
- 中文 / English 切换
- 浅色 / 深色主题
- 桌面端、平板与移动端响应式布局
- SEO、Open Graph、结构化数据、站点地图
- GitHub Actions 自动部署

## 最重要的维护文件

绝大多数内容更新只需要修改：

```text
assets/site-data.js
```

其中集中管理：

```text
profile              个人信息和链接
hero                 首页首屏文字
about                个人简介
researchSection      研究方向
publications          论文数据
projects              项目数据
contact              联系区域
```

页面结构和功能分别位于：

```text
index.html            页面骨架
assets/styles.css     视觉样式与响应式布局
assets/app.js         双语渲染、主题、论文弹窗等交互
```

详细更新说明见 [MAINTENANCE.md](MAINTENANCE.md)。

## 本地预览

在仓库根目录运行：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 部署到 GitHub Pages

仓库名称建议为：

```text
YanghuiSong.github.io
```

上传全部文件后，在 GitHub 仓库中进入：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

之后每次向 `main` 分支提交修改，`.github/workflows/deploy-pages.yml` 都会自动发布新版本。

## 目录结构

```text
.
├── .github/workflows/deploy-pages.yml
├── assets/
│   ├── app.js
│   ├── site-data.js
│   ├── styles.css
│   ├── profile-photo.webp
│   ├── profile-photo-small.webp
│   ├── paper-proc-sam3.png
│   ├── paper-proc-sam3.webp
│   ├── favicon.svg
│   └── og-cover.svg
├── index.html
├── MAINTENANCE.md
├── robots.txt
├── sitemap.xml
└── .nojekyll
```

## 技术特点

- 零构建步骤，降低维护成本
- 系统字体优先，兼顾中国大陆网络环境
- 中文和英文作为同等内容源维护
- 原生 `<dialog>`、Clipboard API 和 Intersection Observer
- 无框架锁定，代码易读且便于迁移
- 尊重 `prefers-reduced-motion`
- 适配打印与基础无障碍访问

## License

站点代码采用 MIT License。论文、图片、作者信息与项目内容的权利归各自所有者所有。
