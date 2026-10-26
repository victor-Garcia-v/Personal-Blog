import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

const cards = [
  {
    icon: '⚡',
    title: 'HPC 学习笔记',
    link: '/blog',
    desc: 'CUDA 优化、并行程序设计、性能剖析与调优的踩坑与心得。',
  },
  {
    icon: '🏁',
    title: '旅行见闻',
    link: '/blog',
    desc: 'F1 与耐力赛的赛道故事，自驾旅途中的风景与记录。',
  },
  {
    icon: '📷',
    title: '兴趣爱好',
    link: '/blog',
    desc: '摄影、烹饪，用镜头定格风景，用灶台治愈生活。',
  },
  {
    icon: '📚',
    title: '知识库',
    link: '/docs/intro',
    desc: '系统整理的学习笔记与文档，长期更新。',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const coverUrl = useBaseUrl('/img/cover.webp');
  const avatarUrl = useBaseUrl('/img/avatar.webp');

  return (
    <Layout title="首页" description={siteConfig.tagline}>
      <header
        className="hero hero--primary hero-banner"
        style={{ backgroundImage: `url(${coverUrl})` }}>
        <div className="hero-overlay">
          <div className="container">
            <img className="hero-avatar" src={avatarUrl} alt="tianyulai 头像" />
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className="hero-buttons">
              <Link className="button button--secondary button--lg" to="/blog">
                📝 进入博客
              </Link>
              <Link
                className="button button--outline button--secondary button--lg hero-btn-outline"
                to="/docs/intro">
                📚 看看知识库
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="section-cards">
          <div className="container">
            <div className="row">
              {cards.map((c) => (
                <div key={c.title} className="col col--3 col--md-6">
                  <Link to={c.link} className="card-link">
                    <div className="card home-card">
                      <div className="home-card-icon">{c.icon}</div>
                      <div className="card__body">
                        <h3>{c.title}</h3>
                        <p>{c.desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
