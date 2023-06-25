import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Portfolio',
  description: 'Front-end developer portfolio',
};

const inter = Inter({
  subsets: ['latin'],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
