import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const FOOTER_LINKS: Record<
  string,
  { label: string; href: string; external?: boolean }[]
> = {
  "Our Story": [
    { label: "About Us", href: "#story" },
    { label: "Our Farms", href: "#gallery" },
    { label: "The Ratnagiri Region", href: "#story" },
    { label: "Sustainability", href: "#story" },
  ],
  Quality: [
    { label: "GI Certification", href: "#products" },
    { label: "How We Pack", href: "#products" },
    { label: "Freshness Promise", href: "#products" },
    { label: "Lab Reports", href: "#products" },
  ],
  Shipping: [
    { label: "Delivery Areas", href: "#products" },
    { label: "Shipping Times", href: "#products" },
    { label: "Tracking", href: "#products" },
    { label: "Bulk Orders", href: "#products" },
  ],
  FAQ: [
    { label: "How to Ripen", href: "#story" },
    { label: "Storage Tips", href: "#story" },
    { label: "Returns", href: "#returns" },
    { label: "Contact Us", href: "https://wa.me/919422120121", external: true },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥭</span>
              <div>
                <div
                  className="font-display font-bold text-base"
                  style={{
                    background:
                      "linear-gradient(90deg, #c0392b 0%, #e67e22 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Kelshi Agro Products
                </div>
                <div className="text-[10px] tracking-widest uppercase text-gray-400">
                  Est. 2006
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-500 mb-4">
              Premium Alphonso mangoes from our farms at Kelshi, Taluka Dapoli,
              District Ratnagiri, Maharashtra.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mango transition-colors"
                data-ocid="footer.link"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mango transition-colors"
                data-ocid="footer.link"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mango transition-colors"
                data-ocid="footer.link"
              >
                <SiX className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-gray-900 font-semibold text-sm mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-500 hover:text-mango transition-colors"
                      data-ocid="footer.link"
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Us */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm mb-4">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  📍 Farm
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Kelshi Agro Products
                  <br />
                  Behind Mahalaxmi Temple Kelshi,
                  <br />
                  Dapoli, Maharashtra - 415717
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  📍 Pune
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Kelshi Agro Products
                  <br />
                  Pimple Saudagar,
                  <br />
                  Pune, Maharashtra - 411027
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  📞 Contact
                </p>
                <a
                  href="tel:9422120121"
                  className="text-xs text-gray-600 hover:text-mango transition-colors"
                  data-ocid="footer.link"
                >
                  9422120121
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {year} Kelshi Agro Products. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              className="text-gray-400 hover:text-mango transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
