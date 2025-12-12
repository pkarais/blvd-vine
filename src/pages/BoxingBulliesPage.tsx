

export const BoxingBulliesPage = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="bg-black text-white py-24 md:py-32 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6 text-brand-pink uppercase">Boxing Bullies</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base font-medium tracking-wide uppercase leading-relaxed text-gray-300">
            Founded by Jake Paul to instill self-confidence, leadership, and courage within the youth through the sport of boxing to fight back against bullying.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 aspect-[4/5] flex items-center justify-center">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Image Placeholder</span>
            </div>
            <div className="space-y-6">
                <h2 className="text-2xl font-bold uppercase tracking-widest">Our Mission</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Boxing Bullies acts as a centralized hub to combat bullying directly. We provide boxing gloves and equipment to underprivileged youth and renovate gyms across the country to provide safe spaces for kids to train.
                </p>
                <div className="pt-4">
                    <button className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red transition-colors">
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};