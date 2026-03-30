import { motion } from "motion/react";

export default function FarmGallery() {
  const images = [
    {
      src: "/assets/uploads/ripped_color_mangoes-019d3d8d-23ed-766a-9f54-41920e5eb394-2.jpg",
      caption: "Fresh Alphonso mangoes, naturally ripened",
      alt: "Dozen Alphonso mangoes in a box with straw",
    },
    {
      src: "/assets/uploads/internal_cut_mango-019d3d8d-2294-773d-b9cc-a695758e0d50-1.jpg",
      caption: "Rich saffron-orange pulp — pure Hapus",
      alt: "Cut mango showing rich orange pulp",
    },
    {
      src: "/assets/img-20260328-wa0040_crop-019d3e2a-c8fd-7713-9982-913ba358cc3e.jpg",
      caption: "Assal Hapus — Authentic Alphonso from Kelshi Agro Products",
      alt: "Kelshi Agro Products promotional photo showing mangoes and cut pulp",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-[#fdfaf5]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[#e07b00] mb-2 block">
            Real Photos
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#b83a00" }}
          >
            From Our Farm
          </h2>
          <p className="mt-3 text-gray-600 text-base max-w-xl mx-auto">
            Straight from our orchards in Kelshi, Ratnagiri — no filters, no
            staging.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              className="overflow-hidden rounded-2xl shadow-md bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-72 object-cover"
              />
              <figcaption className="px-5 py-4 text-gray-800 text-sm font-medium text-center">
                {img.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
