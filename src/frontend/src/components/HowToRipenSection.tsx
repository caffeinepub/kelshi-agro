export default function HowToRipenSection() {
  return (
    <section id="how-to-ripen" className="py-16 px-4 bg-amber-50">
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl font-bold mb-2 text-center"
          style={{
            background: "linear-gradient(90deg, #c0392b 0%, #e67e22 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          🥭 How to Ripen Your Mangoes
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          Follow these simple steps for the best results
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
            <div className="text-3xl mb-3">🌑</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Avoid Sunlight &amp; Moisture
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Keep the mango box away from direct sunlight and wet areas. Excess
              heat and moisture can spoil the mangoes before they ripen
              properly.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
            <div className="text-3xl mb-3">🧺</div>
            <h3 className="font-semibold text-gray-900 mb-2">Cover the Box</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Cover the box with a thick cloth, jute sack, or bedsheet. This
              helps retain the natural warmth needed for even ripening.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 md:col-span-2">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-semibold text-gray-900 mb-2">Ripening Time</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Raw mangoes take <strong>7 to 8 days</strong> to start ripening
              from the day of harvesting. Please be patient — the wait is worth
              it!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
