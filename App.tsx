import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './src/context/ShopContext';
import { Navbar } from './src/components/Navbar';
import { ShopPage } from './src/pages/ShopPage';
import { CartDrawer } from './src/components/CartDrawer';
import { Footer } from './src/components/Footer';
import { ContactPage } from './src/pages/ContactPage';
import { PrivacyPolicy, TermsOfService } from './src/pages/LegalPages';
import { AboutPage } from './src/pages/AboutPage';
import { ClergyPage } from './src/pages/ClergyPage';
import { ProfilePage } from './src/pages/ProfilePage';
import { SearchPage } from './src/pages/SearchPage';
import { ProductDetailPage } from './src/pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <ShopProvider>
        <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
                <Route path="/" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/clergy-collection" element={<ClergyPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/account" element={<ProfilePage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </ShopProvider>
    </Router>
  );
}

export default App;