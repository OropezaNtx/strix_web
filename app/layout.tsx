import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'STRIX | Public Intelligence Platform',
  description: 'STRIX transforma información pública dispersa en inteligencia sobre tendencias, narrativas, territorio y riesgo con evidencia trazable.',
  keywords: ['public intelligence', 'monitoring', 'narrative intelligence', 'geo intelligence', 'risk intelligence', 'OSINT', 'data intelligence'],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'STRIX | Public Intelligence Platform',
    description: 'Observa el ruido. Encuentra la señal. Inteligencia pública con evidencia trazable.',
    type: 'website',
    locale: 'es_MX',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
