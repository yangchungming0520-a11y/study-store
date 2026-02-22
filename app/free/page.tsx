import Link from 'next/link';

export default function FreePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-white">Free resources</h1>
      <p className="max-w-2xl text-slate-300">
        Free study samples are coming soon. In the meantime, browse the paid packs and check product pages for preview bullets.
      </p>
      <Link href="/browse" className="text-sm font-medium text-sky-300 hover:text-sky-200">
        Browse products →
      </Link>
    </div>
  );
}
