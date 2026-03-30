import { PRODUCTS } from "@/constants/products";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-mango text-xs font-semibold tracking-widest uppercase mb-2">
            100% Ratnagiri GI Tagged
          </p>
          <h2 className="font-display text-gray-900 text-3xl md:text-4xl font-bold">
            Fresh Harvest Collection
          </h2>
          <p className="text-gray-600 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
            Hand-picked at peak ripeness and delivered within 24 hours of
            dispatch from our farms at Kelshi, Taluka Dapoli, District
            Ratnagiri, Maharashtra. Sold by the dozen.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="products.list"
        >
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: "🌿",
              title: "100% Organic",
              desc: "No pesticides, no chemicals",
            },
            {
              icon: "📦",
              title: "Careful Packaging",
              desc: "Padded box to prevent bruising",
            },
            {
              icon: "🚀",
              title: "Express Delivery",
              desc: "Ships within 24 hours",
            },
            {
              icon: "✅",
              title: "Quality Guarantee",
              desc: "Full refund if not satisfied",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-4 rounded-2xl bg-white border border-border shadow-sm"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900 text-sm mb-1">
                {item.title}
              </div>
              <div className="text-gray-600 text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
