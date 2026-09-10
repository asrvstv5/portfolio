import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amitesh Srivastava | Software Engineer',
  description: 'Amitesh Srivastava is a software engineer at Meta and former Microsoft engineer focused on AI, software engineering, developer tools, and scalable systems.',
  metadataBase: new URL('https://amiteshsrivastava.com'),
  alternates: { canonical: '/' },
  icons: {
    icon: '/as-monogram-64.png',
    shortcut: '/as-monogram-64.png',
    apple: '/as-monogram-64.png',
  },
  openGraph: { title: 'Amitesh Srivastava | Software Engineer', description: 'AI, software engineering, developer tools, and scalable systems.', url: 'https://amiteshsrivastava.com', siteName: 'Amitesh Srivastava', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
