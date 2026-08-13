import React, { useState } from 'react';
import { BOTTLE_COLORS } from '../data/products';
import { Check, ShoppingBag, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function HeroSection({ onOpenStore, onAddToCart }) {
  const [selectedColorId, setSelectedColorId] = useState('sky');
  const selectedBottle = BOTTLE_COLORS.find(b => b.id === selectedColorId) || BOTTLE_COLORS[1];

  const handleQuickAdd = () => {
    onAddToCart({
      id: `bottle-${selectedBottle.id}`,
      title: `KORE Ti Vessel — ${selectedBottle.name}`,
      price: selectedBottle.price,
      packSize: 1,
      isSubscription: false,
      image: selectedBottle.image
    });
  };

  return (
    <section id="hero" style={{ backgroundColor: '#fbfbfd', paddingTop: '40px', paddingBottom: '70px', overflow: 'hidden' }}>
      <div className="container text-center" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Main Hero Lineup Visual Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1180px',
          margin: '0 auto 24px auto',
          padding: '20px 10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img 
            src="/images/kore_hero_lineup.png" 
            alt="KORE Ti Bottle Lineup"
            style={{
              width: '100%',
              maxHeight: '520px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.06))',
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>

        {/* Color Pill Swatches Selector - Exact replica of the reference design! */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          {BOTTLE_COLORS.map(bottle => {
            const isSelected = bottle.id === selectedColorId;
            return (
              <button
                key={bottle.id}
                onClick={() => setSelectedColorId(bottle.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  borderRadius: '980px',
                  backgroundColor: isSelected ? 'rgba(0,0,0,0.05)' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Circular Color Swatch Dot */}
                <span style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: bottle.dotHex,
                  border: `1px solid ${bottle.border}`,
                  boxShadow: isSelected ? `0 0 0 2px #ffffff, 0 0 0 4px ${bottle.border}` : '0 1px 3px rgba(0,0,0,0.1)',
                  display: 'inline-block',
                  transition: 'transform 0.2s ease'
                }} />

                <span style={{
                  fontSize: '14px',
                  fontWeight: isSelected ? '600' : '400',
                  color: '#1d1d1f',
                  letterSpacing: '-0.2px'
                }}>
                  {bottle.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Active Bottle Detail Spotlight Box */}
        <div style={{
          maxWidth: '920px',
          margin: '0 auto 70px auto',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '36px 40px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
          border: '1px solid #f0f0f2',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          alignItems: 'center',
          textAlign: 'left',
          animation: 'fadeIn 0.3s ease-in-out'
        }}>
          <div style={{ textAlign: 'center' }}>
            <img 
              src={selectedBottle.image} 
              alt={selectedBottle.name}
              style={{
                maxHeight: '340px',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                margin: '0 auto',
                filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.08))'
              }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#707070',
                backgroundColor: '#f5f5f7',
                padding: '3px 8px',
                borderRadius: '99px'
              }}>
                {selectedBottle.badge}
              </span>
              <span style={{ fontSize: '13px', color: '#707070' }}>{selectedBottle.capacity}</span>
            </div>

            <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1d1d1f', letterSpacing: '-0.5px', marginBottom: '4px' }}>
              KORE Ti Vessel — {selectedBottle.name}
            </h3>

            <p style={{ fontSize: '15px', color: '#707070', marginBottom: '16px', fontWeight: '400' }}>
              {selectedBottle.tagline}
            </p>

            <p style={{ fontSize: '14px', color: '#474747', lineHeight: '1.5', marginBottom: '24px' }}>
              {selectedBottle.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
                onClick={handleQuickAdd}
                className="btn-electric"
                style={{
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: '980px',
                  fontWeight: '500',
                  fontSize: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <ShoppingBag size={16} />
                <span>Add {selectedBottle.name} — ${selectedBottle.price}</span>
              </button>

              <button 
                onClick={onOpenStore}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0066cc',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                Customize Bundle ›
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
