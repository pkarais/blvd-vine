export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description?: string;
  sizes?: string[];
  tag?: 'ON SALE' | 'SOLD OUT' | 'NEW ARRIVAL' | 'LIMITED' | null;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, size?: string) => void;
  removeFromCart: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, size: string | undefined, quantity: number) => void;
  toggleCart: () => void;
  cartTotal: number;
  checkout: () => Promise<void>;
}
