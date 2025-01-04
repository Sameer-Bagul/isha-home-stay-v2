import './globals.css';
import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';

const rubik = Rubik({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'ISHA Home Stay | Best Living Experience',
  description: 'ISHA Home stay offers a premium living experience in Dhule city, Maharashtra. Our hostel provides numerous facilities and is conveniently located near several medical colleges, ensuring a comfortable and secure environment for students.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        <link rel="icon" type="image/x-icon" href="/img/fevicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}