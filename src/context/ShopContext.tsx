import { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Product, CartItem, ShopContextType } from '../types';
import { MOCK_PRODUCTS } from '../constants';

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children?: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, size?: string) => {
    setCart((prev) => {
      // Find item with same ID AND same size
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const newCart = [...prev];
        newCart[existingIndex] = {
            ...newCart[existingIndex],
            quantity: newCart[existingIndex].quantity + 1
        };
        return newCart;
      }
      return [...prev, { ...product, quantity: 1, selectedSize: size }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size?: string) => {
    setCart((prev) => prev.filter((item) => !(item.id === productId && item.selectedSize === size)));
  };

  const updateQuantity = (productId: string, size: string | undefined, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        (item.id === productId && item.selectedSize === size) 
            ? { ...item, quantity } 
            : item
      )
    );
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  // STUB: This is where you would connect to Stripe
  const checkout = async () => {
    console.log("Processing checkout with items:", cart);
    // In a real Vercel deployment:
    // 1. Send `cart` to your API route (e.g., /api/checkout_sessions)
    // 2. API creates a Stripe Checkout Session
    // 3. API returns the { url }
    // 4. window.location.href = url;
    
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            alert("This is a demo. In production, this redirects to Stripe Checkout.");
            resolve();
        }, 1000);
    });
  };

  return (
    <ShopContext.Provider
      value={{
        products: MOCK_PRODUCTS,
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        cartTotal,
        checkout,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error('useShop must be used within a ShopProvider');
  return context;
};