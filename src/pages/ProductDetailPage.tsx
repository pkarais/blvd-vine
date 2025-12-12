import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, Truck, ShieldCheck } from 'lucide-react';
import type { Product } from '../types';

export const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, addToCart } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [mainImage, setMainImage] = useState<string>('');

  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold uppercase tracking-widest mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-xs font-bold uppercase border-b border-black pb-1 hover:text-gray-600"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      return; // Should be handled by disabled state, but double check
    }
    addToCart(product, selectedSize);
  };

  const isSoldOut = product.tag === 'SOLD OUT';

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Breadcrumb / Back */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Column: Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-50 w-full overflow-hidden">
             <img 
                src={mainImage || product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
             />
          </div>
          {/* Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
                {product.images.map((img: string, idx: number) => (
                    <button 
                        key={idx}
                        onClick={() => setMainImage(img)}
                        className={`aspect-square bg-gray-50 overflow-hidden border-2 transition-all ${mainImage === img ? 'border-black' : 'border-transparent hover:border-gray-200'}`}
                    >
                        <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
          )}
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col">
            <div className="mb-2">
                {product.tag && (
                    <span className="inline-block bg-black text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 mb-3">
                        {product.tag}
                    </span>
                )}
                <h1 className="text-2xl md:text-4xl font-black italic tracking-tighter uppercase leading-none mb-4">
                    {product.name}
                </h1>
                <div className="flex items-center gap-4 text-xl font-medium">
                    <span className="text-brand-red">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                        <span className="text-gray-300 line-through">${product.originalPrice.toFixed(2)}</span>
                    )}
                </div>
            </div>

            <div className="w-12 h-0.5 bg-gray-200 my-8"></div>

            <div className="prose prose-sm max-w-none text-gray-600 mb-10 leading-relaxed">
                <p>{product.description || "No description available."}</p>
            </div>

            {/* Size Selector */}
            {product.sizes && product.sizes.length > 0 && (
                <div className="mb-10">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-900">Select Size</span>
                        {product.category === 'Apparel' && (
                            <button className="text-[10px] text-gray-400 underline hover:text-black uppercase tracking-wider">
                                Size Guide
                            </button>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {product.sizes.map((size: string) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                disabled={isSoldOut}
                                className={`
                                    min-w-[3rem] h-12 px-4 flex items-center justify-center text-xs font-bold transition-all border
                                    ${selectedSize === size 
                                        ? 'bg-black text-white border-black' 
                                        : 'bg-white text-gray-900 border-gray-200 hover:border-black'
                                    }
                                    ${isSoldOut ? 'opacity-50 cursor-not-allowed' : ''}
                                `}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    {!selectedSize && !isSoldOut && (
                         <p className="text-red-500 text-[10px] uppercase font-bold mt-2 tracking-wide">Please select a size</p>
                    )}
                </div>
            )}

            {/* Actions */}
            <div className="mt-auto space-y-4">
                <button
                    onClick={handleAddToCart}
                    disabled={isSoldOut || (!selectedSize && product.sizes && product.sizes.length > 0)}
                    className="w-full bg-black text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-brand-red disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                    {isSoldOut ? 'Sold Out' : 'Add to Cart'}
                </button>
                
                <div className="flex items-center justify-center gap-6 pt-4 text-gray-500">
                    <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Free Shipping over $100</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Secure Checkout</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};