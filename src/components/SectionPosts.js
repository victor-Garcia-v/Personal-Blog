import React from 'react';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';

// 数据来自本地插件 plugins/blog-sections（构建时扫描 blog 目录生成的全局数据）
function usePostsBySection(section) {
  const globalData = useGlobalData();
  const posts = globalData['blog-sections']?.default?.posts ?? [];

  return posts.filter((p) => (p.section || '').trim() === section);
}

export default function SectionPosts({ section, emptyText }) {
  const posts = usePostsBySection(section);

  if (posts.length === 0) {
    return (
      <div className="section-empty">
        <p>{emptyText || '这个板块还没有文章。'}</p>
        <p className="section-empty-hint">
          写新文章时，在 front matter 里加上一行
          <code>section: {section}</code>
          ，文章就会出现在这里。
        </p>
      </div>
    );
  }

  return (
    <div className="section-posts">
      {posts.map((p) => (
        <Link key={p.permalink} to={p.permalink} className="section-post-link">
          <article className="section-post-card">
            <div className="section-post-meta">
              <time dateTime={p.date}>{p.formattedDate}</time>
              {p.readingMinutes ? <span>· 约 {p.readingMinutes} 分钟</span> : null}
            </div>
            <h2 className="section-post-title">{p.title}</h2>
            {p.description && <p className="section-post-desc">{p.description}</p>}
            <span className="section-post-more">阅读全文 →</span>
          </article>
        </Link>
      ))}
    </div>
  );
}
