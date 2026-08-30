import Reveal from './components/Reveal';

const pipeline = [
  ['01', 'Recolecta', 'Fuentes públicas, RSS, sitios y canales definidos por proyecto.'],
  ['02', 'Estructura', 'Deduplicación, idioma, entidades, temas y señales normalizadas.'],
  ['03', 'Detecta', 'Cambios temporales, narrativas, territorio y convergencia de riesgo.'],
  ['04', 'Explica', 'Cada señal conserva contexto, factores y evidencia verificable.'],
  ['05', 'Decide', 'Intelligence Briefs y vistas enfocadas en lo que merece atención.'],
];

const useCases = [
  ['Gobierno', 'Servicios públicos, conversación territorial, temas emergentes y evidencia asociada.'],
  ['Public Affairs', 'Seguimiento de actores, agenda pública, asuntos regulatorios y riesgo reputacional.'],
  ['Consultoría', 'Scopes independientes para administrar inteligencia de múltiples proyectos o clientes.'],
  ['Comunicación', 'Narrativas dominantes, cambios de tono y señales tempranas con trazabilidad.'],
  ['Empresas', 'Entorno público, reputación, temas sensibles y señales externas relevantes para decisiones.'],
  ['Medios & Research', 'Series históricas, tendencias, narrativas, territorios y fuentes verificables.'],
];

const currentCapabilities = [
  'Backend FastAPI y frontend Next.js',
  'PostgreSQL y scheduler automático',
  'Ingesta RSS y deduplicación de contenido',
  'Idioma, keywords, topics y entities',
  'Sentiment, political score y toxicity score',
  'Monitoring Projects y Scope Preview',
  'Matching amplio / estricto y explainability',
  'Temporal, Geo, Crisis y Narrative Intelligence',
  'Evidence drill-down e Intelligence Brief',
];

const futureCapabilities = [
  'Más conectores y fuentes',
  'APIs y social data',
  'Clustering semántico',
  'Actor intelligence',
  'Relationship graphs',
  'Alertas automáticas',
  'Reportes ejecutivos',
  'Modelos avanzados',
];

function OwlMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`owl-mark ${compact ? 'compact' : ''}`} aria-hidden="true">
      <span className="owl-ring" />
      <span className="owl-face-shape">
        <i className="owl-eye left" /><i className="owl-eye right" /><i className="owl-beak" />
      </span>
    </span>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="STRIX inicio">
      <OwlMark compact />
      <span>STRIX</span><b>_</b>
    </a>
  );
}

function ProductShell({ children, label = 'LIVE INTELLIGENCE CENTER' }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="product-shell">
      <div className="product-chrome">
        <div className="chrome-dots"><i/><i/><i/></div>
        <span>{label}</span>
        <b><i/> SYSTEM ACTIVE</b>
      </div>
      {children}
    </div>
  );
}

function IntelligencePreview() {
  return (
    <ProductShell label="STRIX / EXECUTIVE OVERVIEW">
      <div className="overview-panel">
        <div className="overview-head">
          <div>
            <small>INTELLIGENCE BRIEF V2</small>
            <h3>La conversación sobre servicios públicos muestra una señal acelerando.</h3>
            <p>146 posts analizados · 12% negativos · alcance activo: CDMX</p>
          </div>
          <div className="time-tabs"><span>1h</span><span>6h</span><span className="active">24h</span><span>7d</span></div>
        </div>
        <div className="overview-kpis">
          <div><span>POSTS</span><strong>146</strong></div>
          <div><span>NEGATIVO</span><strong>12%</strong></div>
          <div><span>RIESGO</span><strong>LOW</strong></div>
          <div><span>ALERTAS</span><strong>3</strong></div>
          <div><span>TERRITORIOS</span><strong>1</strong></div>
        </div>
        <div className="overview-signals">
          <article className="signal amber"><small>SEÑAL PRINCIPAL</small><strong>general</strong><p>Sin baseline suficiente para comparar</p></article>
          <article className="signal neutral"><small>TERRITORIO PRINCIPAL</small><strong>CDMX</strong><p>1 mención · 0% negativas</p></article>
          <article className="signal red"><small>WATCHLIST</small><strong>general · elecciones · agua</strong><p>Temas bajo observación</p></article>
        </div>
      </div>
    </ProductShell>
  );
}

