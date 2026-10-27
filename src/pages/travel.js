import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';
import useBaseUrl from '@docusaurus/useBaseUrl';
import FootprintsMap from '@site/src/components/FootprintsMap';
import { travelStats, storyExtras } from '@site/src/data/travelFootprints';

// 把插件扫出的文章和 travelFootprints.js 里的展示配置按 slug 合并
function useTravelStories() {
  const globalData = useGlobalData();
  const posts = globalData['blog-sections']?.default?.posts ?? [];
  return posts
    .filter((p) => (p.section || '').trim() === '旅行见闻')
    .map((p) => ({ ...p, ...(storyExtras[p.slug] || {}) }));
}

function fmtDuration(hours, minutes, km) {
  const parts = [];
  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}min`);
  }
  return parts.join('') || '—';
}

function StatCard({ icon, label, value, note }) {
  return (
    <div className="fp-stat">
      <span className="fp-stat-icon">{icon}</span>
      <div className="fp-stat-text">
        <span className="fp-stat-label">{label}</span>
        <strong className="fp-stat-value">{value}</strong>
        {note && <span className="fp-stat-note">{note}</span>}
      </div>
    </div>
  );
}

// 单独拆成组件，才能用 useBaseUrl 处理子路径部署（GitHub Pages 的 /仓库名/ 前缀）
function StoryCard({ story }) {
  const cover = useBaseUrl(story.cover);
  return (
    <Link to={story.permalink} className="fp-card-link">
      <article className="fp-card">
        <div className="fp-card-cover">
          <img src={cover} alt={story.title} loading="lazy" />
          <span className="fp-card-city">📍 {story.city}</span>
        </div>
        <div className="fp-card-body">
          <h3 className="fp-card-title">{story.title}</h3>
          {story.description && (
            <p className="fp-card-desc">{story.description}</p>
          )}
        </div>
      </article>
    </Link>
  );
}

export default function Travel() {
  const stories = useTravelStories();
  const configured = stories.filter((s) => s.city);
  const places = [];
  const seen = new Set();
  configured.forEach((s) => {
    if (!seen.has(s.city)) {
      seen.add(s.city);
      places.push({ city: s.city, lat: s.lat, lng: s.lng });
    }
  });

  const { flight, train, drive } = travelStats;

  return (
    <Layout title="我的足迹" description="记录每一次出发，收集路上的风景与故事。">
      <main>
        {/* ---- 顶部横幅：标题 + 出行统计 ---- */}
        <div className="fp-hero">
          <div className="container">
            <h1 className="fp-hero-title">我的足迹</h1>
            <p className="fp-hero-sub">记录每一次出发，收集路上的风景与故事。</p>
            <div className="fp-stats">
              <StatCard icon="📍" label="探索地点" value={places.length} />
              <StatCard icon="🧳" label="旅行故事" value={configured.length} />
              {(flight.hours > 0 || flight.minutes > 0 || flight.km > 0) && (
                <StatCard
                  icon="✈️"
                  label="飞行"
                  value={fmtDuration(flight.hours, flight.minutes)}
                  note={flight.km > 0 ? `${flight.km}km` : null}
                />
              )}
              {(train.hours > 0 || train.minutes > 0 || train.km > 0) && (
                <StatCard
                  icon="🚄"
                  label="火车"
                  value={fmtDuration(train.hours, train.minutes)}
                  note={train.km > 0 ? `${train.km}km` : null}
                />
              )}
              {drive.km > 0 && (
                <StatCard icon="🚗" label="自驾" value={`${drive.km}公里`} />
              )}
            </div>
          </div>
        </div>

        <div className="container margin-vert--lg">
          {/* ---- 足迹地图 ---- */}
          <section className="fp-section">
            <h2 className="fp-section-title">足迹地图</h2>
            <FootprintsMap places={places} />
          </section>

          {/* ---- 旅行故事卡片 ---- */}
          <section className="fp-section">
            <h2 className="fp-section-title">旅行故事</h2>
            {configured.length === 0 ? (
              <div className="section-empty">
                <p>旅行板块还没有配置封面与城市信息。</p>
                <p className="section-empty-hint">
                  在 <code>src/data/travelFootprints.js</code> 的{' '}
                  <code>storyExtras</code> 里给文章加上城市和封面就会显示在这里。
                </p>
              </div>
            ) : (
              <div className="fp-cards">
                {configured.map((s) => (
                  <StoryCard story={s} key={s.permalink} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </Layout>
  );
}
