// =====================================================================
// 足迹页配置 —— 想改地图、封面、城市标签、出行统计，只改这个文件就行
// =====================================================================

// ---- 高德地图 Key（免费申请，两分钟搞定）----
// 1. 打开 https://console.amap.com/dev/key/app 注册/登录高德开放平台
// 2. 「应用管理」→「创建新应用」→「添加 Key」，服务平台选「Web端(JS API)」
// 3. 把生成的 Key 填到 AMAP_KEY，对应的「安全密钥 securityJsCode」填到下面
// 4. 回到 Key 设置里，把域名白名单加上 nevergpdzy.com
//
// 注意：不填 Key 页面也能正常用，只是地图区域会显示一条提示。
// 请勿使用别人的 Key —— 每个站点都应使用自己在高德申请的 Key。
export const AMAP_KEY = '7b24fd6f9c396303512b89d621686877';
export const AMAP_SECURITY_JSCODE = '0eeb104219a054227a7f78746b67fdb2';

// ---- 出行统计（按真实情况填写，0 或留空则不显示对应卡片）----
export const travelStats = {
  flight: { hours: 0, minutes: 0, km: 0 }, // 例：{ hours: 40, minutes: 26, km: 28333 }
  train: { hours: 0, minutes: 0, km: 0 },
  drive: { km: 0 }, // 例：{ km: 2828 }
};

// ---- 每篇旅行文章的额外信息（按 slug 对应）----
// city / cityEn：卡片左上角和地图上的城市标签
// lat / lng   ：城市坐标（高德地图是 GCJ-02 火星坐标系，直接从高德坐标拾取器取值：
//               https://lbs.amap.com/tools/picker）
// cover       ：卡片封面图，放在 static/img/travel/ 下
export const storyExtras = {
  'shenzhen-songshanhu': {
    city: '深圳',
    cityEn: 'Shenzhen',
    lat: 22.5431,
    lng: 114.0579,
    cover: '/img/travel/shenzhen-songshanhu.jpg',
  },
  'chengdu-chunxilu': {
    city: '成都',
    cityEn: 'Chengdu',
    lat: 30.5728,
    lng: 104.0668,
    cover: '/img/travel/chengdu-chunxilu.jpg',
  },
  'chengdu-wuhouci': {
    city: '成都',
    cityEn: 'Chengdu',
    lat: 30.5728,
    lng: 104.0668,
    cover: '/img/travel/chengdu-wuhouci.jpg',
  },
  'chengdu-jinli': {
    city: '成都',
    cityEn: 'Chengdu',
    lat: 30.5728,
    lng: 104.0668,
    cover: '/img/travel/chengdu-jinli.jpg',
  },
  'qingchengshan-in-rain': {
    city: '都江堰',
    cityEn: 'Dujiangyan',
    lat: 30.9800,
    lng: 103.6200,
    cover: '/img/travel/qingchengshan.jpg',
  },
};
