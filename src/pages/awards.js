import React from 'react';
import Layout from '@theme/Layout';

// ============================================================
// 获奖历程数据：按时间倒序排列（最新的写在最上面）
// 直接修改下面的数组即可，也可以继续添加任意多条
// ============================================================
const awards = [
  {
    year: '2026',
    date: '2026.05',
    title: '示例奖项一（请替换成你自己的奖项）',
    org: '颁发单位 / 赛事名称',
    level: '国家级 / 一等奖',
    desc: '这里写一两句说明：参赛项目、你的角色、取得的结果。',
  },
  {
    year: '2025',
    date: '2025.11',
    title: '示例奖项二（请替换成你自己的奖项）',
    org: '颁发单位 / 赛事名称',
    level: '省级 / 二等奖',
    desc: '这里写一两句说明。',
  },
  {
    year: '2025',
    date: '2025.03',
    title: '示例奖项三（请替换成你自己的奖项）',
    org: '颁发单位 / 赛事名称',
    level: '校级 / 三等奖',
    desc: '这里写一两句说明。',
  },
];

export default function Awards() {
  return (
    <Layout title="获奖历程" description="tianyulai 的获奖与荣誉记录">
      <main className="container margin-vert--lg">
        <div className="awards-header">
          <h1>🏆 获奖历程</h1>
          <p className="awards-subtitle">
            记录一路走来的比赛与荣誉，持续更新中。
          </p>
        </div>

        <div className="timeline">
          {awards.map((a, i) => (
            <div className="timeline-item" key={`${a.year}-${i}`}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {i !== awards.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-date">{a.date}</span>
                  {a.level && <span className="timeline-badge">{a.level}</span>}
                </div>
                <h3 className="timeline-title">{a.title}</h3>
                <p className="timeline-org">{a.org}</p>
                {a.desc && <p className="timeline-desc">{a.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
