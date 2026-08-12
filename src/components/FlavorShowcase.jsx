import React, { useState } from 'react';
import { FLAVORS } from '../data/products';
import { Check, Sparkles, Sliders } from 'lucide-react';

export default function FlavorShowcase({ onSelectFlavor, onOpenStore }) {
  const [activeFlavorId, setActiveFlavorId] = useState('brushed-titanium');
  const activeFlavor = FLAVORS.find(f => f.id === activeFlavorId) || FLAVORS[0];

  return (
    <section id="flavors" className="bg-white section-padding" style={{ borderTop: '1px solid #f5f5f7' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
          <p className="text-body-sm text-secondary" style={{ marginBottom: '8px', fontWeight: '500' }}>
            PRODUCT FINISHES
          </p>
          <h2 className="text-heading" style={{ color: '#1d1d1f' }}>
            Five Anodized Finishes.<br />One Uncompromised Formula.
          </h2>
        </div>

        {/* Swatch Selector Row */}
        <div style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '50px'
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
                  padding: '10px 18px',
                  borderRadius: '980px',
                  border: isSelected ? '2px solid #0071e3' : '1px solid #d6d6d6',
                  backgroundColor: isSelected ? '#ffffff' : '#f5f5f7',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Color Dot Swatch */}
                <span style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: flavor.hex,
                  border: '1px solid rgba(0,0,0,0.1)',
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
                    fontSize: '10px',
                    color: '#707070',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    padding: '2px 6px',
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
          {/* Card 1: Product Render with Finish Background */}
          <div style={{
            borderRadius: '28px',
            backgroundColor: activeFlavor.bgTone,
            padding: '50px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '440px',
            transition: 'background-color 0.4s ease'
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
              {activeFlavor.name} Finish
            </span>

            <img 
              src={activeFlavor.image}
              alt={activeFlavor.name}
              style={{
                maxHeight: '320px',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.08))',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Card 2: Interactive Spec Details */}
          <div className="apple-card-gray" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span className="badge-nuevo" style={{ color: activeFlavor.accentColor, margin: 0 }}>
                  {activeFlavor.badge}
                </span>
                <span className="text-caption text-secondary">450ml Ready-to-Drink</span>
              </div>

              <h3 className="text-subheading" style={{ color: '#1d1d1f', marginBottom: '8px' }}>
                {activeFlavor.name}
              </h3>
              <p className="text-body-sm text-secondary" style={{ marginBottom: '24px' }}>
                {activeFlavor.tagline}
              </p>

              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '28px'
              }}>
                <p className="text-caption text-secondary" style={{ marginBottom: '6px' }}>Tasting Notes & Texture</p>
                <p className="text-body-sm" style={{ color: '#1d1d1f', fontWeight: '500' }}>
                  "{activeFlavor.flavorProfile}"
                </p>
              </div>

              {/* Specs Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '16px',
                textAlign: 'center',
                marginBottom: '28px'
              }}>
                <div style={{ backgroundColor: '#ffffff', padding: '16px 12px', borderRadius: '16px' }}>
                  <p className="text-heading-sm" style={{ color: '#0071e3', fontSize: '28px' }}>{activeFlavor.protein}</p>
                  <p className="text-micro text-secondary">Protein</p>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '16px 12px', borderRadius: '16px' }}>
                  <p className="text-heading-sm" style={{ color: '#1d1d1f', fontSize: '28px' }}>{activeFlavor.bcaa}</p>
                  <p className="text-micro text-secondary">BCAAs</p>
                </div>
                <div style={{ backgroundColor: '#ffffff', padding: '16px 12px', borderRadius: '16px' }}>
                  <p className="text-heading-sm" style={{ color: '#1d1d1f', fontSize: '28px' }}>{activeFlavor.sugar}</p>
                  <p className="text-micro text-secondary">Sugar</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <button 
                onClick={onOpenStore} 
                className="btn-electric" 
                style={{ flex: 1, padding: '12px' }}
              >
                Add {activeFlavor.name} — $4.99
              </button>
              
              <a href="#configurator" className="link-arrow">
                Custom Pack ›
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
