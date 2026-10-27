import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

// ============================================================
// 陈列柜：放奖状 / 奖杯 / 奖牌，以及一些有意义的物件
// （纪念品、票根、徽章、合影…… 只要是值得留着的都能放）
// 用法：
//   1. 把照片放进 static/img/showcase/ 目录（jpg / png / webp 都行）
//   2. 在下面的 showcase 数组里加一条，img 填 /img/showcase/文件名
//   3. date 写时间，caption 写一句说明（都可选）
// 没有内容时页面会显示「陈列柜还是空的」的提示
// ============================================================
const showcase = [
  {
    img: '/img/showcase/pac-2026-cert.png',
    title: 'PAC 2026 三等奖证书',
    date: '2026.10',
    caption: '第十三届全国并行应用挑战赛 · 优化组决赛三等奖（梦溪湖二队）',
    portrait: true,          // 竖版照片（证书 / 奖状）加这一行，卡片按 A4 比例显示不被裁切
  },
];

// ============================================================
// 闪亮时刻数据：按时间倒序排列（最新的写在最上面）
// 直接修改下面的数组即可，也可以继续添加任意多条
// ============================================================
const awards = [
  {
    year: '2026',
    date: '2026.10.19',
    title: '第十三届全国并行应用挑战赛（PAC 2026）三等奖',
    org: 'ACM 中国高性能计算专家委员会、中国智能计算产业联盟 联合主办',
    level: '国家级 / 三等奖',
    desc: '第十三届 PAC 全国总决赛于 2026 年 10 月 17—19 日在深圳国际会展中心举办，与第二十二届 CCF 全国高性能计算学术大会（CCF HPC 2026）同期举行，竞赛平台为国家超级计算深圳中心「灵晟」超算系统。',
  },
  // ------------------------------------------------------------
  // 继续添加奖项时，复制下面这段结构，按时间倒序插到数组最前面：
  //
  // {
  //   year: '2026',
  //   date: '2026.05',              // 显示在时间轴上的日期
  //   title: '奖项名称',
  //   org: '颁发单位 / 赛事名称',
  //   level: '国家级 / 一等奖',      // 显示为日期右侧的小徽章
  //   desc: '一两句说明：参赛项目、你的角色、取得的结果。',
  // },
  // ------------------------------------------------------------
];

function ShowcaseItem({ item }) {
  const url = useBaseUrl(item.img);
  return (
    <a className="showcase-item" href={url} target="_blank" rel="noreferrer">
      <div className={`showcase-photo${item.portrait ? ' is-portrait' : ''}`}>
        <img src={url} alt={item.title} loading="lazy" />
      </div>
      <div className="showcase-caption">
        {item.date && <span className="showcase-date">{item.date}</span>}
        <span className="showcase-title">{item.title}</span>
        {item.caption && <span className="showcase-desc">{item.caption}</span>}
      </div>
    </a>
  );
}

export default function Awards() {
  return (
    <Layout title="闪亮时刻" description="tianyulai 的闪亮时刻记录">
      <main className="container margin-vert--lg">
        <div className="awards-header">
          <h1>🏆 闪亮时刻</h1>
          <p className="awards-subtitle">
            记录一路走来的高光时刻与荣誉，持续更新中。
          </p>
        </div>

        <section className="showcase">
          <h2 className="showcase-heading">🪞 陈列柜</h2>
          <p className="showcase-hint">
            奖状、奖杯、奖牌，还有一些有意义的物件 —— 拍下来放在这里。
          </p>

          {showcase.length > 0 ? (
            <div className="showcase-grid">
              {showcase.map((item, i) => (
                <ShowcaseItem item={item} key={`${item.img}-${i}`} />
              ))}
            </div>
          ) : (
            <div className="showcase-empty">
              <p>陈列柜还是空的。</p>
              <p className="showcase-empty-hint">
                把奖状 / 奖杯 / 纪念物的照片放到 <code>static/img/showcase/</code> 目录，
                然后在 <code>src/pages/awards.js</code> 顶部的 <code>showcase</code>{' '}
                数组里加一条记录，照片就会出现在这里。
              </p>
            </div>
          )}
        </section>

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
