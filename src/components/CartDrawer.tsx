import { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import type { CartItem } from '../types';

export const CartDrawer = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal, checkout } = useShop();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    await checkout();
    setIsCheckingOut(false);
  };

  const handleStartShopping = () => {
    toggleCart();
    navigate('/');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl transform transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-sm font-bold uppercase tracking-widest">Cart ({cart.length})</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <p className="text-sm tracking-widest uppercase">Your cart is empty</p>
              <button 
                onClick={handleStartShopping}
                className="text-xs font-bold uppercase border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item: CartItem) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                <div className="w-20 h-20 bg-gray-50 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-1">{item.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>${item.price.toFixed(2)}</span>
                        {item.selectedSize && (
                            <>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span>Size: {item.selectedSize}</span>
                            </>
                        )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200">
                        <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                            className="p-1 hover:bg-gray-50"
                        >
                            <Minus className="w-3 h-3 text-gray-600" />
                        </button>
                        <span className="text-xs w-8 text-center font-medium">{item.quantity}</span>
                        <button 
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                            className="p-1 hover:bg-gray-50"
                        >
                            <Plus className="w-3 h-3 text-gray-600" />
                        </button>
                    </div>
                    <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-[10px] text-gray-400 underline hover:text-black"
                    >
                        Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest">Subtotal</span>
              <span className="text-sm font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-gray-500 mb-4 text-center">Shipping and taxes calculated at checkout.</p>
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isCheckingOut ? 'Processing...' : 'Checkout via Stripe'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};