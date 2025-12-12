import { useState } from 'react';
import type { FormEvent } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SearchPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // Navigate to shop page for any search term
    navigate('/');
  };

  const handleQuickLink = (term: string) => {
    if (term === 'About Us') {
        navigate('/about');
    } else {
        // For merchandise categories, navigate to the main shop
        navigate('/');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <form onSubmit={handleSearch} className="relative">
        <input 
            type="text" 
            placeholder="SEARCH PRODUCTS..." 
            className="w-full border-b-2 border-black py-4 text-xl md:text-3xl font-bold uppercase tracking-widest placeholder:text-gray-300 focus:outline-none"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <Search className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </form>
      
      <div className="mt-12">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Popular Searches</h3>
        <div className="flex flex-wrap gap-3">
            {['Hoodies', 'About Us', 'Accessories', 'T-Shirts'].map((term) => (
                <button 
                    key={term} 
                    onClick={() => handleQuickLink(term)}
                    className="border border-gray-200 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:border-black hover:bg-black hover:text-white transition-all"
                >
                    {term}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};