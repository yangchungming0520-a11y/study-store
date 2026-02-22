import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-sky-300">
          Curated study packs
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          High-impact resources to help you study faster and score higher.
        </h1>
        <p className="max-w-2xl text-lg text-slate-300">
          StudyPacks gives you concise templates, drills, and revision systems for math, science, and writing.
        </p>
        <Link
          href="/browse"
          className="inline-flex rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Explore all packs
        </Link>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-white">Featured products</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((product) => (
            <article key={product.slug} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-xs uppercase tracking-wide text-sky-300">{product.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{product.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{product.tagline}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-200">{product.priceLabel}</span>
                <Link href={`/p/${product.slug}`} className="text-sm font-medium text-sky-300 hover:text-sky-200">
                  View product →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
