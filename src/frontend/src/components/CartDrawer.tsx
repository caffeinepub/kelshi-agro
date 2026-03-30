import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  open,
  onClose,
  onCheckout,
}: CartDrawerProps) {
  const { items, totalItems, totalPrice, increment, decrement, removeItem } =
    useCart();

  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-cream flex flex-col"
        data-ocid="cart.sheet"
      >
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-display text-gray-900 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Your Cart
            {totalItems > 0 && (
              <span className="ml-auto text-sm font-normal text-gray-500">
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          <AnimatePresence>
            {items.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-48 text-center"
                data-ocid="cart.empty_state"
              >
                <span className="text-5xl mb-3">🥭</span>
                <p className="text-gray-900 font-semibold">
                  Your cart is empty
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Add some juicy mangoes!
                </p>
              </motion.div>
            ) : (
              items.map((item) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-3 border border-border shadow-sm"
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.product.gradientFrom} 0%, ${item.product.gradientTo} 100%)`,
                    }}
                  >
                    🥭
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {item.product.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      ₹{item.product.price} each
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => decrement(item.product.id)}
                      className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-border/50 transition-colors"
                      data-ocid="cart.button"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increment(item.product.id)}
                      className="w-7 h-7 rounded-full bg-mango text-white flex items-center justify-center hover:bg-mango-light transition-colors"
                      data-ocid="cart.button"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-gray-900 text-sm">
                      ₹{item.product.price * item.quantity}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-400 hover:text-red-600 mt-1"
                      aria-label="Remove item"
                      data-ocid="cart.delete_button"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-900">₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Delivery</span>
              <span className="font-medium text-green-600">
                {totalPrice >= 999 ? "FREE" : "₹99"}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-gray-900">
              <span>Total</span>
              <span>₹{totalPrice >= 999 ? totalPrice : totalPrice + 99}</span>
            </div>
            <Button
              onClick={() => {
                onClose();
                onCheckout();
              }}
              className="w-full bg-mango hover:bg-mango-light text-white rounded-full font-semibold"
              data-ocid="cart.primary_button"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
