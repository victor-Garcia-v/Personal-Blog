import React from 'react';
import Layout from '@theme/Layout';

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
