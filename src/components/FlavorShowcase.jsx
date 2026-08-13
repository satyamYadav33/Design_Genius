import React, { useState } from 'react';
import { FLAVORS } from '../data/products';
import { Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function FlavorShowcase({ onSelectFlavor, onAddToCart }) {
  const [activeFlavorId, setActiveFlavorId] = useState('obsidian-cocoa');
  const activeFlavor = FLAVORS.find(f => f.id === activeFlavorId) || FLAVORS[1];

  const handleAddFlavor = () => {
    onAddToCart({
      id: `protein-${activeFlavor.id}`,
      title: `Titanium Pro Powder — ${activeFlavor.name}`,
      price: 29.99,
      packSize: 1,
      isSubscription: false,
      image: activeFlavor.image
    });
  };

  return (
    <section id="flavors" style={{ backgroundColor: '#fbfbfd', paddingTop: '80px', paddingBottom: '90px', borderTop: '1px solid #f0f0f2' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', color: '#707070', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>
            NUTRITION MATRIX
          </p>
          <h2 style={{ fontSize: '48px', fontWeight: '700', color: '#1d1d1f', letterSpacing: '-1px', margin: 0 }}>
            Five Pure Flavours.<br />40 Grams Bio-Available Isolate.
          </h2>
        </div>

        {/* Swatch Selector Row */}
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {FLAVORS.map(flavor => {
            const isSelected = flavor.id === activeFlavorId;
            return (
              <button
                key={flavor.id}
                onClick={() => {
                  setActiveFlavorId(flavor.id);
                  onSelectFlavor(flavor.id);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 20px',
                  borderRadius: '980px',
                  border: isSelected ? '1.5px solid #1d1d1f' : '1px solid #e5e5e7',
                  backgroundColor: isSelected ? '#ffffff' : '#f5f5f7',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
                }}
              >
                {/* Color Dot Swatch */}
                <span style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: flavor.hex,
                  border: '1px solid rgba(0,0,0,0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {isSelected && <Check size={10} color={flavor.id === 'obsidian-cocoa' ? '#ffffff' : '#1d1d1f'} />}
                </span>

                <span style={{
                  fontSize: '14px',
                  fontWeight: isSelected ? '600' : '400',
                  color: '#1d1d1f'
                }}>
                  {flavor.name}
                </span>

                {flavor.badge && (
                  <span style={{
                    fontSize: '11px',
                    color: '#707070',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    padding: '2px 8px',
                    borderRadius: '99px'
                  }}>
                    {flavor.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Active Finish Card Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          alignItems: 'stretch'
        }}>
          {/* Card 1: Product Render */}
          <div style={{
            borderRadius: '24px',
            backgroundColor: '#ffffff',
            border: '1px solid #f0f0f2',
            padding: '50px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '420px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.03)'
          }}>
            <span style={{
              position: 'absolute',
              top: '24px',
              left: '24px',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#707070'
            }}>
              {activeFlavor.name} Edition
            </span>

            <img 
              src={activeFlavor.image}
              alt={activeFlavor.name}
              style={{
                maxHeight: '300px',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.08))',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Card 2: Spec Details */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #f0f0f2',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 8px 30px rgba(0,0,0,0.03)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1d1d1f' }}>
                  {activeFlavor.badge}
                </span>
                <span style={{ fontSize: '13px', color: '#707070' }}>30 Servings / Pouch</span>
              </div>

              <h3 style={{ fontSize: '32px', fontWeight: '700', color: '#1d1d1f', marginBottom: '6px', letterSpacing: '-0.5px' }}>
                {activeFlavor.name}
              </h3>
              <p style={{ fontSize: '15px', color: '#707070', marginBottom: '24px' }}>
                {activeFlavor.tagline}
              </p>

              <div style={{
                backgroundColor: '#f5f5f7',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '28px'
              }}>
                <p style={{ fontSize: '12px', color: '#707070', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                  Tasting Notes
                </p>
                <p style={{ fontSize: '14px', color: '#1d1d1f', fontWeight: '500', lineHeight: '1.4' }}>
                  "{activeFlavor.flavorProfile}"
                </p>
              </div>

              {/* Specs Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '12px',
                textAlign: 'center',
                marginBottom: '28px'
              }}>
                <div style={{ backgroundColor: '#f5f5f7', padding: '16px 10px', borderRadius: '16px' }}>
                  <p style={{ fontSize: '24px', fontWeight: '700', color: '#1d1d1f', margin: 0 }}>{activeFlavor.protein}</p>
                  <p style={{ fontSize: '12px', color: '#707070', margin: 0, marginTop: '2px' }}>Protein</p>
                </div>
                <div style={{ backgroundColor: '#f5f5f7', padding: '16px 10px', borderRadius: '16px' }}>
                  <p style={{ fontSize: '24px', fontWeight: '700', color: '#1d1d1f', margin: 0 }}>{activeFlavor.bcaa}</p>
                  <p style={{ fontSize: '12px', color: '#707070', margin: 0, marginTop: '2px' }}>BCAAs</p>
                </div>
                <div style={{ backgroundColor: '#f5f5f7', padding: '16px 10px', borderRadius: '16px' }}>
                  <p style={{ fontSize: '24px', fontWeight: '700', color: '#1d1d1f', margin: 0 }}>{activeFlavor.sugar}</p>
                  <p style={{ fontSize: '12px', color: '#707070', margin: 0, marginTop: '2px' }}>Sugar</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <button 
                onClick={handleAddFlavor} 
                className="btn-electric" 
                style={{
                  flex: 1,
                  padding: '14px',
                  backgroundColor: '#1d1d1f',
                  color: '#ffffff',
                  borderRadius: '980px',
                  fontSize: '15px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <ShoppingBag size={16} />
                <span>Add {activeFlavor.name} — $29.99</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
