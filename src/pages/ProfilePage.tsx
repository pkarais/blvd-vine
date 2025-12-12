

export const ProfilePage = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-8">Login</h1>
      
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demo login only.'); }}>
        <input 
            type="email" 
            placeholder="Email" 
            className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:uppercase placeholder:text-xs" 
        />
        <input 
            type="password" 
            placeholder="Password" 
            className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:uppercase placeholder:text-xs" 
        />
        
        <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Sign In
        </button>
      </form>

      <div className="mt-6 flex flex-col gap-2">
        <a href="#" className="text-xs text-gray-500 hover:text-black underline">Forgot your password?</a>
        <a href="#" className="text-xs text-gray-500 hover:text-black underline">Create account</a>
      </div>
    </div>
  );
};