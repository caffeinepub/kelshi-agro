import { c as createLucideIcon, j as jsxRuntimeExports, R as Root$1, C as Content, a as cn, b as Close, X, T as Title, P as Portal, O as Overlay, r as reactExports, d as Primitive, u as useCart, m as motion, B as Button, S as Separator } from "./index-Cu783V30.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}
var NAME = "Label";
var Label$1 = reactExports.forwardRef((props, forwardedRef) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.label,
    {
      ...props,
      ref: forwardedRef,
      onMouseDown: (event) => {
        var _a;
        const target = event.target;
        if (target.closest("button, input, select, textarea")) return;
        (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
      }
    }
  );
});
Label$1.displayName = NAME;
var Root = Label$1;
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const WHATSAPP_NUMBER = "919422120121";
const UPI_QR_IMAGE = "/assets/googlepay_qr-019d3de7-da5a-7558-8652-073053df73ae.png";
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
  "talegaon"
];
function isPunePCMC(address) {
  const lower = address.toLowerCase();
  return PUNE_PCMC_KEYWORDS.some((kw) => lower.includes(kw));
}
const PAYMENT_OPTIONS = [
  {
    id: "gpay",
    label: "Google Pay",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png",
    upiId: "9422120121@upi"
  },
  {
    id: "paytm",
    label: "Paytm",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png",
    upiId: "9422120121@paytm"
  },
  {
    id: "phonepe",
    label: "PhonePe",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/PhonePe_Logo.svg/512px-PhonePe_Logo.svg.png",
    upiId: "9422120121@ybl"
  },
  {
    id: "upi",
    label: "Other UPI",
    icon: "",
    upiId: "9422120121@upi"
  }
];
function CheckoutModal({ open, onClose }) {
  const { items, totalPrice, clear } = useCart();
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    address: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [step, setStep] = reactExports.useState("form");
  const [selectedPayment, setSelectedPayment] = reactExports.useState("gpay");
  const [orderNumber, setOrderNumber] = reactExports.useState("");
  const totalBoxes = items.reduce((sum, i) => sum + i.quantity, 0);
  const inPunePCMC = isPunePCMC(form.address);
  const delivery = form.address.trim() === "" ? 0 : inPunePCMC ? 0 : totalBoxes * 200;
  const grandTotal = totalPrice + delivery;
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone))
      errs.phone = "Valid 10-digit Indian phone required";
    if (!form.address.trim()) errs.address = "Delivery address is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const num = `KAP-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setOrderNumber(num);
    setStep("payment");
  };
  const buildWhatsAppMessage = () => {
    var _a;
    const itemLines = items.map(
      (i) => `  • ${i.product.name} × ${i.quantity} = ₹${i.product.price * i.quantity}`
    ).join("%0A");
    const payLabel = ((_a = PAYMENT_OPTIONS.find((p) => p.id === selectedPayment)) == null ? void 0 : _a.label) ?? selectedPayment;
    const deliveryNote = inPunePCMC ? "FREE (Pune / PCMC)" : `₹${delivery} (₹200/box × ${totalBoxes} box${totalBoxes > 1 ? "es" : ""})`;
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
  const selectedOption = PAYMENT_OPTIONS.find((p) => p.id === selectedPayment);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && handleClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DialogContent,
    {
      className: "max-w-lg bg-cream overflow-y-auto max-h-[90vh]",
      "data-ocid": "checkout.dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display text-black text-xl", children: step === "done" ? "Order Confirmed! 🥭" : step === "payment" ? "Choose Payment Method" : "Complete Your Order" }) }),
        step === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            className: "text-center py-8 space-y-4",
            "data-ocid": "checkout.success_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-16 h-16 text-green-500 mx-auto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-black text-2xl font-bold", children: "Thank You!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-black", children: "Your order has been sent to WhatsApp. We'll confirm shortly." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-4 border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-black uppercase tracking-wider mb-1", children: "Order Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-black text-lg", children: orderNumber })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-5 h-5 text-blue-500 mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-black", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Tracking details / link" }),
                  " will be shared via WhatsApp once your order is dispatched. 📦"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: handleClose,
                  className: "bg-mango hover:bg-mango-light text-white rounded-full font-semibold w-full",
                  "data-ocid": "checkout.close_button",
                  children: "Continue Shopping"
                }
              )
            ]
          }
        ),
        step === "payment" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-4 border border-border space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-black text-sm mb-2", children: "Order Summary" }),
                items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex justify-between text-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-black", children: [
                        item.product.name,
                        " × ",
                        item.quantity
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-black", children: [
                        "₹",
                        item.product.price * item.quantity
                      ] })
                    ]
                  },
                  item.product.id
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black", children: "Delivery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: inPunePCMC ? "text-green-600 font-medium" : "font-medium text-black",
                      children: inPunePCMC ? "FREE (Pune / PCMC)" : `₹${delivery} (₹200/box)`
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-black", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "₹",
                    grandTotal
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-black", children: "Scan QR Code to Pay" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-black text-center", children: "Works with GPay, Paytm, PhonePe & any UPI app" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 p-3 bg-white rounded-2xl border border-gray-200 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: UPI_QR_IMAGE,
                    alt: "UPI QR Code — scan to pay",
                    className: "w-48 h-48 object-contain",
                    loading: "lazy"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-black", children: "Or select your UPI app" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: PAYMENT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setSelectedPayment(opt.id),
                  className: `flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all ${selectedPayment === opt.id ? "border-orange-500 bg-orange-50" : "border-border bg-white hover:border-orange-300"}`,
                  "data-ocid": "checkout.button",
                  children: [
                    opt.icon ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: opt.icon,
                        alt: opt.label,
                        className: "h-8 w-auto object-contain"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📱" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-black", children: opt.label })
                  ]
                },
                opt.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-xl p-4 space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-black", children: [
                  "How to pay via ",
                  selectedOption.label
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "text-xs text-black space-y-1 list-decimal list-inside", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "Open ",
                    selectedOption.label,
                    " on your phone"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "Send ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                      "₹",
                      grandTotal
                    ] }),
                    " to UPI ID:",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: selectedOption.upiId })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                    "Note your order number ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: orderNumber }),
                    " in the payment remarks"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Click the WhatsApp button below to confirm your order" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: handleWhatsApp,
                  className: "w-full text-white rounded-full font-semibold flex items-center justify-center gap-2 text-base py-6",
                  style: { backgroundColor: "#25D366" },
                  "data-ocid": "checkout.whatsapp_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5" }),
                    "Confirm Order on WhatsApp"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-black", children: "Clicking above opens WhatsApp with your order details pre-filled." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setStep("form"),
                  className: "w-full text-sm text-black hover:text-gray-700 underline",
                  children: "← Back to details"
                }
              )
            ]
          }
        ),
        step === "form" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-4", noValidate: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-3 text-xs text-black", children: [
            "🚚 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Free delivery" }),
            " within Pune & PCMC region. Outside Pune/PCMC: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "₹200 per box" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-4 border border-border space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-black text-sm mb-2", children: "Order Summary" }),
            items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-black", children: [
                    item.product.name,
                    " × ",
                    item.quantity
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-black", children: [
                    "₹",
                    item.product.price * item.quantity
                  ] })
                ]
              },
              item.product.id
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-black", children: "Delivery" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: form.address.trim() === "" ? "text-black" : inPunePCMC ? "text-green-600 font-medium" : "font-medium text-black",
                  children: form.address.trim() === "" ? "Calculated from address" : inPunePCMC ? "FREE (Pune / PCMC)" : `₹${delivery} (₹200 × ${totalBoxes} box${totalBoxes > 1 ? "es" : ""})`
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-black", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "₹",
                grandTotal
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", className: "text-black text-sm font-medium", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "name",
                value: form.name,
                onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                placeholder: "Rahul Sharma",
                className: "bg-white border-border text-black placeholder:text-gray-500",
                autoComplete: "name",
                name: "name",
                "data-ocid": "checkout.input"
              }
            ),
            errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-red-500 text-xs",
                "data-ocid": "checkout.error_state",
                children: errors.name
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "phone", className: "text-black text-sm font-medium", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "phone",
                type: "tel",
                value: form.phone,
                onChange: (e) => setForm((p) => ({ ...p, phone: e.target.value })),
                placeholder: "9876543210",
                className: "bg-white border-border text-black placeholder:text-gray-500",
                autoComplete: "tel",
                name: "phone",
                maxLength: 10,
                "data-ocid": "checkout.input"
              }
            ),
            errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-red-500 text-xs",
                "data-ocid": "checkout.error_state",
                children: errors.phone
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "address",
                className: "text-black text-sm font-medium",
                children: "Delivery Address"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "address",
                value: form.address,
                onChange: (e) => setForm((p) => ({ ...p, address: e.target.value })),
                placeholder: "Flat 4B, Sunshine Apartments, MG Road, Pune - 411001",
                className: "bg-white border-border resize-none text-black placeholder:text-gray-500",
                rows: 3,
                autoComplete: "street-address",
                name: "address",
                "data-ocid": "checkout.textarea"
              }
            ),
            errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-red-500 text-xs",
                "data-ocid": "checkout.error_state",
                children: errors.address
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "submit",
              className: "w-full bg-mango hover:bg-mango-light text-white rounded-full font-semibold",
              "data-ocid": "checkout.submit_button",
              children: [
                "Continue to Payment — ₹",
                grandTotal
              ]
            }
          )
        ] })
      ]
    }
  ) });
}
export {
  CheckoutModal as default
};
