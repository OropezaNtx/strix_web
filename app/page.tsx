import Reveal from './components/Reveal';
import Header from './components/Header';
import LiveOverview from './components/LiveOverview';

const pipeline = [
  ['01', 'Recolecta', 'Fuentes públicas, RSS, sitios y canales definidos por proyecto.'],
  ['02', 'Estructura', 'Deduplicación, idioma, entidades, temas y señales normalizadas.'],
  ['03', 'Detecta', 'Cambios temporales, narrativas, territorio y convergencia de riesgo.'],
  ['04', 'Explica', 'Cada señal conserva contexto, factores y evidencia verificable.'],
  ['05', 'Decide', 'Intelligence Briefs y vistas enfocadas en lo que merece atención.'],
];

const monitoringProjects = [
  ['Monitoreo territorial', 'Territorios, menciones, negatividad y evidencia geográfica.'],
  ['Reputación', 'Actores, temas, cambios de tono y riesgo reputacional.'],
  ['Elección local', 'Agenda, narrativas y conversación pública por territorio.'],
  ['Infraestructura', 'Impacto público, comunidades, medios y temas sensibles.'],
  ['Seguridad', 'Señales públicas, aceleración y diversidad de fuentes.'],
  ['Servicios públicos', 'Incidencias, conversación territorial y temas emergentes.'],
];

const useCases = [
  ['Gobierno', 'Servicios públicos, conversación territorial, temas emergentes y evidencia asociada.'],
  ['Public Affairs', 'Seguimiento de actores, agenda pública, asuntos regulatorios y riesgo reputacional.'],
  ['Consultoría', 'Scopes independientes para administrar inteligencia de múltiples proyectos o clientes.'],
  ['Comunicación', 'Narrativas dominantes, cambios de tono y señales tempranas con trazabilidad.'],
  ['Empresas', 'Entorno público, reputación, temas sensibles y señales externas relevantes para decisiones.'],
  ['Medios & Research', 'Series históricas, tendencias, narrativas, territorios y fuentes verificables.'],
];

const currentGroups = [
  ['Captura', 'RSS, scheduler automático, deduplicación y normalización de contenido.'],
  ['Comprensión', 'Idioma, keywords, topics, entities, sentimiento, political score y toxicity score.'],
  ['Inteligencia', 'Temporal, Geo, Crisis y Narrative Intelligence con scopes independientes.'],
  ['Evidencia', 'Matching explainability, Scope Preview, drill-down e Intelligence Brief.'],
];

const futureGroups = [
  ['Fuentes', 'Más conectores, APIs y social data.'],
  ['Modelado', 'Clustering semántico, actor intelligence y relationship graphs.'],
  ['Operación', 'Alertas automáticas y reportes ejecutivos.'],
  ['Análisis', 'Modelos avanzados sobre una arquitectura ya extensible.'],
];

function BrandMark({ large = false }: { large?: boolean }) {
  return <img className={large ? 'owl-img large' : 'owl-img'} src="/strix-owl.svg" alt="" aria-hidden="true" />;
}

