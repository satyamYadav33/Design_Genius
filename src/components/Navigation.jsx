import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, X, ShieldCheck } from 'lucide-react';

export default function Navigation({ cartCount, onOpenCart, onOpenStore }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      height: '44px',
      backgroundColor: scrolled ? 'rgba(250, 250, 252, 0.88)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        {/* Brand Logo */}
        <a href="#" style={{
          textDecoration: 'none',
          color: '#1d1d1f',
          fontSize: '15px',
          fontWeight: '700',
          letterSpacing: '-0.4px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            backgroundColor: '#1d1d1f',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0071e3',
            fontSize: '10px',
            fontWeight: '900'
          }}>T</span>
          <span>TITANIUM <span style={{ fontWeight: '400', color: '#707070' }}>PRO</span></span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="nav-links">
          <a href="#hero" style={linkStyle}>Overview</a>
          <a href="#flavors" style={linkStyle}>Finishes</a>
          <a href="#science" style={linkStyle}>Bio-Tech</a>
          <a href="#configurator" style={linkStyle}>Build Pack</a>
          <a href="#testimonials" style={linkStyle}>Reviews</a>
          <a href="#faq" style={linkStyle}>Support</a>
        </nav>

        {/* Right Actions: Search & Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            style={iconButtonStyle}
            title="Search"
          >
            {searchOpen ? <X size={16} color="#1d1d1f" /> : <Search size={16} color="#474747" />}
          </button>

          <button 
            onClick={onOpenCart}
            style={{
              ...iconButtonStyle,
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Bag"
          >
            <ShoppingBag size={16} color="#474747" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-6px',
                backgroundColor: '#0071e3',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: '700',
                borderRadius: '99px',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Expandable Search Drawer */}
      {searchOpen && (
        <div style={{
          backgroundColor: '#fafafc',
          borderBottom: '1px solid #d6d6d6',
          padding: '16px 24px',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div className="container" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '12px' }}>
            <input 
              type="text"
              placeholder="Search flavors, amino specs, absorption data..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: '980px',
                border: '1px solid #d6d6d6',
                outline: 'none',
                fontSize: '14px',
                fontFamily: 'inherit'
              }}
            />
            <button 
              onClick={() => { setSearchOpen(false); onOpenStore(); }}
              className="btn-electric"
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

const linkStyle = {
  fontSize: '12px',
  color: '#1d1d1f',
  textDecoration: 'none',
  fontWeight: '400',
  letterSpacing: '-0.1px',
  transition: 'color 0.2s ease'
};

const iconButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
