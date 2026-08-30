import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ASTRIX | Public Intelligence Platform',
  description:
    'ASTRIX transforma información pública dispersa en inteligencia sobre tendencias, narrativas, territorio y riesgo con evidencia trazable.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
