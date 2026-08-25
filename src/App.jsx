import React from 'react';
import { useShop } from './context/ShopContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import QuickViewModal from './components/QuickViewModal';
import ToastNotification from './components/ToastNotification';
import BackToTop from './components/BackToTop';

// Pages
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import BoxBuilderPage from './pages/BoxBuilderPage';
import AboutPage from './pages/AboutPage';
import CorporateWeddingPage from './pages/CorporateWeddingPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  const { currentPage } = useShop();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'categories':
        return <CategoriesPage />;
      case 'shop':
        return <ShopPage />;
      case 'product-detail':
        return <ProductDetailPage />;
      case 'builder':
        return <BoxBuilderPage />;
      case 'about':
        return <AboutPage />;
      case 'corporate':
        return <CorporateWeddingPage />;
      case 'contact':
        return <ContactPage />;
      case 'checkout':
        return <CheckoutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfa] font-sans selection:bg-black selection:text-white">
      {/* Top Ticker */}
      <AnnouncementBar />

      {/* Global Sticky Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Floating Back To Top Button */}
      <BackToTop />

      {/* Slide-out Drawers and Modals */}
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <QuickViewModal />
      <ToastNotification />
    </div>
  );
}

export default App;
