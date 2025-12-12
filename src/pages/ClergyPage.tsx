import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types';

export const ClergyPage = () => {
  const { products } = useShop();

  // Filter for only Clergy items
  const clergyProducts = products.filter((product: Product) => product.category === 'Clergy');

  return (
    <div className="w-full">
      {/* Optional Hero for the Collection */}
      <div className="bg-gray-100 py-12 md:py-16 text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-black italic tracking-tighter text-gray-900 uppercase mb-2">Clergy Collection</h1>
        <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">Premium Vestments & Attire</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
          {clergyProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};