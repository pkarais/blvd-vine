import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { ShopPage } from './pages/ShopPage';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicy, TermsOfService } from './pages/LegalPages';
import { AboutPage } from './pages/AboutPage';
import { ClergyPage } from './pages/ClergyPage';
import { ProfilePage } from './pages/ProfilePage';
import { SearchPage } from './pages/SearchPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

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
