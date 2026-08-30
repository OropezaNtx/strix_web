const pipeline = ['Recolecta', 'Clasifica', 'Detecta', 'Contextualiza', 'Explica'];

const useCases = [
  ['Gobierno', 'Detecta problemas territoriales, servicios y conversación pública con evidencia trazable.'],
  ['Public Affairs', 'Monitorea actores, temas y riesgo reputacional con una visión estructurada del entorno público.'],
  ['Consultoría', 'Administra inteligencia para múltiples proyectos o clientes desde scopes independientes.'],
  ['Comunicación', 'Identifica narrativas, cambios de tono y señales que requieren atención temprana.'],
  ['Empresas', 'Observa temas públicos, entorno reputacional y señales externas que pueden afectar decisiones.'],
  ['Medios / Research', 'Analiza tendencias, narrativas, territorios y evidencia sobre conversación pública.'],
];

const currentCapabilities = [
  'FastAPI + Next.js + PostgreSQL',
  'Scheduler e ingesta RSS',
  'Deduplicación, idioma y keywords',
  'Topics, entities y sentimiento',
  'Political score y toxicity score',
  'Monitoring Projects y Scope Preview',
  'Matching amplio / estricto y explainability',
  'Temporal, Geo, Crisis y Narrative Intelligence',
  'Evidence drill-down e Intelligence Brief',
];

const futureCapabilities = [
  'Más fuentes y conectores',
  'APIs y social data',
  'Clustering semántico',
  'Actor intelligence',
  'Relationship graphs',
  'Alertas automáticas',
  'Reportes ejecutivos',
  'Modelos avanzados',
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="STRIX inicio">
      <span className="brand-word">STRIX WEB</span><b>_</b>
    </a>
  );
}

