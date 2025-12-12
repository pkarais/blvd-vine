

export const ContactPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-black italic tracking-tighter uppercase mb-8 text-center">Contact Us</h1>
      <p className="text-sm text-gray-600 text-center mb-12">
        Have a question about your order or merchandise? Fill out the form below and our team will get back to you as soon as possible.
      </p>

      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('This is a demo form. No message was sent.'); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                <input type="text" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="YOUR NAME" required />
            </div>
            <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                <input type="email" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="YOUR EMAIL" required />
            </div>
        </div>
        
        <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Order Number (Optional)</label>
            <input type="text" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="#12345" />
        </div>

        <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
            <textarea className="w-full border border-gray-200 p-3 text-sm h-32 focus:outline-none focus:border-black transition-colors resize-none" placeholder="HOW CAN WE HELP?" required></textarea>
        </div>

        <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Send Message
        </button>
      </form>

      <div className="mt-16 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Customer Service Hours</h3>
        <p className="text-xs text-gray-500">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
        <p className="text-xs text-gray-500 mt-1">support@blvdnvine.example</p>
      </div>
    </div>
  );
};