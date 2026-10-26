import React from 'react';
import Layout from '@theme/Layout';

// ============================================================
// 人生历程数据：按时间倒序排列（最新的写在最上面）
// 直接修改下面的数组即可，也可以继续添加任意多条
// ============================================================
const journey = [
  {
    year: '2026',
    date: '2026.10',
    title: '这个站点上线',
    tag: '新起点',
    desc: '开始在这里记录 HPC 学习笔记、旅行见闻与生活片段，把零散的想法整理成可以回看的东西。',
  },
  {
    year: '2026',
    date: '待补充',
    title: '填入你的一段经历',
    tag: '待补充',
    desc: '在 src/pages/journey.js 顶部的 journey 数组里替换这一条：写清楚时间、发生了什么、你从中得到了什么。',
  },
  {
    year: '—',
    date: '待补充',
    title: '再往前的一段经历',
    tag: '待补充',
    desc: '可以是求学、比赛、第一次写并行程序、一次长途旅行……按时间倒序往上加即可。',
  },
  // ------------------------------------------------------------
  // 继续添加时，复制下面这段结构，插到数组最前面：
  //
  // {
  //   year: '2026',
  //   date: '2026.05',
  //   title: '事件标题',
  //   tag: '标签（可留空）',
  //   desc: '一两句说明。',
  // },
  // ------------------------------------------------------------
];

export default function Journey() {
  return (
    <Layout title="人生历程" description="tianyulai 的人生历程记录">
      <main className="container margin-vert--lg">
        <div className="awards-header">
          <h1>🧭 人生历程</h1>
          <p className="awards-subtitle">
            把走过的路按时间排好，回头看时知道自己走了多远。
          </p>
        </div>

        <div className="timeline">
          {journey.map((j, i) => (
            <div className="timeline-item" key={`${j.year}-${i}`}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {i !== journey.length - 1 && <span className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <div className="timeline-meta">
                  <span className="timeline-date">{j.date}</span>
                  {j.tag && <span className="timeline-badge">{j.tag}</span>}
                </div>
                <h3 className="timeline-title">{j.title}</h3>
                {j.desc && <p className="timeline-desc">{j.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
