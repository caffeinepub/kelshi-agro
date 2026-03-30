import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onCartOpen: () => void;
}

const NAV_LINKS = [
  { label: "Shop", href: "#products" },
  { label: "Our Farm", href: "#gallery" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "https://wa.me/919422120121", external: true },
];

export default function Header({ onCartOpen }: HeaderProps) {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 shrink-0"
          data-ocid="nav.link"
        >
          <span className="text-3xl">🥭</span>
          <div className="leading-none">
            <div
              className="font-display font-bold text-lg tracking-tight"
              style={{
                background: "linear-gradient(90deg, #c0392b 0%, #e67e22 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kelshi Agro Products
            </div>
            <div className="text-[10px] tracking-widest text-gray-500 uppercase font-medium">
              Est. 2006
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-800 hover:text-mango transition-colors"
              data-ocid="nav.link"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onCartOpen}
            className="relative p-2 rounded-full hover:bg-border/50 transition-colors"
            aria-label="Open cart"
            data-ocid="cart.open_modal_button"
          >
            <ShoppingCart className="w-5 h-5 text-gray-800" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px] bg-mango text-white border-0 rounded-full">
                {totalItems}
              </Badge>
            )}
          </button>
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-border px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-800 py-1"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.link"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
