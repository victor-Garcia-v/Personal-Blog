import React from 'react';
import Layout from '@theme/Layout';
import SectionPosts from './SectionPosts';

// 板块页统一模板：标题 + 副标题 + 只属于本板块的文章列表
export default function SectionPage({ icon, title, subtitle, section, description }) {
  return (
    <Layout title={title} description={description || subtitle}>
      <main className="container margin-vert--lg">
        <div className="awards-header">
          <h1>
            {icon} {title}
          </h1>
          <p className="awards-subtitle">{subtitle}</p>
        </div>
        <SectionPosts section={section} />
      </main>
    </Layout>
  );
}