function ProductShell({ children, label }: { children: React.ReactNode; label: string }) {
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

function ExecutivePreview() {
  return <ProductShell label="STRIX / EXECUTIVE OVERVIEW"><LiveOverview /></ProductShell>;
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
            <span className="signal-line sl1"/><span className="signal-line sl2"/>
          </div>
          <div className="map-legend"><span><i className="low"/>Riesgo bajo</span><span><i className="medium"/>Riesgo medio</span><span><i className="high"/>Riesgo alto</span></div>
        </div>
        <div className="crisis-panel">
          <div className="panel-title"><span>CRISIS DETECTION</span><small>Alertas preliminares y factores explicables</small></div>
          <div className="crisis-kpis"><div><span>Analizados</span><strong>1019</strong></div><div><span>Alertas</span><strong>68</strong></div><div className="risk"><span>Riesgo</span><strong>Alto</strong></div></div>
          <article className="alert-card"><div><b>Riesgo 8</b><span>negative</span></div><strong>Señal pública con convergencia de sentimiento, política y temas sensibles.</strong><p>negative sentiment · alto score político · source diversity</p><a href="#evidencia">Ver evidencia ↗</a></article>
          <article className="alert-card secondary"><div><b>Riesgo 5</b><span>monitoring</span></div><strong>Conversación emergente con aceleración temática.</strong><p>topic acceleration · source diversity</p></article>
          <p className="method-note">El score resume convergencia e intensidad de señales. No representa una predicción de crisis.</p>
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
      <Header />

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
          <div className="hero-orbit">
            <BrandMark large />
            <span className="orbit o1"/><span className="orbit o2"/><span className="orbit o3"/><i className="scan-beam"/>
          </div>
          <div className="hero-console"><span>PROJECT / PUBLIC SIGNALS</span><b>ACTIVE</b><div><strong>+164%</strong><small>topic acceleration</small></div><div><strong>03</strong><small>territories</small></div><div><strong>0.82</strong><small>confidence</small></div></div>
        </Reveal>
      </section>

      <section className="manifesto shell">
        <Reveal><span className="section-index">STRIX / 001</span><p className="kicker">MÁS DATOS ≠ MÁS CLARIDAD</p><h2>La información pública crece cada minuto. La comprensión no.</h2></Reveal>
        <Reveal delay={100}><p className="muted">Noticias, medios, sitios, reportes y territorios generan volumen. STRIX organiza ese flujo alrededor de preguntas concretas para mostrar qué cambia, dónde cambia, qué narrativa domina y qué evidencia sostiene cada lectura.</p></Reveal>
      </section>

      <section className="section shell" id="producto">
        <Reveal className="section-heading"><div><span className="section-index">STRIX / 002</span><p className="kicker">PRODUCTO REAL</p><h2>Un centro de inteligencia, no otro dashboard.</h2></div><p>La plataforma prioriza señales y contexto antes que saturar al usuario con gráficas. Overview ejecutivo, monitoreo, narrativas, geo, riesgo y evidencia viven dentro del mismo sistema.</p></Reveal>
        <Reveal delay={80}><ExecutivePreview /></Reveal>
      </section>

      <section className="pipeline-section">
        <div className="shell">
          <Reveal className="section-heading compact"><div><span className="section-index">STRIX / 003</span><h2>De fuente pública a inteligencia.</h2></div><p>Una arquitectura orientada a producir contexto defendible, no solamente a recolectar información.</p></Reveal>
          <div className="pipeline">{pipeline.map(([n,title,text],i)=><Reveal key={title} delay={i*65}><article><span>{n}</span><h3>{title}</h3><p>{text}</p><b>→</b></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section shell" id="inteligencia">
        <Reveal className="section-heading"><div><span className="section-index">STRIX / 004</span><p className="kicker">GEO + CRISIS INTELLIGENCE</p><h2>Entiende dónde ocurre una señal y por qué merece atención.</h2></div><p>Las alertas combinan contexto territorial, sentimiento, relevancia, aceleración temática y diversidad de fuentes. La explicación permanece visible junto con la señal.</p></Reveal>
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
        <Reveal className="section-heading"><div><span className="section-index">STRIX / 007</span><p className="kicker">MONITORING PROJECTS</p><h2>La plataforma se adapta al problema, no al revés.</h2></div><p>Cada proyecto define fuentes, keywords, topics, territorios y reglas de matching. El mismo motor puede operar scopes completamente distintos.</p></Reveal>
        <div className="project-grid">{monitoringProjects.map(([title,text],i)=><Reveal key={title} delay={(i%3)*55}><article><span>0{i+1}</span><b>↗</b><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
      </section>

      <section className="case-study shell">
        <Reveal><span className="section-index">STRIX / 008</span><p className="kicker">CASO DEMOSTRATIVO · FIGURA PÚBLICA</p><div className="illustrative-pill">MÉTRICAS ILUSTRATIVAS</div><h2>Un mismo nombre puede aparecer en cientos de fuentes. STRIX construye el contexto alrededor.</h2><p>Un proyecto de seguimiento público puede consolidar medios, comunicados, agenda, territorios, actores relacionados y cambios narrativos dentro de un scope auditable. El alcance se limita a información pública y análisis legítimo; no implica perfilamiento privado ni vigilancia invasiva.</p></Reveal>
        <Reveal delay={100} className="case-metrics"><div><span>FUENTES</span><strong>128</strong></div><div><span>REGISTROS</span><strong>14,820</strong></div><div><span>ENTIDADES</span><strong>32</strong></div><div><span>NARRATIVAS</span><strong>07</strong></div></Reveal>
      </section>

      <section className="section shell" id="casos">
        <Reveal className="section-heading"><div><span className="section-index">STRIX / 009</span><p className="kicker">CASOS DE USO</p><h2>La misma infraestructura. Distintas preguntas.</h2></div><p>STRIX es una plataforma de Public Intelligence: la política es un caso de uso importante, no su límite.</p></Reveal>
        <div className="usecase-grid">{useCases.map(([title,text],i)=><Reveal key={title} delay={(i%3)*55}><article><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
      </section>

      <section className="platform-section">
        <div className="shell">
          <Reveal className="section-heading"><div><span className="section-index">STRIX / 010</span><p className="kicker">PLATFORM VISION</p><h2>Construido hoy. Diseñado para crecer.</h2></div><p>Diferenciamos deliberadamente lo que ya existe de aquello hacia lo que la arquitectura está preparada para evolucionar.</p></Reveal>
          <div className="platform-columns">
            <Reveal><div className="platform-card current"><div className="panel-label">ACTUALMENTE</div>{currentGroups.map(([title,text])=><article key={title}><i/><div><strong>{title}</strong><p>{text}</p></div></article>)}<small className="stack-note">STACK · FastAPI · Next.js · PostgreSQL</small></div></Reveal>
            <Reveal delay={90}><div className="platform-card future"><div className="panel-label">DISEÑADO PARA EVOLUCIONAR HACIA</div>{futureGroups.map(([title,text])=><article key={title}><i/><div><strong>{title}</strong><p>{text}</p></div></article>)}</div></Reveal>
          </div>
        </div>
      </section>

      <section className="trust-band shell" aria-label="Principios de operación"><span>INFORMACIÓN PÚBLICA</span><span>EVIDENCIA TRAZABLE</span><span>SCOPES CONFIGURABLES</span><span>ANÁLISIS EXPLICABLE</span></section>

      <section className="cta shell" id="contacto">
        <Reveal>
          <BrandMark />
          <span className="section-index">STRIX / 011</span><p>PUBLIC INTELLIGENCE, CON EVIDENCIA.</p><h2>Convierte información pública en <em>inteligencia accionable.</em></h2>
          <div className="hero-actions cta-actions"><a className="button button-primary large" href="mailto:foropeza0526@gmail.com?subject=STRIX%20-%20Solicitud%20de%20demo">Solicitar una demostración <span>↗</span></a><a className="button button-ghost large" href="mailto:foropeza0526@gmail.com?subject=STRIX%20-%20Caso%20de%20uso">Hablar sobre un caso de uso</a></div>
        </Reveal>
      </section>

      <footer className="footer shell"><a className="brand footer-brand" href="#top"><span className="brand-owl"><img src="/strix-owl.svg" alt="" /></span><span>STRIX</span><b>_</b></a><p>Public Intelligence · Monitoring · Evidence · Narratives · Geo · Crisis</p><span>© 2026 STRIX</span></footer>
    </main>
  );
}
