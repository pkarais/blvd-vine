import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types';

export const ShopPage = () => {
  const { products } = useShop();

  // Filter out Clergy items to keep them exclusive to the Clergy Collection page
  const shopProducts = products.filter((product: Product) => product.category !== 'Clergy');

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-gray-900 mb-2">Shop</h2>
        <div className="w-8 h-0.5 bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
        {shopProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};