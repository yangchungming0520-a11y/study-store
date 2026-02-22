import Link from 'next/link';
import { getProduct } from '@/lib/products';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);

  if (!product) {
    return (
      <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-6 text-rose-100">
        <h1 className="text-xl font-semibold">Product not found</h1>
        <p className="mt-2 text-sm">This pack may have been removed or renamed.</p>
        <Link href="/browse" className="mt-4 inline-block text-sm font-medium text-rose-200 underline">
          Back to catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-sky-300">{product.category}</p>
        <h1 className="text-3xl font-bold text-white">{product.title}</h1>
        <p className="text-slate-300">{product.tagline}</p>
        <p className="text-sm text-slate-400">Level: {product.level}</p>
      </section>

      <section className="grid gap-8 rounded-xl border border-slate-800 bg-slate-900/60 p-6 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-white">What&apos;s included</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {product.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-300">Preview bullets</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {product.previewBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-slate-300">{product.sampleText}</p>
          <p className="text-lg font-semibold text-white">{product.priceLabel}</p>
          <a
            href={product.buyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Buy now
          </a>
          <div className="flex flex-wrap gap-2 pt-2">
            {product.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
