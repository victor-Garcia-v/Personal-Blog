import React, { useEffect, useRef, useState } from 'react';
import { AMAP_KEY, AMAP_SECURITY_JSCODE } from '@site/src/data/travelFootprints';

const KEY_READY =
  AMAP_KEY && !AMAP_KEY.includes('占位符') && !AMAP_KEY.includes('请到');

function loadAMap() {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap);
      return;
    }
    // 安全密钥必须在 SDK 加载前设置
    if (AMAP_SECURITY_JSCODE && !AMAP_SECURITY_JSCODE.includes('请填写')) {
      window._AMapSecurityConfig = { securityJsCode: AMAP_SECURITY_JSCODE };
    }
    const script = document.createElement('script');
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${encodeURIComponent(AMAP_KEY)}`;
    script.onload = () => resolve(window.AMap);
    script.onerror = () => reject(new Error('高德地图 SDK 加载失败'));
    document.head.appendChild(script);
  });
}

export default function FootprintsMap({ places }) {
  const mapRef = useRef(null);
  const [status, setStatus] = useState(KEY_READY ? 'loading' : 'nokey');

  useEffect(() => {
    if (!KEY_READY) {
      return undefined;
    }
    let map = null;
    let cancelled = false;

    loadAMap()
      .then((AMap) => {
        if (cancelled || !mapRef.current) {
          return;
        }
        map = new AMap.Map(mapRef.current, {
          viewMode: '2D',
          zoom: 4,
          center: [105.0, 36.5],
          mapStyle: 'amap://styles/whitesmoke',
        });

        places.forEach((p) => {
          const marker = new AMap.Marker({
            position: [p.lng, p.lat],
            anchor: 'bottom-center',
            content: `<div class="fp-marker"><span class="fp-marker-name">${p.city}</span><span class="fp-marker-dot"></span></div>`,
          });
          map.add(marker);
        });
        map.setFitView(null, false, [40, 40, 40, 40]);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) {
          setStatus('error');
        }
      });

    return () => {
      cancelled = true;
      if (map) {
        map.destroy();
      }
    };
  }, [places]);

  return (
    <div className="fp-map-wrap">
      <div ref={mapRef} className="fp-map" />
      {status !== 'ready' && (
        <div className="fp-map-fallback">
          {status === 'loading' && <p>足迹地图加载中…</p>}
          {status === 'nokey' && (
            <p>
              还没有配置高德地图 Key —— 在
              <code>src/data/travelFootprints.js</code>
              里填上自己申请的 Key，这里就会显示足迹地图。
            </p>
          )}
          {status === 'error' && <p>地图加载失败，请检查 Key 配置或网络。</p>}
        </div>
      )}
      {status === 'ready' && (
        <div className="fp-map-attribution">地图数据 © 高德地图</div>
      )}
    </div>
  );
}