function GeoCrisisPreview() {
  return (
    <ProductShell label="STRIX / GEO + CRISIS INTELLIGENCE">
      <div className="geo-crisis-grid">
        <div className="map-panel">
          <div className="panel-title"><span>MAPA INTELIGENTE TERRITORIAL</span><small>Riesgo geográfico basado en conversación pública</small></div>
          <div className="map-canvas">
            <span className="road r1"/><span className="road r2"/><span className="road r3"/><span className="road r4"/><span className="road r5"/>
            <span className="map-zone z1">CDMX</span><span className="map-zone z2">EDOMEX</span><span className="map-zone z3">PUEBLA</span>
            <span className="risk-dot low d1"/><span className="risk-dot medium d2"/><span className="risk-dot high d3"/><span className="risk-dot low d4"/>
          </div>
          <div className="map-legend"><span><i className="low"/>Riesgo bajo</span><span><i className="medium"/>Riesgo medio</span><span><i className="high"/>Riesgo alto</span></div>
        </div>
        <div className="crisis-panel">
          <div className="panel-title"><span>CRISIS DETECTION</span><small>Alertas preliminares y factores explicables</small></div>
          <div className="crisis-kpis"><div><span>Analizados</span><strong>1019</strong></div><div><span>Alertas</span><strong>68</strong></div><div className="risk"><span>Riesgo</span><strong>Alto</strong></div></div>
          <article className="alert-card"><div><b>Riesgo 8</b><span>negative</span></div><strong>Señal pública con convergencia de sentimiento, política y temas sensibles.</strong><p>negative sentiment · alto score político · source diversity</p><a href="#evidencia">Ver evidencia ↗</a></article>
          <article className="alert-card secondary"><div><b>Riesgo 5</b><span>monitoring</span></div><strong>Conversación emergente con aceleración temática.</strong><p>topic acceleration · source diversity</p></article>
        </div>
      </div>
    </ProductShell>
  );
}

