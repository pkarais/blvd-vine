import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center gap-8">
        <Link to="/">
            <h2 className="text-2xl font-black italic tracking-tighter text-pink-400 hover:opacity-80 transition-opacity">B&V</h2>
        </Link>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">
            <Link to="/search" className="hover:text-black">Search</Link>
            <Link to="/contact" className="hover:text-black">Contact</Link>
            <Link to="/privacy" className="hover:text-black">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-black">Terms of Service</Link>
        </div>

        <div className="text-[10px] text-gray-400 tracking-wide mt-4">
            &copy; {new Date().getFullYear()} BlvdnVine. Powered by React & Stripe.
        </div>
      </div>
    </footer>
  );
};