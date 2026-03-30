import { motion } from "motion/react";

interface HeroProps {
  onShopNow: () => void;
}

export default function Hero({ onShopNow }: HeroProps) {
  const handleShopNow = () => {
    onShopNow();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F3A28 0%, #1A5235 35%, #7B5C0A 70%, #C47A1E 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-mangoes.dim_1200x700.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Decorative SVG leaves */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="40"
          cy="80"
          rx="30"
          ry="80"
          fill="#4CAF50"
          transform="rotate(-30 40 80)"
        />
        <ellipse
          cx="80"
          cy="40"
          rx="25"
          ry="65"
          fill="#388E3C"
          transform="rotate(-15 80 40)"
        />
        <ellipse
          cx="20"
          cy="140"
          rx="20"
          ry="55"
          fill="#2E7D32"
          transform="rotate(-45 20 140)"
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="160"
          cy="120"
          rx="30"
          ry="80"
          fill="#4CAF50"
          transform="rotate(30 160 120)"
        />
        <ellipse
          cx="120"
          cy="160"
          rx="25"
          ry="65"
          fill="#388E3C"
          transform="rotate(15 120 160)"
        />
        <ellipse
          cx="180"
          cy="60"
          rx="20"
          ry="55"
          fill="#2E7D32"
          transform="rotate(45 180 60)"
        />
      </svg>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-mango text-xs font-semibold tracking-[0.3em] uppercase mb-4"
        >
          The King of Fruits
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          Fresh Alphonso Mangoes,{" "}
          <span className="italic text-yellow-200">Delivered</span> to Your
          Door.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Sourced directly from our farms at Kelshi, Taluka Dapoli, District
          Ratnagiri, Maharashtra. Sweet, saffron-hued, and naturally ripened.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <button
            type="button"
            onClick={handleShopNow}
            className="bg-mango hover:bg-mango-light text-white font-semibold px-10 py-4 rounded-full transition-all shadow-hero hover:shadow-xl hover:-translate-y-0.5 text-base"
            data-ocid="hero.primary_button"
          >
            Shop Now
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm"
        >
          <span className="flex items-center gap-2">
            <span>🌿</span> Kelshi, Dapoli, Ratnagiri
          </span>
          <span className="flex items-center gap-2">
            <span>🚚</span> Free delivery above ₹999
          </span>
          <span className="flex items-center gap-2">
            <span>⭐</span> 4.9/5 from 500+ customers
          </span>
        </motion.div>
      </div>
    </section>
  );
}
