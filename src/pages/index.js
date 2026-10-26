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
    icon: '✈️',
    title: '旅行见闻',
    link: '/blog',
    desc: '自驾旅途中的风景、路线见闻与出行记录。',
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
  {
    icon: '🏆',
    title: '获奖历程',
    link: '/awards',
    desc: '比赛经历、奖项与荣誉的时间线记录。',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const coverUrl = useBaseUrl('/img/cover.svg');
  const avatarUrl = useBaseUrl('/img/avatar.svg');

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
            <div className="home-cards">
              {cards.map((c) => (
                <Link key={c.title} to={c.link} className="card-link">
                  <div className="card home-card">
                    <div className="home-card-icon">{c.icon}</div>
                    <div className="card__body">
                      <h3>{c.title}</h3>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
