const capabilities = [
  ['01', 'Web scraping', 'Captura automatizada de información pública desde sitios, directorios, catálogos y portales relevantes.'],
  ['02', 'Normalización', 'Convertimos fuentes distintas en estructuras consistentes, comparables y listas para análisis.'],
  ['03', 'Monitoreo', 'Procesos recurrentes para detectar cambios, nuevas publicaciones, movimientos de mercado o señales relevantes.'],
  ['04', 'Enriquecimiento', 'Cruces entre fuentes, clasificación de entidades, reglas de negocio y generación de atributos útiles.'],
  ['05', 'Análisis', 'Datasets, indicadores, dashboards y salidas diseñadas alrededor de la decisión que necesitas tomar.'],
  ['06', 'Integración', 'Entregamos datos por archivos, bases estructuradas, APIs o flujos conectados a tus herramientas actuales.'],
];

const sectors = [
  ['Comercial', 'Prospección, establecimientos, cobertura, presencia de marcas, aperturas y directorios.'],
  ['Mercado', 'Precios, catálogos, disponibilidad, productos, competidores y cambios visibles en canales digitales.'],
  ['Medios', 'Noticias, menciones, publicaciones, seguimiento temático y construcción de archivos históricos.'],
  ['Operaciones', 'Registros públicos, licitaciones, portales institucionales, directorios y cambios en fuentes operativas.'],
  ['Investigación', 'Construcción de datasets, cruces de fuentes, series históricas y monitoreo recurrente.'],
  ['Político', 'Seguimiento de información pública, agenda, medios, actores relevantes y señales de contexto.'],
];

