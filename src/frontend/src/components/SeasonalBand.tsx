import { MONTHS, PEAK_MONTHS } from "@/constants/products";
import { motion } from "motion/react";

export default function SeasonalBand() {
  return (
    <section
      className="py-16 px-4"
      style={{ backgroundColor: "#c45000" }}
      id="season"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-black text-2xl md:text-3xl font-semibold tracking-wider uppercase">
            Seasonal Availability
          </h2>
          <p className="text-black/80 mt-3 text-sm">
            Alphonso mangoes are a precious seasonal treasure — available only
            during peak harvest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-black/30 rounded-full" />
          {/* Apr (index 3) to May (index 4) — spans from 25% to ~50% */}
          <div
            className="absolute top-5 h-0.5 rounded-full"
            style={{ left: "25%", right: "50%", backgroundColor: "#1a1a1a" }}
          />

          {/* Month markers */}
          <div className="flex justify-between relative">
            {MONTHS.map((month) => {
              const isPeak = PEAK_MONTHS.includes(month);
              return (
                <div key={month} className="flex flex-col items-center gap-3">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 z-10 transition-all ${
                      isPeak ? "scale-125" : "border-black/40"
                    }`}
                    style={
                      isPeak
                        ? { backgroundColor: "#1a1a1a", borderColor: "#1a1a1a" }
                        : { backgroundColor: "#c45000" }
                    }
                  />
                  <span
                    className={`text-xs font-medium transition-all ${
                      isPeak ? "font-bold" : "text-black/60"
                    }`}
                    style={isPeak ? { color: "#1a1a1a" } : {}}
                  >
                    {month}
                  </span>
                  {isPeak && (
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full border"
                      style={{
                        color: "#1a1a1a",
                        backgroundColor: "rgba(0,0,0,0.1)",
                        borderColor: "rgba(0,0,0,0.3)",
                      }}
                    >
                      Available
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-black/80 text-sm mt-10"
        >
          🌸 Pre-orders for the{" "}
          <span className="font-semibold text-black">
            April 1st – May 31st harvest
          </span>{" "}
          are now open.
        </motion.p>
      </div>
    </section>
  );
}
