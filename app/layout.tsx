import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudyPacks',
  description: 'A modern storefront for focused, downloadable study resources.'
};

const navItems = [
  { href: '/browse', label: 'Browse' },
  { href: '/free', label: 'Free' },
  { href: '/bundles', label: 'Bundles' },
  { href: '/about', label: 'About' }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
          <header className="mb-10 flex items-center justify-between border-b border-slate-800 pb-4">
            <Link href="/" className="text-xl font-semibold tracking-tight text-white">
              StudyPacks
            </Link>
            <nav className="flex items-center gap-5 text-sm text-slate-300">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-16 border-t border-slate-800 pt-6 text-sm text-slate-400">
            © {new Date().getFullYear()} StudyPacks. Learn smarter.
          </footer>
        </div>
      </body>
    </html>
  );
}
