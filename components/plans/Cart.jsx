// components/plans/Cart.jsx
"use client";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import CheckoutButton from "./CheckoutButton";

export default function Cart() {
  const { items, updateQty, removeItem, total, count } = useCart();

  if (count === 0) {
    return (
      <div className="glass-card rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4">
          <ShoppingBag className="h-7 w-7 text-gold-500" />
        </div>
        <h3 className="font-display text-2xl font-semibold mb-2">Your cart is empty</h3>
        <p className="text-muted-foreground">Add a plan above to get started.</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-2xl font-semibold">Your Cart</h3>
        <span className="text-sm text-muted-foreground">{count} item{count > 1 ? "s" : ""}</span>
      </div>

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-4 pb-4 border-b border-gold-500/10 last:border-0">
            <div className="flex-1">
              <div className="font-semibold text-foreground">{item.name} Plan</div>
              <div className="text-sm text-muted-foreground">₹{item.price.toLocaleString("en-IN")}/month</div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="outline" className="h-8 w-8 border-gold-500/20" onClick={() => updateQty(item.id, item.qty - 1)}>
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center font-semibold">{item.qty}</span>
              <Button size="icon" variant="outline" className="h-8 w-8 border-gold-500/20" onClick={() => updateQty(item.id, item.qty + 1)}>
                <Plus className="h-3 w-3" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => removeItem(item.id)}>
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
            <div className="font-semibold text-gold-500 w-28 text-right">₹{(item.price * item.qty).toLocaleString("en-IN")}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gold-500/20 mb-6">
        <span className="text-lg font-semibold">Total</span>
        <span className="font-display text-3xl font-semibold text-gold-gradient">₹{total.toLocaleString("en-IN")}</span>
      </div>

      <CheckoutButton amount={total} items={items} />
    </div>
  );
}