function ProductBrief() {
  return (
    <div className="product-window hero-window">
      <div className="window-top">
        <div><span className="dot cyan" /><span className="dot violet" /><span className="dot coral" /></div>
        <small>MONITORING PROJECT / WATER SUPPLY</small>
        <span className="status"><i /> ACTIVE</span>
      </div>
      <div className="brief-grid">
        <div className="brief-main">
          <div className="panel-label">INTELLIGENCE BRIEF</div>
          <h3>La conversación sobre suministro de agua aceleró durante las últimas 24 horas.</h3>
          <p>La señal se concentra en tres territorios, con aumento de negatividad y diversidad de fuentes.</p>
          <div className="brief-metrics">
            <div><strong>+164%</strong><span>vs baseline</span></div>
            <div><strong>71%</strong><span>negativo</span></div>
            <div><strong>03</strong><span>territorios</span></div>
            <div><strong>04</strong><span>fuentes</span></div>
          </div>
          <div className="risk-row"><span>RISK LEVEL</span><b>Elevated</b><i /></div>
        </div>
        <div className="brief-side">
          <div className="mini-map">
            <span className="map-glow g1" /><span className="map-glow g2" /><span className="map-glow g3" />
            <div className="territory t1">Iztapalapa</div>
            <div className="territory t2">Nezahualcóyotl</div>
            <div className="territory t3">Chimalhuacán</div>
          </div>
          <div className="signal-stack">
            <span>NARRATIVE / SERVICIOS PÚBLICOS</span>
            <strong>68% negativo</strong>
            <small>6 fuentes · confidence 0.82</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <header className="nav-wrap">
        <div className="nav shell">
          <Brand />
          <nav>
            <a href="#producto">Producto</a>
            <a href="#inteligencia">Inteligencia</a>
            <a href="#casos">Casos de uso</a>
            <a href="#plataforma">Plataforma</a>
            <a href="#contacto" className="nav-cta">Hablar con STRIX</a>
          </nav>
        </div>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span /> PUBLIC INTELLIGENCE PLATFORM</div>
          <h1>Entiende qué está moldeando la <em>conversación pública.</em></h1>
          <p className="hero-lead">STRIX convierte información pública dispersa en señales accionables sobre narrativas, tendencias, territorio y riesgo.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">Solicitar demo <span>↗</span></a>
            <a className="button button-ghost" href="#producto">Ver cómo funciona</a>
          </div>
          <div className="trust-row">
            <span>01 / Evidencia trazable</span>
            <span>02 / Scopes independientes</span>
            <span>03 / Señales explicables</span>
          </div>
        </div>
        <div className="hero-visual"><ProductBrief /></div>
      </section>

      <section className="problem shell" id="producto">
        <div className="section-index">STRIX / 001</div>
        <div>
          <p className="kicker">EL PROBLEMA</p>
          <h2>Más información no significa más claridad.</h2>
        </div>
        <p className="muted">Noticias, medios, sitios, fuentes públicas, reportes y múltiples territorios generan volumen, pero no necesariamente contexto. STRIX reduce el ruido y organiza la evidencia alrededor de preguntas concretas.</p>
      </section>

      <section className="pipeline-section">
        <div className="shell">
          <div className="section-heading compact">
            <div><span className="section-index">STRIX / 002</span><h2>De fuente pública a inteligencia.</h2></div>
            <p>Una pipeline orientada a entender qué cambia, dónde cambia y por qué merece atención.</p>
          </div>
          <div className="pipeline">
            {pipeline.map((item, index) => (
              <div className="pipeline-step" key={item}>
                <span>0{index + 1}</span><strong>{item}</strong>{index < pipeline.length - 1 && <b>→</b>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="inteligencia">
        <div className="section-heading">
          <div><span className="section-index">STRIX / 003</span><h2>Intelligence Brief</h2></div>
          <p>STRIX no obliga al usuario a interpretar veinte gráficas. Resume la señal y deja disponible la evidencia detrás de cada conclusión.</p>
        </div>
        <ProductBrief />
      </section>

      <section className="intelligence-grid shell">
        <article className="intel-card wide">
          <div className="panel-label">TEMPORAL INTELLIGENCE</div>
          <div className="intel-copy"><h3>Detecta conversaciones que están acelerando.</h3><p>Ventanas de 24h, 7d y 30d, baseline histórico, temas emergentes y aceleración.</p></div>
          <div className="trend-chart">
            <div className="trend-header"><span>agua</span><b>x1.6 · Acelerando</b></div>
            <div className="chart-line"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>
          </div>
        </article>
        <article className="intel-card geo-card">
          <div className="panel-label">GEO INTELLIGENCE</div>
          <div className="geo-visual"><span className="map-glow g1"/><span className="map-glow g2"/><span className="map-glow g3"/><div className="geo-tag gt1">Municipio · 126 menciones</div><div className="geo-tag gt2">Confidence 0.87</div></div>
          <h3>Entiende dónde se concentra una conversación.</h3><p>Canonical location, nivel de confianza, territorio y evidencia disponible en cada señal.</p>
        </article>
        <article className="intel-card risk-card">
          <div className="panel-label">CRISIS INTELLIGENCE</div>
          <div className="risk-score"><strong>6.8</strong><span>Risk Score</span></div>
          <ul className="factor-list">
            <li><span>negative sentiment</span><b>+1.4</b></li><li><span>political relevance</span><b>+1.2</b></li><li><span>topic acceleration</span><b>+1.6</b></li><li><span>territorial confidence</span><b>+1.0</b></li><li><span>source diversity</span><b>+0.6</b></li>
          </ul>
          <p className="fine-print">El score resume convergencia e intensidad de señales. No representa una predicción de crisis.</p>
        </article>
        <article className="intel-card narrative-card">
          <div className="panel-label">NARRATIVE INTELLIGENCE</div>
          <div className="narrative-badge">NARRATIVA DOMINANTE</div>
          <h3>Servicios públicos</h3><div className="narrative-stats"><strong>68%</strong><span>negativo</span><strong>06</strong><span>fuentes</span></div>
          <p>No solo qué se dice, sino bajo qué marco narrativo se está construyendo la conversación.</p>
        </article>
      </section>

      <section className="evidence-section">
        <div className="shell evidence-grid">
          <div>
            <span className="section-index">STRIX / 004</span>
            <p className="kicker">EVIDENCE / TRACEABILITY</p>
            <h2>Cada conclusión debe poder auditarse.</h2>
            <p className="muted">Señal, explicación, posts, fuentes, territorio y contenido original permanecen conectados para poder verificar cómo se llegó a una lectura.</p>
          </div>
          <div className="evidence-flow">
            {['SEÑAL', 'POR QUÉ', 'POSTS', 'FUENTES', 'TERRITORIO', 'CONTENIDO ORIGINAL'].map((item, i) => <div key={item}><span>0{i+1}</span><strong>{item}</strong>{i < 5 && <b>↓</b>}</div>)}
          </div>
          <div className="source-cards">
            <article><small>FUENTE / MEDIO</small><h4>Reporte sobre suministro de agua en zona oriente</h4><p>Coincidencia: keyword + topic + territorio</p><button>Abrir fuente ↗</button></article>
            <article><small>FUENTE / INSTITUCIONAL</small><h4>Comunicado de afectación temporal del servicio</h4><p>Confidence territorial: 0.91</p><button>Abrir fuente ↗</button></article>
          </div>
        </div>
      </section>

      <section className="section shell projects-section">
        <div className="section-heading">
          <div><span className="section-index">STRIX / 005</span><h2>Monitoring Projects</h2></div>
          <p>La plataforma se adapta al problema, no al revés. Cada proyecto define su propio scope y reglas de matching.</p>
        </div>
        <div className="project-layout">
          <div className="project-list">
            {['Monitoreo territorial','Reputación','Elección local','Proyecto de infraestructura','Seguridad','Servicios públicos'].map((item,i)=><div key={item} className={i===0?'active':''}><span>0{i+1}</span><strong>{item}</strong><b>↗</b></div>)}
          </div>
          <div className="scope-panel">
            <div className="panel-label">SCOPE CONFIGURATION</div>
            <div className="scope-row"><span>Sources</span><b>14</b></div><div className="scope-row"><span>Keywords</span><b>28</b></div><div className="scope-row"><span>Topics</span><b>06</b></div><div className="scope-row"><span>Territories</span><b>03</b></div><div className="scope-row"><span>Matching mode</span><b>STRICT</b></div>
            <div className="scope-note">Scope Preview disponible antes de ejecutar análisis.</div>
          </div>
        </div>
      </section>

      <section className="section shell" id="casos">
        <div className="section-heading">
          <div><span className="section-index">STRIX / 006</span><h2>Casos de uso</h2></div>
          <p>Una plataforma de Public Intelligence para equipos que necesitan contexto defendible, no solo volumen de datos.</p>
        </div>
        <div className="usecase-grid">{useCases.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="platform-section" id="plataforma">
        <div className="shell">
          <div className="section-heading">
            <div><span className="section-index">STRIX / 007</span><h2>Plataforma actual y visión</h2></div>
            <p>Separamos con claridad lo que ya existe de lo que está diseñado para evolucionar.</p>
          </div>
          <div className="platform-columns">
            <div className="platform-card current"><div className="panel-label">ACTUALMENTE</div>{currentCapabilities.map(item=><div key={item}><i/> {item}</div>)}</div>
            <div className="platform-card future"><div className="panel-label">DISEÑADO PARA EVOLUCIONAR HACIA</div>{futureCapabilities.map(item=><div key={item}><i/> {item}</div>)}</div>
          </div>
        </div>
      </section>

      <section className="cta shell" id="contacto">
        <span className="section-index">STRIX / 008</span>
        <p>PUBLIC INTELLIGENCE, CON EVIDENCIA.</p>
        <h2>Convierte información pública en <em>inteligencia accionable.</em></h2>
        <div className="hero-actions cta-actions"><a className="button button-primary large" href="mailto:foropeza0526@gmail.com">Solicitar una demostración <span>↗</span></a><a className="button button-ghost large" href="mailto:foropeza0526@gmail.com?subject=STRIX%20-%20Caso%20de%20uso">Hablar sobre un caso de uso</a></div>
      </section>

      <footer className="footer shell"><Brand /><p>Public Intelligence Platform · Monitoring · Evidence · Narratives · Geo</p><span>© 2026 STRIX WEB</span></footer>
    </main>
  );
}
