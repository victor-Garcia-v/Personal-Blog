---
slug: example-post        # URL 路径，可选，默认用文件名
title: 文章标题（示例模板，发布前替换或删除本文）
authors: [NeverGpDzy]
tags: [随笔]              # 可选标签，自由填写
date: 2026-01-01          # 文章日期
---

<!-- 这是一个模板示例，正式发布前请删除本文件或替换内容。
     新建文章：在 blog/ 下新建文件夹（如 2026-01-02-my-post/），内含 index.md -->

## 这是一级标题

正文内容写在 front matter（--- 之间）的下面。支持 Markdown 全部语法和 MDX 扩展。

## 代码块

```cpp
// 支持语法高亮：cpp / python / bash / json 等
#include <cstdio>
int main() { printf("Hello, NeverGpDzy!\n"); return 0; }
```

## 图片

文章内图片建议放在本文件夹里，用相对路径引用：

```md
![图片说明](./image.png)
```

## 小提示

- front matter 里的 `title` 会显示为文章标题
- `tags` 可多个：`[HPC, CUDA]`
- 保存后 `npm start` 本地实时预览；push 到 main 后自动构建部署上线
