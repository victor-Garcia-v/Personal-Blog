# tianyulai

个人博客，基于 [Docusaurus v3](https://docusaurus.io) 构建。

- 线上地址：https://nevergpdzy.com
- RSS：https://nevergpdzy.com/blog/rss.xml
- 描述：记录 HPC 学习笔记 & 旅行见闻 & 兴趣爱好 & 生活感悟

## 本地开发

```bash
npm install
npm start        # 本地开发服务器 http://localhost:3000
npm run build    # 产出静态文件到 build/
npm run serve    # 本地预览 build 产物
```

## 目录结构

```
├── blog/                # 博客文章（Markdown，一个文件夹一篇）
├── docs/                # 知识库文档
├── plugins/blog-sections/ # 本地插件：扫描 blog 目录，把文章按 section 分给各板块页
├── src/components/      # 板块页组件（SectionPage / SectionPosts）
├── src/pages/           # 自定义页面（首页 / 关于 / 闪亮时刻 / 人生历程 / 各板块页）
├── src/css/             # 全局样式
├── static/img/          # 静态资源（头像 / 封面图）
├── docusaurus.config.js # 站点配置（站名 / RSS / 导航等）
└── .github/workflows/   # GitHub Actions 自动部署
```

## 板块划分

博客按 `section` 字段分成三个板块，各板块页只显示自己的文章，互不串台：

| 板块 | 页面地址 | front matter 写法 |
| --- | --- | --- |
| HPC 学习笔记 | `/hpc` | `section: HPC 学习笔记` |
| 旅行见闻 | `/travel` | `section: 旅行见闻` |
| 随心记 | `/hobbies` | `section: 随心记` |

`/blog` 是全部文章的总列表（不受板块限制）。不写 `section` 的文章只会出现在 `/blog`，不会进任何板块。

## 闪亮时刻的陈列柜

`/awards` 页面顶部有一个「陈列柜」，用来放奖状、奖杯、奖牌，以及一些有意义的物件（纪念品、票根、合影等）。

加一张照片只要两步：

1. 把图片放进 `static/img/showcase/`（jpg / png / webp 都行）
2. 在 `src/pages/awards.js` 顶部的 `showcase` 数组里加一条：

```js
{
  img: '/img/showcase/pac-2026-cert.jpg', // 图片路径，以 /img/showcase/ 开头
  title: 'PAC 2026 三等奖证书',            // 卡片标题
  date: '2026.10',                        // 可选，显示在标题上方
  caption: '第十三届全国并行应用挑战赛',    // 可选，一句话说明
}
```

卡片按网格自动排列，点击可查看原图。数组为空时页面会显示占位提示。

## 写新文章

在 `blog/` 下新建文件夹（或 md 文件），文件名格式 `YYYY-MM-DD-标题`，头部写好 front matter：

```md
---
slug: my-post
title: 文章标题
authors: [tianyulai]
tags: [HPC]
date: 2026-10-26
section: HPC 学习笔记   # 必填，决定文章进入哪个板块
description: 一句话摘要，显示在板块列表卡片上
---

正文……
```

## 自动部署（GitHub Actions → 阿里云 OSS）

push 到 `main` 分支后自动构建并同步到阿里云 OSS。需要在仓库
**Settings → Secrets and variables → Actions** 中配置：

| Secret 名称 | 说明 |
| ----------- | ---- |
| `OSS_ACCESS_KEY_ID` | 阿里云 RAM 子账号 AccessKey ID（仅需该 Bucket 写权限） |
| `OSS_ACCESS_KEY_SECRET` | 对应的 AccessKey Secret |
| `OSS_BUCKET` | OSS Bucket 名称 |
| `OSS_ENDPOINT` | 例如 `oss-cn-chengdu.aliyuncs.com` |

部署完成后，如页面未更新，请在阿里云 ESA/CDN 控制台刷新缓存（或给 workflow 增加 API 刷新步骤）。
