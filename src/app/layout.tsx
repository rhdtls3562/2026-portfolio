import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import UnsupportedScreenNotice from '@/components/layout/UnsupportedScreenNotice';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-latin',
});

export const metadata: Metadata = {
  title: 'Kwon Saerom | Retro Portfolio',
  description:
    'moviepalaceonline 무드를 참고해 만든 프론트엔드 개발자 권새롬의 레트로 데스크톱 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${montserrat.variable} h-full`}>
      <body className="min-h-full bg-[#05030a] text-white antialiased">
        <UnsupportedScreenNotice>{children}</UnsupportedScreenNotice>
      </body>
    </html>
  );
}
