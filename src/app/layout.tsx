import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  preload: true,
  subsets: ['latin'],
  fallback: ['sans-serif'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'AdoptGram',
  description:
    'O Website que te ajudará a encontrar seu novo melhor amigo 🐶🐱❤',
  applicationName: 'AdoptGram',
  creator: 'Pietro Piva Vieira',
  publisher: 'DevArmy Software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
