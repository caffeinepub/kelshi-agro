import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/CartContext";
import { CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919422120121";
const UPI_QR_IMAGE =
  "/assets/googlepay_qr-019d3de7-da5a-7558-8652-073053df73ae.png";

const PUNE_PCMC_KEYWORDS = [
  "pune",
  "pcmc",
  "pimpri",
  "chinchwad",
  "pimpri-chinchwad",
  "wakad",
  "hinjewadi",
  "baner",
  "aundh",
  "kothrud",
  "hadapsar",
  "viman nagar",
  "kalyani nagar",
  "kharadi",
  "shivaji nagar",
  "deccan",
  "swargate",
  "bibwewadi",
  "kondhwa",
  "undri",
  "katraj",
  "warje",
  "paud",
  "bavdhan",
  "pashan",
  "sus",
  "nibm",
  "wanowrie",
  "lohegaon",
  "dhanori",
  "dighi",
  "bhosari",
  "moshi",
  "dehu road",
  "talegaon",
];

function isPunePCMC(address: string): boolean {
  const lower = address.toLowerCase();
  return PUNE_PCMC_KEYWORDS.some((kw) => lower.includes(kw));
}

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  address: string;
}

type Step = "form" | "payment" | "done";

const PAYMENT_OPTIONS = [
  {
    id: "gpay",
    label: "Google Pay",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png",
    upiId: "9422120121@upi",
  },
  {
    id: "paytm",
    label: "Paytm",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png",
    upiId: "9422120121@paytm",
  },
  {
    id: "phonepe",
    label: "PhonePe",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/PhonePe_Logo.svg/512px-PhonePe_Logo.svg.png",
    upiId: "9422120121@ybl",
  },
  {
    id: "upi",
    label: "Other UPI",
    icon: "",
    upiId: "9422120121@upi",
  },
];

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clear } = useCart();
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [step, setStep] = useState<Step>("form");
  const [selectedPayment, setSelectedPayment] = useState("gpay");
  const [orderNumber, setOrderNumber] = useState("");

  const totalBoxes = items.reduce((sum, i) => sum + i.quantity, 0);
  const inPunePCMC = isPunePCMC(form.address);
  const delivery =
    form.address.trim() === "" ? 0 : inPunePCMC ? 0 : totalBoxes * 200;
  const grandTotal = totalPrice + delivery;

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone))
      errs.phone = "Valid 10-digit Indian phone required";
    if (!form.address.trim()) errs.address = "Delivery address is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const num = `KAP-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setOrderNumber(num);
    setStep("payment");
  };

  const buildWhatsAppMessage = () => {
    const itemLines = items
      .map(
        (i) =>
          `  • ${i.product.name} × ${i.quantity} = ₹${i.product.price * i.quantity}`,
      )
      .join("%0A");
    const payLabel =
      PAYMENT_OPTIONS.find((p) => p.id === selectedPayment)?.label ??
      selectedPayment;
    const deliveryNote = inPunePCMC
      ? "FREE (Pune / PCMC)"
      : `₹${delivery} (₹200/box × ${totalBoxes} box${totalBoxes > 1 ? "es" : ""})`;
    return `🥭 *New Order from Kelshi Agro Products*%0AOrder No: *${orderNumber}*%0A%0A*Customer Details:*%0AName: ${form.name}%0APhone: ${form.phone}%0AAddress: ${form.address}%0A%0A*Items Ordered:*%0A${itemLines}%0A%0ADelivery: ${deliveryNote}%0A*Total Amount: ₹${grandTotal}*%0A%0APayment Method: ${payLabel}%0A%0APlease confirm and share payment details. Thank you! 🙏`;
  };

  const handleWhatsApp = () => {
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    clear();
    setStep("done");
  };

  const handleClose = () => {
    setStep("form");
    setForm({ name: "", phone: "", address: "" });
    setErrors({});
    setOrderNumber("");
    onClose();
  };

  const selectedOption = PAYMENT_OPTIONS.find((p) => p.id === selectedPayment)!;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="max-w-lg bg-cream overflow-y-auto max-h-[90vh]"
        data-ocid="checkout.dialog"
      >
        <DialogHeader>
          <DialogTitle className="font-display text-black text-xl">
            {step === "done"
              ? "Order Confirmed! 🥭"
              : step === "payment"
                ? "Choose Payment Method"
                : "Complete Your Order"}
          </DialogTitle>
        </DialogHeader>

        {/* STEP: DONE */}
        {step === "done" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-4"
            data-ocid="checkout.success_state"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="font-display text-black text-2xl font-bold">
              Thank You!
            </h3>
            <p className="text-black">
              Your order has been sent to WhatsApp. We'll confirm shortly.
            </p>
            <div className="bg-white rounded-xl p-4 border border-border">
              <p className="text-xs text-black uppercase tracking-wider mb-1">
                Order Number
              </p>
              <p className="font-bold text-black text-lg">{orderNumber}</p>
            </div>
            <Button
              onClick={handleClose}
              className="bg-mango hover:bg-mango-light text-white rounded-full font-semibold w-full"
              data-ocid="checkout.close_button"
            >
              Continue Shopping
            </Button>
          </motion.div>
        )}

        {/* STEP: PAYMENT */}
        {step === "payment" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Order summary */}
            <div className="bg-white rounded-xl p-4 border border-border space-y-2">
              <p className="font-semibold text-black text-sm mb-2">
                Order Summary
              </p>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between text-sm"
                >
                  <span className="text-black">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="font-medium text-black">
                    ₹{item.product.price * item.quantity}
                  </span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-black">Delivery</span>
                <span
                  className={
                    inPunePCMC
                      ? "text-green-600 font-medium"
                      : "font-medium text-black"
                  }
                >
                  {inPunePCMC
                    ? "FREE (Pune / PCMC)"
                    : `₹${delivery} (₹200/box)`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-black">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            {/* UPI QR Code */}
            <div className="flex flex-col items-center gap-2 py-2">
              <p className="text-sm font-semibold text-black">
                Scan QR Code to Pay
              </p>
              <p className="text-xs text-black text-center">
                Works with GPay, Paytm, PhonePe &amp; any UPI app
              </p>
              <div className="mt-1 p-3 bg-white rounded-2xl border border-gray-200 shadow-md">
                <img
                  src={UPI_QR_IMAGE}
                  alt="UPI QR Code — scan to pay"
                  className="w-48 h-48 object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Payment method selection */}
            <p className="text-sm font-medium text-black">
              Or select your UPI app
            </p>
            <div className="grid grid-cols-2 gap-3">
              {PAYMENT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedPayment(opt.id)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                    selectedPayment === opt.id
                      ? "border-orange-500 bg-orange-50"
                      : "border-border bg-white hover:border-orange-300"
                  }`}
                  data-ocid="checkout.button"
                >
                  {opt.icon ? (
                    <img
                      src={opt.icon}
                      alt={opt.label}
                      className="h-8 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-2xl">📱</span>
                  )}
                  <span className="text-xs font-semibold text-black">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>

            {/* UPI instructions */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 space-y-2">
              <p className="text-sm font-semibold text-black">
                How to pay via {selectedOption.label}
              </p>
              <ol className="text-xs text-black space-y-1 list-decimal list-inside">
                <li>Open {selectedOption.label} on your phone</li>
                <li>
                  Send <strong>₹{grandTotal}</strong> to UPI ID:{" "}
                  <strong>{selectedOption.upiId}</strong>
                </li>
                <li>
                  Note your order number <strong>{orderNumber}</strong> in the
                  payment remarks
                </li>
                <li>Click the WhatsApp button below to confirm your order</li>
              </ol>
            </div>

            {/* WhatsApp button */}
            <Button
              onClick={handleWhatsApp}
              className="w-full text-white rounded-full font-semibold flex items-center justify-center gap-2 text-base py-6"
              style={{ backgroundColor: "#25D366" }}
              data-ocid="checkout.whatsapp_button"
            >
              <MessageCircle className="w-5 h-5" />
              Confirm Order on WhatsApp
            </Button>
            <p className="text-center text-xs text-black">
              Clicking above opens WhatsApp with your order details pre-filled.
            </p>
            <button
              type="button"
              onClick={() => setStep("form")}
              className="w-full text-sm text-black hover:text-gray-700 underline"
            >
              ← Back to details
            </button>
          </motion.div>
        )}

        {/* STEP: FORM */}
        {step === "form" && (
          <form onSubmit={handleFormSubmit} className="space-y-4" noValidate>
            {/* Delivery info banner */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-black">
              🚚 <strong>Free delivery</strong> within Pune &amp; PCMC region.
              Outside Pune/PCMC: <strong>₹200 per box</strong>.
            </div>

            <div className="bg-white rounded-xl p-4 border border-border space-y-2">
              <p className="font-semibold text-black text-sm mb-2">
                Order Summary
              </p>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex justify-between text-sm"
                >
                  <span className="text-black">
                    {item.product.name} × {item.quantity}
                  </span>
                  <span className="font-medium text-black">
                    ₹{item.product.price * item.quantity}
                  </span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-black">Delivery</span>
                <span
                  className={
                    form.address.trim() === ""
                      ? "text-black"
                      : inPunePCMC
                        ? "text-green-600 font-medium"
                        : "font-medium text-black"
                  }
                >
                  {form.address.trim() === ""
                    ? "Calculated from address"
                    : inPunePCMC
                      ? "FREE (Pune / PCMC)"
                      : `₹${delivery} (₹200 × ${totalBoxes} box${totalBoxes > 1 ? "es" : ""})`}
                </span>
              </div>
              <div className="flex justify-between font-bold text-black">
                <span>Total</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="name" className="text-black text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm((p) => ({ ...p, name: e.target.value }))
                }
                placeholder="Rahul Sharma"
                className="bg-white border-border text-black placeholder:text-gray-500"
                autoComplete="name"
                name="name"
                data-ocid="checkout.input"
              />
              {errors.name && (
                <p
                  className="text-red-500 text-xs"
                  data-ocid="checkout.error_state"
                >
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="phone" className="text-black text-sm font-medium">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((p) => ({ ...p, phone: e.target.value }))
                }
                placeholder="9876543210"
                className="bg-white border-border text-black placeholder:text-gray-500"
                autoComplete="tel"
                name="phone"
                maxLength={10}
                data-ocid="checkout.input"
              />
              {errors.phone && (
                <p
                  className="text-red-500 text-xs"
                  data-ocid="checkout.error_state"
                >
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <Label
                htmlFor="address"
                className="text-black text-sm font-medium"
              >
                Delivery Address
              </Label>
              <Textarea
                id="address"
                value={form.address}
                onChange={(e) =>
                  setForm((p) => ({ ...p, address: e.target.value }))
                }
                placeholder="Flat 4B, Sunshine Apartments, MG Road, Pune - 411001"
                className="bg-white border-border resize-none text-black placeholder:text-gray-500"
                rows={3}
                autoComplete="street-address"
                name="address"
                data-ocid="checkout.textarea"
              />
              {errors.address && (
                <p
                  className="text-red-500 text-xs"
                  data-ocid="checkout.error_state"
                >
                  {errors.address}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-mango hover:bg-mango-light text-white rounded-full font-semibold"
              data-ocid="checkout.submit_button"
            >
              Continue to Payment — ₹{grandTotal}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
