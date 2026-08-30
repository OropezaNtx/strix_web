import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'STRIX WEB | Inteligencia web y scraping',
  description:
    'STRIX transforma fuentes web públicas en datos estructurados, monitoreo y análisis para decisiones comerciales, políticas y operativas.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
