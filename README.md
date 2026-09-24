# Very Media 官网

默认英文，支持中文切换的响应式官网。自然滚动页面，包含品牌介绍、五项服务、五个完整案例、全球网络、合作方式、邮件与电话联系入口。

## 本地预览

运行 `npm run dev`，打开 http://localhost:4173 。无需安装第三方运行依赖。需要 Node.js 18 或以上。

## 发布

这是静态网站。将 `index.html`、`style.css`、`app.js` 和 `favicon.svg` 放在同一目录，可发布至 Vercel、Netlify 或普通静态托管。无需构建步骤。源码仓库：https://github.com/yeastlu/Very-Media 。推送源码与线上部署状态需分别确认。

## 内容维护

- 首页固定中英文文案：`index.html` 的 `data-en` / `data-zh`。
- 服务、案例详情、合作方式：`app.js`。
- 颜色、版式、动效、手机适配：`style.css`。
- 联系信息取自提供的 Keynote：hesheng@verymediash.cn / +86 15600082970。
- 页面字体使用 Google Fonts，无法访问时自动采用本地后备字体。


## 检查

`npm run check` 检查脚本语法。浏览器检查覆盖五个案例弹窗、服务展开、双语及语言记忆、手机导航、320 / 390 / 768 / 1024 / 1440 像素宽度无横向溢出，以及浏览器错误。支持键盘操作和系统减少动态效果设置。
