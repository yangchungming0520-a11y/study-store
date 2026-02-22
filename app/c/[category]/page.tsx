import Link from 'next/link';
import { categories, getProductsByCategory } from '@/lib/products';

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categories.find((item) => item.slug === params.category);
  const products = getProductsByCategory(params.category);

  if (!category) {
    return (
      <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-6 text-rose-100">
        <h1 className="text-xl font-semibold">Category not found</h1>
        <p className="mt-2 text-sm">Please check the URL or return to browse.</p>
        <Link href="/browse" className="mt-4 inline-block text-sm font-medium text-rose-200 underline">
          Back to browse
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm uppercase tracking-wide text-sky-300">Category</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{category.label}</h1>
        <p className="mt-2 max-w-2xl text-slate-300">{category.description}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.slug} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-lg font-semibold text-white">{product.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{product.tagline}</p>
            <Link href={`/p/${product.slug}`} className="mt-4 inline-block text-sm font-medium text-sky-300 hover:text-sky-200">
              View details →
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
