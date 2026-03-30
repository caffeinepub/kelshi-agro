import AboutSection from "@/components/AboutSection";
import CartDrawer from "@/components/CartDrawer";
import FarmGallery from "@/components/FarmGallery";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import SeasonalBand from "@/components/SeasonalBand";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import { Suspense, lazy, useState } from "react";

const CheckoutModal = lazy(() => import("@/components/CheckoutModal"));

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onCartOpen={() => setCartOpen(true)} />
      <main>
        <Hero onShopNow={() => {}} />
        <SeasonalBand />
        <ProductsSection />
        <FarmGallery />
        <AboutSection />
      </main>
      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => setCheckoutOpen(true)}
      />
      {checkoutOpen && (
        <Suspense fallback={null}>
          <CheckoutModal
            open={checkoutOpen}
            onClose={() => setCheckoutOpen(false)}
          />
        </Suspense>
      )}
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
