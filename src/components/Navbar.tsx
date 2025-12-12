import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import type { CartItem } from '../types';

export const Navbar = () => {
  const { cart, toggleCart } = useShop();
  
  const itemCount = cart.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Announcement Bar */}
      <Link to="/" className="block bg-black text-white text-[10px] md:text-xs font-bold tracking-widest text-center py-2 px-4 uppercase hover:bg-gray-900 transition-colors">
        The New Collection Is Out Now!
      </Link>

      {/* Main Nav */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
          
          {/* Mobile Menu Icon (Hidden on Desktop) */}
          <button className="md:hidden text-gray-900">
            <Menu className="w-6 h-6" />
          </button>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-widest text-gray-500 uppercase">
            <Link to="/" className="text-black hover:text-gray-600 transition-colors">Shop</Link>
            <Link to="/about" className="hover:text-black transition-colors">About Us</Link>
            <Link to="/clergy-collection" className="hover:text-black transition-colors">Clergy Collection</Link>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <Link to="/" className="flex items-center justify-center group">
                <img 
                    src="/logo.png" 
                    alt="BLVD & VINE" 
                    className="h-16 md:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-5 md:space-x-6">
            <Link to="/account" className="text-gray-900 hover:text-gray-600">
              <User className="w-5 h-5 md:w-6 md:h-6 stroke-1" />
            </Link>
            <Link to="/search" className="text-gray-900 hover:text-gray-600 hidden md:block">
              <Search className="w-5 h-5 md:w-6 md:h-6 stroke-1" />
            </Link>
            <button 
                onClick={toggleCart}
                className="text-gray-900 hover:text-gray-600 relative"
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 stroke-1" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Secondary Nav for Mobile */}
      <div className="md:hidden flex flex-col items-center py-3 border-b border-gray-100 gap-3">
        <div className="flex gap-6">
            <Link to="/" className="text-xs font-bold uppercase tracking-widest text-gray-900">Shop</Link>
            <Link to="/about" className="text-xs font-bold uppercase tracking-widest text-gray-500">About Us</Link>
        </div>
        <Link to="/clergy-collection" className="text-xs font-bold uppercase tracking-widest text-gray-500">Clergy Collection</Link>
      </div>
    </header>
  );
};