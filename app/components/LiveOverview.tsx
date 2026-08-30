'use client';

import { useEffect, useMemo, useState } from 'react';

const windows = [
  { label: '1h', posts: 18, negative: '8%', risk: 'LOW', alerts: 1, territories: 1, signal: 'agua' },
  { label: '6h', posts: 62, negative: '10%', risk: 'LOW', alerts: 2, territories: 1, signal: 'servicios públicos' },
  { label: '24h', posts: 146, negative: '12%', risk: 'LOW', alerts: 3, territories: 1, signal: 'general' },
  { label: '7d', posts: 1019, negative: '17%', risk: 'ELEVATED', alerts: 9, territories: 3, signal: 'elecciones' },
];

export default function LiveOverview() {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((value) => (value + 1) % windows.length), 3200);
    return () => window.clearInterval(id);
  }, []);

  const data = windows[index];
  const riskClass = useMemo(() => data.risk === 'ELEVATED' ? 'is-elevated' : '', [data.risk]);

  return (
    <div className="overview-panel live-overview">
      <div className="overview-head">
        <div>
          <small>INTELLIGENCE BRIEF V2</small>
          <h3>La conversación pública muestra una señal que merece seguimiento.</h3>
          <p>{data.posts} posts analizados · {data.negative} negativos · alcance activo: CDMX</p>
        </div>
        <div className="time-tabs" aria-label="Ventana temporal demostrativa">
          {windows.map((item, itemIndex) => (
            <button key={item.label} type="button" onClick={() => setIndex(itemIndex)} className={itemIndex === index ? 'active' : ''} aria-pressed={itemIndex === index}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="overview-kpis" key={data.label}>
        <div><span>POSTS</span><strong>{data.posts}</strong></div>
        <div><span>NEGATIVO</span><strong>{data.negative}</strong></div>
        <div><span>RIESGO</span><strong className={riskClass}>{data.risk}</strong></div>
        <div><span>ALERTAS</span><strong>{data.alerts}</strong></div>
        <div><span>TERRITORIOS</span><strong>{data.territories}</strong></div>
      </div>
      <div className="overview-signals">
        <article className="signal amber"><small>SEÑAL PRINCIPAL</small><strong>{data.signal}</strong><p>Comparación contextual según la ventana activa.</p></article>
        <article className="signal neutral"><small>TERRITORIO PRINCIPAL</small><strong>CDMX</strong><p>{data.territories} territorio{data.territories === 1 ? '' : 's'} en observación</p></article>
        <article className="signal red"><small>WATCHLIST</small><strong>general · elecciones · agua</strong><p>Temas bajo observación</p></article>
      </div>
      <div className="demo-note">INTERFAZ DEMOSTRATIVA BASADA EN CAPACIDADES REALES · LOS VALORES CAMBIAN PARA MOSTRAR LAS VENTANAS TEMPORALES</div>
    </div>
  );
}
