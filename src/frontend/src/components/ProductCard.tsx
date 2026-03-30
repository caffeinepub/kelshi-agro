import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/constants/products";
import { useCart } from "@/context/CartContext";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`, {
      description: `₹${product.price}`,
    });
  };

  const stars = Math.floor(product.rating);
  const hasHalf = product.rating % 1 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-card border border-border overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      data-ocid={`products.item.${index + 1}`}
    >
      {/* Gradient image area */}
      <div
        className="h-44 flex items-center justify-center relative"
        style={{
          background: `linear-gradient(135deg, ${product.gradientFrom} 0%, ${product.gradientTo} 100%)`,
        }}
      >
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-forest text-black text-xs font-semibold border-0">
            {product.badge}
          </Badge>
        )}
        <img
          src="/assets/generated/mango-product.dim_400x400.jpg"
          alt={product.name}
          loading="lazy"
          className="h-32 w-32 object-cover rounded-xl shadow-md mix-blend-multiply"
        />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-gray-900 text-lg mb-0.5">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs font-medium mb-2">{product.unit}</p>
        <p className="text-gray-600 text-xs mb-3 leading-relaxed">
          {product.description}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: stars }).map((_, i) => (
            <Star
              key={`star-full-${product.id}-${i}`}
              className="w-3.5 h-3.5 fill-mango text-mango"
            />
          ))}
          {hasHalf && (
            <Star
              key={`star-half-${product.id}`}
              className="w-3.5 h-3.5 fill-mango/50 text-mango"
            />
          )}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="font-bold text-gray-900 text-xl">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ₹{product.originalPrice}
            </span>
          )}
        </div>

        <Button
          onClick={handleAdd}
          className="mt-auto w-full bg-mango hover:bg-mango-light text-white rounded-full font-semibold border-0 shadow-none"
          data-ocid={`products.button.${index + 1}`}
        >
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}