const stack = ['FUENTES', 'CAPTURA', 'VALIDACIÓN', 'ESTRUCTURACIÓN', 'ANÁLISIS', 'DECISIÓN'];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="nav shell">
        <a className="brand" href="#top" aria-label="STRIX WEB inicio">
          <span>STRIX WEB</span><b>_</b>
        </a>
        <nav>
          <a href="#capacidades">Capacidades</a>
          <a href="#caso">Caso de uso</a>
          <a href="#sectores">Sectores</a>
          <a href="#contacto" className="nav-cta">Hablar con STRIX</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> INTELIGENCIA WEB / DATA ACQUISITION</div>
          <h1>Convertimos la web en <em>información accionable.</em></h1>
          <p className="hero-lead">
            Diseñamos sistemas de scraping, monitoreo y estructuración de datos para transformar fuentes públicas dispersas en información útil para investigación, operación y toma de decisiones.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#capacidades">Explorar capacidades <span>↗</span></a>
            <a className="button button-ghost" href="#caso">Ver caso de uso</a>
          </div>
          <div className="trust-row">
            <span>01 / Datos estructurados</span>
            <span>02 / Procesos trazables</span>
            <span>03 / Monitoreo recurrente</span>
          </div>
        </div>

        <div className="hero-mark" aria-label="Identidad gráfica STRIX">
          <div className="owl-frame">
            <div className="scanlines" />
            <div className="owl-face">
              <div className="owl-brow left" />
              <div className="owl-brow right" />
              <div className="eye left"><i /></div>
              <div className="eye right"><i /></div>
              <div className="beak" />
            </div>
            <div className="binary binary-one">01001 00110<br/>10110 01001<br/>00011 10100</div>
            <div className="binary binary-two">DATA_INGEST<br/>SOURCE: PUBLIC<br/>STATUS: ACTIVE</div>
          </div>
          <div className="mark-label">OBSERVE / EXTRACT / STRUCTURE</div>
        </div>
      </section>

      <section className="manifesto shell">
        <div className="section-index">STRIX / 001</div>
        <div>
          <p className="kicker">NO VENDEMOS “UN SCRIPT”.</p>
          <h2>Construimos infraestructura para observar información que cambia.</h2>
        </div>
        <p className="muted">
          El scraping es una capa del sistema. El valor aparece cuando la captura se combina con validación, limpieza, reglas de negocio, monitoreo y una salida pensada para una decisión concreta.
        </p>
      </section>

      <section className="section shell" id="capacidades">
        <div className="section-heading">
          <div><span className="section-index">STRIX / 002</span><h2>Capacidades</h2></div>
          <p>De una fuente web a un activo de datos reutilizable.</p>
        </div>
        <div className="cap-grid">
          {capabilities.map(([n, title, text]) => (
            <article className="cap-card" key={title}>
              <span className="card-number">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="card-line" />
            </article>
          ))}
        </div>
      </section>

      <section className="pipeline-section">
        <div className="shell">
          <div className="section-heading compact">
            <div><span className="section-index">STRIX / 003</span><h2>Del ruido a la señal</h2></div>
            <p>Cada proyecto parte de la pregunta, no de la herramienta.</p>
          </div>
          <div className="pipeline">
            {stack.map((item, index) => (
              <div className="pipeline-step" key={item}>
                <span>0{index + 1}</span><strong>{item}</strong>
                {index < stack.length - 1 && <b>→</b>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case shell" id="caso">
        <div className="case-intro">
          <span className="section-index">STRIX / 004</span>
          <div className="case-badge"><span /> CASO DEMOSTRATIVO · SECTOR POLÍTICO</div>
          <h2>Una figura pública. Cientos de fuentes. Un solo sistema de observación.</h2>
          <p>
            Para una personalidad del sector político, STRIX puede consolidar información pública proveniente de medios, comunicados, agenda institucional y otras fuentes abiertas para construir un entorno de seguimiento estructurado.
          </p>
          <p className="legal-note">
            El alcance se limita a información pública y usos legítimos de análisis. No se plantea perfilamiento privado, vigilancia invasiva ni manipulación electoral.
          </p>
        </div>

        <div className="case-dashboard">
          <div className="dash-top">
            <div><small>PROJECT</small><strong>PUBLIC FIGURE INTELLIGENCE</strong></div>
            <span className="live"><i /> LIVE MONITORING</span>
          </div>
          <div className="metrics">
            <div><small>FUENTES</small><strong>128</strong><span>monitoreadas</span></div>
            <div><small>REGISTROS</small><strong>14,820</strong><span>procesados</span></div>
            <div><small>ENTIDADES</small><strong>32</strong><span>identificadas</span></div>
            <div><small>TEMAS</small><strong>08</strong><span>clasificados</span></div>
          </div>
          <div className="signal-panel">
            <div className="signal-head"><span>ACTIVIDAD DE FUENTES</span><span>ÚLTIMOS 30 DÍAS</span></div>
            <div className="bars">
              {[42, 55, 38, 68, 59, 84, 72, 91, 61, 77, 66, 88, 74, 96, 81, 69, 92, 78, 85, 98, 73, 88, 94, 79].map((h, i) => <i key={i} style={{height:`${h}%`}} />)}
            </div>
          </div>
          <div className="dash-foot"><span>Automated collection</span><span>Entity resolution</span><span>Historical archive</span><span>Structured output</span></div>
        </div>
      </section>

      <section className="section shell" id="sectores">
        <div className="section-heading">
          <div><span className="section-index">STRIX / 005</span><h2>La misma infraestructura.<br/>Distintas preguntas.</h2></div>
          <p>STRIX no está limitado a un sector. Diseñamos la captura alrededor de la información que necesitas observar.</p>
        </div>
        <div className="sector-list">
          {sectors.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="principles">
        <div className="shell principles-grid">
          <div>
            <span className="section-index">STRIX / 006</span>
            <h2>Información pública.<br/>Procesos trazables.<br/><em>Uso responsable.</em></h2>
          </div>
          <div className="principle-copy">
            <p>La capacidad técnica no sustituye el criterio. Evaluamos cada fuente, frecuencia y método de adquisición según el contexto del proyecto.</p>
            <ul>
              <li><span>01</span> Privacidad y minimización de datos.</li>
              <li><span>02</span> Respeto por restricciones técnicas y contractuales aplicables.</li>
              <li><span>03</span> Límites de frecuencia y operación responsable.</li>
              <li><span>04</span> Trazabilidad sobre origen, transformación y salida.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta shell" id="contacto">
        <span className="section-index">STRIX / 007</span>
        <p>TIENES UNA FUENTE. NOSOTROS CONSTRUIMOS EL SISTEMA.</p>
        <h2>Hay información allá afuera.<br/><em>STRIX la convierte en infraestructura.</em></h2>
        <a className="button button-primary large" href="mailto:contacto@strixweb.mx">Hablemos de tu caso <span>↗</span></a>
      </section>

      <footer className="footer shell">
        <div className="brand"><span>STRIX WEB</span><b>_</b></div>
        <p>Inteligencia web · Scraping · Data acquisition · Monitoring</p>
        <span>© 2026 STRIX WEB</span>
      </footer>
    </main>
  );
}
