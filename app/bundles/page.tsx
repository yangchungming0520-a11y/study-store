import Link from 'next/link';

export default function BundlesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-white">Bundles</h1>
      <p className="max-w-2xl text-slate-300">
        Bundle offers will be added as the catalog grows. You can still purchase each pack individually from its product page.
      </p>
      <Link href="/browse" className="text-sm font-medium text-sky-300 hover:text-sky-200">
        Explore individual packs →
      </Link>
    </div>
  );
}