function NarrativePreview() {
  const narratives = [
    ['Proceso electoral', '35 menciones', '9%'],
    ['Seguridad pública', '14 menciones', '29%'],
    ['Servicios urbanos', '12 menciones', '0%'],
    ['Corrupción y gobierno', '9 menciones', '22%'],
  ];
  return (
    <ProductShell label="STRIX / NARRATIVE MONITORING">
      <div className="narrative-preview">
        <aside>
          <small>MONITORING SCOPE</small><strong>Global intelligence</strong>
          {['Overview','Live Feed','Geo Intelligence','Crisis','Narratives','Trends'].map((item, i)=><span className={i===4?'active':''} key={item}>{item}</span>)}
        </aside>
        <div className="narrative-list">
          <div className="panel-title"><span>DOMINANT PUBLIC NARRATIVES</span><small>Volumen, negatividad, fuentes y evidencia</small></div>
          {narratives.map(([name, mentions, negative])=><article key={name}><div><strong>{name}</strong><small>{mentions}</small></div><div className="tags"><i>general</i><i>seguridad</i><i>economía</i></div><b>{negative}<small> negativas</small></b></article>)}
        </div>
        <div className="evidence-side"><small>NARRATIVE PROFILE</small><h4>Proceso electoral</h4><div className="profile-kpis"><div><span>Negativo</span><b>9%</b></div><div><span>Político</span><b>46%</b></div><div><span>Tóxico</span><b>3%</b></div></div><small>EVIDENCIA NARRATIVA</small>{[1,2,3].map(i=><article key={i}><span>rss_news · neutral</span><strong>Contenido original vinculado a la narrativa y disponible para auditoría.</strong><a href="#evidencia">Abrir fuente ↗</a></article>)}</div>
      </div>
    </ProductShell>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="page-grid" aria-hidden="true" />
      <header className="nav-wrap">
        <div className="nav shell">
          <Brand />
          <nav>
            <a href="#producto">Producto</a><a href="#inteligencia">Inteligencia</a><a href="#evidencia">Evidencia</a><a href="#casos">Casos de uso</a><a href="#contacto" className="nav-cta">Solicitar demo</a>
          </nav>
        </div>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow"><span /> PUBLIC INTELLIGENCE PLATFORM</div>
            <h1>Observa el ruido.<br/><em>Encuentra la señal.</em></h1>
            <p className="hero-lead">STRIX transforma información pública dispersa en inteligencia sobre <strong>tendencias, narrativas, territorio y riesgo</strong>, con evidencia que puede auditarse.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contacto">Solicitar demo <span>↗</span></a><a className="button button-ghost" href="#producto">Explorar plataforma</a></div>
            <div className="trust-row"><span>01 / Evidencia trazable</span><span>02 / Scopes independientes</span><span>03 / Señales explicables</span></div>
          </Reveal>
        </div>
        <Reveal className="hero-stage" delay={120}>
          <div className="hero-orbit"><OwlMark/><span className="orbit o1"/><span className="orbit o2"/><span className="orbit o3"/><i className="scan-beam"/></div>
          <div className="hero-console"><span>PROJECT / PUBLIC SIGNALS</span><b>ACTIVE</b><div><strong>+164%</strong><small>topic acceleration</small></div><div><strong>03</strong><small>territories</small></div><div><strong>0.82</strong><small>confidence</small></div></div>
        </Reveal>
      </section>

      <section className="manifesto shell">
        <Reveal><span className="section-index">STRIX / 001</span><p className="kicker">MÁS DATOS ≠ MÁS CLARIDAD</p><h2>La información pública crece cada minuto. La comprensión no.</h2></Reveal>
        <Reveal delay={100}><p className="muted">Noticias, medios, sitios, reportes y territorios generan volumen. STRIX organiza ese flujo alrededor de preguntas concretas para mostrar qué cambia, dónde cambia, qué narrativa domina y qué evidencia sostiene cada lectura.</p></Reveal>
      </section>

      <section className="section shell" id="producto">
        <Reveal className="section-heading"><div><span className="section-index">STRIX / 002</span><p className="kicker">PRODUCTO REAL</p><h2>Un centro de inteligencia, no otro dashboard.</h2></div><p>El producto prioriza señales y contexto antes que saturar al usuario con gráficas. La interfaz real de STRIX ya integra overview ejecutivo, monitoreo, narrativas, geo y riesgo.</p></Reveal>
        <Reveal delay={80}><IntelligencePreview /></Reveal>
      </section>

      <section className="pipeline-section">
        <div className="shell">
          <Reveal className="section-heading compact"><div><span className="section-index">STRIX / 003</span><h2>De fuente pública a inteligencia.</h2></div><p>Una arquitectura orientada a producir contexto defendible, no solamente a recolectar información.</p></Reveal>
          <div className="pipeline">{pipeline.map(([n,title,text],i)=><Reveal key={title} delay={i*70}><article><span>{n}</span><h3>{title}</h3><p>{text}</p><b>→</b></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section shell" id="inteligencia">
        <Reveal className="section-heading"><div><span className="section-index">STRIX / 004</span><p className="kicker">GEO + CRISIS INTELLIGENCE</p><h2>Entiende dónde ocurre una señal y por qué merece atención.</h2></div><p>Las alertas combinan contexto territorial, sentimiento, relevancia, aceleración temática y diversidad de fuentes. El score resume convergencia; no pretende predecir el futuro.</p></Reveal>
        <Reveal delay={80}><GeoCrisisPreview /></Reveal>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <Reveal className="section-heading"><div><span className="section-index">STRIX / 005</span><p className="kicker">NARRATIVE INTELLIGENCE</p><h2>No solo qué se dice. Bajo qué marco se está construyendo la conversación.</h2></div><p>STRIX agrupa conversación por marcos narrativos y expone volumen, negatividad, fuentes y evidencia por proyecto.</p></Reveal>
          <Reveal delay={80}><NarrativePreview /></Reveal>
        </div>
      </section>

      <section className="evidence-section" id="evidencia">
        <div className="shell evidence-layout">
          <Reveal><span className="section-index">STRIX / 006</span><p className="kicker">EVIDENCE / TRACEABILITY</p><h2>Cada conclusión debe poder auditarse.</h2><p className="muted">Una señal es útil cuando el usuario puede reconstruir cómo se obtuvo. STRIX conserva el vínculo entre lectura, factores, contenido, fuente y territorio.</p></Reveal>
          <Reveal delay={100} className="evidence-chain">{['SEÑAL','FACTORES','POSTS','FUENTES','TERRITORIO','CONTENIDO ORIGINAL'].map((item,i)=><div key={item}><span>0{i+1}</span><strong>{item}</strong>{i<5&&<b>↓</b>}</div>)}</Reveal>
          <Reveal delay={180} className="source-stack"><article><small>FUENTE / RSS NEWS</small><h4>Contenido público relacionado con el alcance de monitoreo</h4><p>Match: keyword + topic + territorio · confidence 0.91</p><button>Abrir fuente ↗</button></article><article><small>FUENTE / MEDIO</small><h4>Publicación incluida en Narrative Intelligence</h4><p>Sentiment: negative · political relevance: high</p><button>Abrir fuente ↗</button></article></Reveal>
        </div>
      </section>

      <section className="section shell projects-section">
        <Reveal className="section-heading"><div><span className="section-index">STRIX / 007</span><p className="kicker">MONITORING PROJECTS</p><h2>La plataforma se adapta al problema, no al revés.</h2></div><p>Cada proyecto define sus fuentes, keywords, topics, territorios y reglas de matching. El mismo motor puede operar scopes completamente distintos.</p></Reveal>
        <div className="project-grid">
          {['Monitoreo territorial','Reputación','Elección local','Infraestructura','Seguridad','Servicios públicos'].map((name,i)=><Reveal key={name} delay={i*55}><article><span>0{i+1}</span><h3>{name}</h3><p>{i===0?'Territorios, menciones, negatividad y evidencia geográfica.':i===1?'Actores, temas, cambios de tono y riesgo reputacional.':i===2?'Agenda, narrativas y conversación pública por territorio.':i===3?'Impacto público, comunidades, medios y temas sensibles.':i===4?'Señales públicas, aceleración y diversidad de fuentes.':'Incidencias, conversación territorial y temas emergentes.'}</p><b>↗</b></article></Reveal>)}
        </div>
      </section>

      <section className="section case-study shell">
        <Reveal><span className="section-index">STRIX / 008</span><p className="kicker">CASO DEMOSTRATIVO · FIGURA PÚBLICA</p><h2>Un mismo nombre puede aparecer en cientos de fuentes. STRIX construye el contexto alrededor.</h2><p className="muted">Un proyecto de seguimiento público puede consolidar medios, comunicados, agenda, territorios, actores relacionados y cambios narrativos dentro de un scope auditable. El alcance se limita a información pública y análisis legítimo; no implica perfilamiento privado ni vigilancia invasiva.</p></Reveal>
        <Reveal delay={120} className="case-metrics"><div><span>FUENTES</span><strong>128</strong></div><div><span>REGISTROS</span><strong>14,820</strong></div><div><span>ENTIDADES</span><strong>32</strong></div><div><span>NARRATIVAS</span><strong>07</strong></div></Reveal>
      </section>

      <section className="section shell" id="casos">
        <Reveal className="section-heading"><div><span className="section-index">STRIX / 009</span><p className="kicker">CASOS DE USO</p><h2>La misma infraestructura. Distintas preguntas.</h2></div><p>STRIX es una plataforma de Public Intelligence; la política es un caso de uso importante, no su límite.</p></Reveal>
        <div className="usecase-grid">{useCases.map(([title,text],i)=><Reveal key={title} delay={i*55}><article><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
      </section>

      <section className="platform-section">
        <div className="shell">
          <Reveal className="section-heading"><div><span className="section-index">STRIX / 010</span><p className="kicker">PLATFORM VISION</p><h2>Construido hoy. Diseñado para crecer.</h2></div><p>La web diferencia deliberadamente lo que ya existe de aquello hacia lo que la arquitectura está preparada para evolucionar.</p></Reveal>
          <div className="platform-columns"><Reveal><div className="platform-card current"><small>ACTUALMENTE</small>{currentCapabilities.map(item=><div key={item}><i/> {item}</div>)}</div></Reveal><Reveal delay={100}><div className="platform-card future"><small>DISEÑADO PARA EVOLUCIONAR HACIA</small>{futureCapabilities.map(item=><div key={item}><i/> {item}</div>)}</div></Reveal></div>
        </div>
      </section>

      <section className="cta shell" id="contacto">
        <Reveal><OwlMark/><span className="section-index">STRIX / 011</span><p>PUBLIC INTELLIGENCE, CON EVIDENCIA.</p><h2>Convierte información pública en <em>inteligencia accionable.</em></h2><div className="hero-actions cta-actions"><a className="button button-primary large" href="mailto:foropeza0526@gmail.com?subject=STRIX%20-%20Solicitud%20de%20demo">Solicitar una demostración <span>↗</span></a><a className="button button-ghost large" href="mailto:foropeza0526@gmail.com?subject=STRIX%20-%20Caso%20de%20uso">Hablar sobre un caso de uso</a></div></Reveal>
      </section>

      <footer className="footer shell"><Brand/><p>Public Intelligence · Monitoring · Evidence · Narratives · Geo · Crisis</p><span>© 2026 STRIX</span></footer>
    </main>
  );
}
