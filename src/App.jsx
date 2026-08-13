import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CloserLookSection from './components/CloserLookSection';
import FlavorShowcase from './components/FlavorShowcase';
import HighkeyHighlights from './components/HighkeyHighlights';
import BioAvailabilityMatrix from './components/BioAvailabilityMatrix';
import BundleConfigurator from './components/BundleConfigurator';
import TestimonialShowcase from './components/TestimonialShowcase';
import FAQSection from './components/FAQSection';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'bottle-sky',
      title: 'KORE Ti Vessel — Sky',
      packSize: 1,
      isSubscription: false,
      price: 34.99,
      quantity: 1,
      image: '/images/kore_bottle_sky.png'
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedFlavorId, setSelectedFlavorId] = useState('obsidian-cocoa');

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
    <div className="app-root" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Sticky KORE Navigation Header */}
      <Navigation 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenStore={scrollToConfigurator}
      />

      {/* Main KORE Hero Section with 6-Bottle Lineup & Color Swatches */}
      <HeroSection 
        onOpenStore={scrollToConfigurator} 
        onAddToCart={handleAddToCart}
      />

      {/* "A closer look." Headline & Engineering Feature Showcase */}
      <CloserLookSection />

      {/* Nutrition & Flavours Matrix */}
      <FlavorShowcase 
        onSelectFlavor={(id) => setSelectedFlavorId(id)}
        onAddToCart={handleAddToCart}
      />

      {/* Bio-Availability & Cellular Absorption Band */}
      <HighkeyHighlights />

      {/* Science Comparison Matrix */}
      <BioAvailabilityMatrix />

      {/* Custom Supply Bundle Builder */}
      <BundleConfigurator onAddToCart={handleAddToCart} />

      {/* Athlete Reviews */}
      <TestimonialShowcase />

      {/* FAQ Accordion Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Slide-Over Bag Drawer */}
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
