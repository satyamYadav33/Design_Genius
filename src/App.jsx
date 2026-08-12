import React, { useState } from 'react';
import PromoRibbon from './components/PromoRibbon';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FlavorShowcase from './components/FlavorShowcase';
import HighkeyHighlights from './components/HighkeyHighlights';
import BioAvailabilityMatrix from './components/BioAvailabilityMatrix';
import BundleConfigurator from './components/BundleConfigurator';
import TestimonialShowcase from './components/TestimonialShowcase';
import FAQSection from './components/FAQSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { FLAVORS } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'bundle-12-sub',
      title: 'Titanium Pro 12-Bottle Supply Pack',
      packSize: 12,
      isSubscription: true,
      price: 46.74,
      quantity: 1,
      image: '/images/hero.png'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedFlavorId, setSelectedFlavorId] = useState('brushed-titanium');

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (newItem) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === newItem.id);
      if (existing) {
        return prev.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item);
      } else {
        return [...prev, { ...newItem, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToConfigurator = () => {
    const el = document.getElementById('configurator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Top Announcement Banner */}
      <PromoRibbon onOpenStore={scrollToConfigurator} />

      {/* Sticky Frosted Header */}
      <Navigation 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenStore={scrollToConfigurator}
      />

      {/* Cathedral Hero Section */}
      <HeroSection onOpenStore={scrollToConfigurator} />

      {/* Interactive Anodized Finish & Flavor Showcase */}
      <FlavorShowcase 
        onSelectFlavor={(id) => setSelectedFlavorId(id)}
        onOpenStore={scrollToConfigurator}
      />

      {/* High-Key Microfiltration Highlights Band (#f5f5f7) */}
      <HighkeyHighlights />

      {/* Interactive Bio-Availability Science Comparison */}
      <BioAvailabilityMatrix />

      {/* Custom Bundle Builder */}
      <BundleConfigurator onAddToCart={handleAddToCart} />

      {/* Verified Athlete Reviews */}
      <TestimonialShowcase />

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Legal Footer */}
      <Footer />

      {/* Slide-Over Shopping Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
