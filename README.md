# Fisher-fishing.github.io

樊慕清的个人简历网站，使用 Node.js、React、React Hooks 与 Vite 构建，并通过 GitHub Pages 发布。

## 技术栈

- Node.js
- React
- React Hooks
- Vite
- JavaScript
- CSS

## 项目结构

```text
.
├─ .github/workflows/deploy.yml  # GitHub Pages 自动构建与发布
├─ public/
│  ├─ .nojekyll                 # 跳过 Jekyll 处理
│  └─ assets/
│     ├─ portrait.jpg           # 个人照片
│     ├─ 樊慕清-前端开发工程师.docx  # 前端岗位 Word 简历
│     └─ 樊慕清-AI应用开发工程师.docx # AI 岗位 Word 简历
├─ src/
│  ├─ components/               # 页面区块组件
│  ├─ data/resume.js            # 简历内容数据
│  ├─ hooks/                    # 页面滚动与导航 Hooks
│  ├─ App.jsx                   # 页面组合入口
│  ├─ main.jsx                  # React 挂载入口
│  └─ styles.css                # 全局及响应式样式
├─ index.html                   # Vite HTML 入口
├─ package.json                 # Node.js 项目配置
└─ vite.config.js               # Vite 构建配置
```

## 本地运行

需要 Node.js 22.12 或更高版本。

```bash
npm install
npm run dev
```

终端会显示本地地址，通常是 `http://localhost:5173/`。修改源码后页面会自动刷新。

## 代码检查与生产构建

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` 会生成 `dist/` 目录；`npm run preview` 用于在本地检查生产构建结果。

## GitHub Pages 发布

仓库设置中选择 **Settings → Pages → Build and deployment → Source → GitHub Actions**。

合并并推送到 `main` 分支后，`.github/workflows/deploy.yml` 会安装依赖、构建网站并发布 `dist/`。发布地址：

https://fisher-fishing.github.io/
