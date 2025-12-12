import { useNavigate } from 'react-router-dom';

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="bg-black text-white py-24 md:py-32 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6 text-brand-pink uppercase">About Us</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base font-medium tracking-wide uppercase leading-relaxed text-gray-300">
            BLVDNVINE is more than just a brand. It's a lifestyle defined by bold aesthetics and uncompromising quality.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 aspect-[4/5] flex items-center justify-center">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Image Placeholder</span>
            </div>
            <div className="space-y-6">
                <h2 className="text-2xl font-bold uppercase tracking-widest">Our Story</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Born from the streets and inspired by modern culture, BLVDNVINE represents the intersection of luxury and everyday wear. We strive to create pieces that speak to individuality and confidence. Our mission is to provide high-quality apparel that empowers you to express yourself without boundaries.
                </p>
                <div className="pt-4">
                    <button 
                        onClick={() => navigate('/')}
                        className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors"
                    >
                        Shop Collection
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};