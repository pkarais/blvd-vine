import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const isSoldOut = product.tag === 'SOLD OUT';

  return (
    <Link to={`/product/${product.id}`} className="group flex flex-col items-center text-center block">
      <div className="relative w-full aspect-square overflow-hidden bg-gray-50 mb-4 cursor-pointer">
        {/* Badge */}
        {product.tag && (
            <span className="absolute top-4 left-4 text-[10px] font-medium tracking-widest text-gray-500 uppercase z-10 bg-white/80 backdrop-blur-sm px-2 py-1">
                {product.tag}
            </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        
        {/* View Product Overlay */}
        {!isSoldOut && (
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    View Details
                </span>
            </div>
        )}
      </div>

      <h3 className="text-xs md:text-[13px] font-bold tracking-widest uppercase mb-2 text-gray-900 group-hover:opacity-60 transition-opacity">
        {product.name}
      </h3>
      
      <div className="text-xs md:text-[13px] tracking-wider font-medium">
        <span className="text-brand-red mr-2">
            ${product.price.toFixed(2)}
        </span>
        {product.originalPrice && (
            <span className="text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
            </span>
        )}
      </div>
    </Link>
  );
};