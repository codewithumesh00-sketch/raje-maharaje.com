import React, { Suspense, lazy } from 'react';
import { useShop } from './context/ShopContext';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import NicobarFooter from './components/NicobarFooter';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import SearchModal from './components/SearchModal';
import QuickViewModal from './components/QuickViewModal';
import ToastNotification from './components/ToastNotification';
import BackToTop from './components/BackToTop';

// Critical Homepage (Eager loaded for instant first paint)
import HomePage from './pages/HomePage';

// Subpages (Lazy loaded on demand for ultra-fast bundle size)
const RajePage = lazy(() => import('./pages/RajePage'));
const MaharajePage = lazy(() => import('./pages/MaharajePage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const StorePolicyPage = lazy(() => import('./pages/StorePolicyPage'));
const ShippingReturnsPage = lazy(() => import('./pages/ShippingReturnsPage'));
const MensCollectionPage = lazy(() => import('./pages/MensCollectionPage'));
const WomensCollectionPage = lazy(() => import('./pages/WomensCollectionPage'));
const GiftingPage = lazy(() => import('./pages/GiftingPage'));
const LivingPage = lazy(() => import('./pages/LivingPage'));
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const BoxBuilderPage = lazy(() => import('./pages/BoxBuilderPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PressPage = lazy(() => import('./pages/PressPage'));
const StoresPage = lazy(() => import('./pages/StoresPage'));
const CorporateWeddingPage = lazy(() => import('./pages/CorporateWeddingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

// Fast Luxury Loading Skeleton
const PageLoadingSkeleton = () => (
  <div className="min-h-[60vh] max-w-7xl mx-auto px-4 py-12 space-y-8 animate-pulse">
    <div className="h-8 bg-neutral-200 rounded-sm w-1/3 mx-auto" />
    <div className="h-4 bg-neutral-100 rounded-sm w-1/2 mx-auto" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="aspect-[3/4] bg-neutral-200/70 rounded-xs" />
      ))}
    </div>
  </div>
);

function App() {
  const { currentPage } = useShop();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'raje':
        return <RajePage />;
      case 'maharaje':
        return <MaharajePage />;
      case 'faq':
        return <FAQPage />;
      case 'store-policy':
        return <StorePolicyPage />;
      case 'shipping-returns':
        return <ShippingReturnsPage />;
      case 'women':
      case 'collections-women':
        return <WomensCollectionPage />;
      case 'men':
      case 'collections-men':
        return <MensCollectionPage />;
      case 'gifting':
      case 'collections-gifting':
        return <GiftingPage />;
      case 'living':
      case 'collections-living':
        return <LivingPage />;
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
      case 'press':
      case 'in-the-press':
        return <PressPage />;
      case 'stores':
      case 'store-locator':
        return <StoresPage />;
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
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] font-sans selection:bg-[#8B1E2D] selection:text-white">
      {/* Top Ticker */}
      <AnnouncementBar />

      {/* Global Sticky Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        <Suspense fallback={<PageLoadingSkeleton />}>
          {renderPage()}
        </Suspense>
      </main>

      {/* Global Footer (Exact 100% Nicobar Footer) */}
      <NicobarFooter />

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
