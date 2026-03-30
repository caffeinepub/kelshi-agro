import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="story" className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-mango text-xs font-semibold tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="font-display text-black text-3xl md:text-4xl font-bold mb-6 leading-tight">
              The World's Most Coveted Mango, From the Heart of Konkan
            </h2>
            <div className="space-y-4 text-black/80 text-sm leading-relaxed">
              <p>
                The Alphonso mango — known locally as{" "}
                <em className="text-black font-medium">Hapus</em> — has been
                grown in the Ratnagiri and Devgad districts of Maharashtra for
                centuries. Its unique terroir: the laterite soil, coastal
                breeze, and perfect monsoon cycles, creates a mango unlike any
                other in the world.
              </p>
              <p>
                At Kelshi Agro Products, we grow and harvest directly from our
                farms at{" "}
                <span className="text-black font-medium">
                  Kelshi, Taluka Dapoli, District Ratnagiri, Maharashtra
                </span>
                , following traditional, chemical-free cultivation practices.
                Every mango is hand-picked at the precise moment of ripeness,
                packed the same day, and delivered to your doorstep.
              </p>
              <p>
                We believe great food deserves a short supply chain. No cold
                storage. No ripening agents. Just pure, tree-ripened Alphonso
                goodness, delivered with love.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { num: "10+", label: "Acres of Farms" },
                { num: "15,000+", label: "Happy Customers" },
                { num: "100%", label: "GI Certified" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-mango text-2xl font-bold">
                    {stat.num}
                  </div>
                  <div className="text-black/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/assets/generated/mangoes-feature.dim_600x600.jpg"
                alt="Premium Alphonso mangoes"
                loading="lazy"
                className="rounded-3xl shadow-hero w-full max-w-md object-cover"
              />
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -left-4 bg-mango text-white rounded-2xl p-4 shadow-xl">
                <p className="font-display font-bold text-lg leading-none">
                  Ratnagiri
                </p>
                <p className="text-xs font-medium mt-0.5 text-white/80">
                  GI Tagged ✓
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
