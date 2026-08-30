'use client';

import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav shell">
        <a className="brand" href="#top" aria-label="STRIX inicio">
          <span className="brand-owl"><img src="/strix-owl.svg" alt="" /></span>
          <span>STRIX</span><b>_</b>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#producto">Producto</a>
          <a href="#inteligencia">Inteligencia</a>
          <a href="#evidencia">Evidencia</a>
          <a href="#casos">Casos de uso</a>
          <a href="#contacto" className="nav-cta">Solicitar demo</a>
        </nav>
      </div>
    </header>
  );
}
