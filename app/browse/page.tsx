import Link from 'next/link';
import { categories, products } from '@/lib/products';

export default function BrowsePage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-bold text-white">Browse StudyPacks</h1>
        <p className="mt-2 text-slate-300">Pick a category or explore the full catalog below.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/c/${category.slug}`}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-sky-400/50"
          >
            <h2 className="text-lg font-semibold text-white">{category.label}</h2>
            <p className="mt-2 text-sm text-slate-300">{category.description}</p>
          </Link>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">All products</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.slug} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h3 className="text-lg font-semibold text-white">{product.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{product.tagline}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-slate-200">{product.priceLabel}</span>
                <Link href={`/p/${product.slug}`} className="text-sky-300 hover:text-sky-200">
                  Open →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
