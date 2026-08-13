import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, X } from 'lucide-react';

export default function Navigation({ cartCount, onOpenCart, onOpenStore }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
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
      height: '48px',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : '#ffffff',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
      transition: 'background-color 0.3s ease, border-color 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        {/* Brand Logo - KORE Target Emblem */}
        <a href="#" style={{
          textDecoration: 'none',
          color: '#1d1d1f',
          fontSize: '16px',
          fontWeight: '800',
          letterSpacing: '0.05em',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          {/* Target Logo Icon */}
          <span style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2.5px solid #1d1d1f',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#1d1d1f'
            }} />
          </span>
          <span>KORE</span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="nav-links">
          <a href="#hero" style={linkStyle}>Ti</a>
          <a href="#closer-look" style={linkStyle}>Ti Pro</a>
          <a href="#flavors" style={linkStyle}>Flavours</a>
          <a href="#science" style={linkStyle}>Nutrition</a>
          <a href="#configurator" style={linkStyle}>Subscribe</a>
          <a href="#faq" style={linkStyle}>Support</a>
        </nav>

        {/* Right Actions: Search & Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            style={iconButtonStyle}
            title="Search"
            aria-label="Search"
          >
            {searchOpen ? <X size={17} color="#1d1d1f" /> : <Search size={17} color="#1d1d1f" />}
          </button>

          <button 
            onClick={onOpenCart}
            style={{
              ...iconButtonStyle,
              position: 'relative'
            }}
            title="Shopping Bag"
            aria-label="Shopping Bag"
          >
            <ShoppingBag size={17} color="#1d1d1f" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-6px',
                backgroundColor: '#1d1d1f',
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
          borderBottom: '1px solid #e5e5e7',
          padding: '16px 24px',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '12px' }}>
            <input 
              type="text"
              placeholder="Search KORE bottles, finishes, nutrition specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              style={{
                width: '100%',
                padding: '10px 18px',
                borderRadius: '980px',
                border: '1px solid #d1d1d6',
                outline: 'none',
                fontSize: '14px',
                fontFamily: 'inherit'
              }}
            />
            <button 
              onClick={() => { setSearchOpen(false); onOpenStore(); }}
              className="btn-electric"
              style={{ padding: '8px 20px', fontSize: '13px', backgroundColor: '#1d1d1f', borderRadius: '980px' }}
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
  fontSize: '13px',
  color: '#1d1d1f',
  textDecoration: 'none',
  fontWeight: '500',
  letterSpacing: '-0.1px',
  transition: 'color 0.2s ease'
};

const iconButtonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  transition: 'background-color 0.2s ease'
};
