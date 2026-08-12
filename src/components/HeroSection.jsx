import React from 'react';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';

export default function HeroSection({ onOpenStore }) {
  return (
    <section id="hero" className="bg-white section-padding" style={{ paddingTop: '60px', paddingBottom: '90px' }}>
      <div className="container text-center">
        {/* Nuevo Badge */}
        <div>
          <span className="badge-nuevo">Nuevo</span>
        </div>

        {/* Eyebrow Label */}
        <p className="text-body-sm" style={{ color: '#1d1d1f', marginBottom: '12px', fontWeight: '500' }}>
          TITANIUM PRO SHAKE
        </p>

        {/* Oversized Cathedral Display Headline */}
        <h1 className="text-display" style={{ 
          maxWidth: '920px', 
          margin: '0 auto 20px auto', 
          color: '#1d1d1f' 
        }}>
          Pure Strength.<br />Engineered Titanium.
        </h1>

        {/* Subhead Body Text */}
        <p className="text-body" style={{ 
          maxWidth: '680px', 
          margin: '0 auto 32px auto', 
          color: '#707070',
          fontSize: '21px',
          fontWeight: '400'
        }}>
          40g pure micro-filtered whey isolate. 0.0g sugar. 99.4% cellular bio-availability delivered in high-key metallic precision.
        </p>

        {/* Action Button Row */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '16px',
          marginBottom: '16px',
          flexWrap: 'wrap'
        }}>
          <button onClick={onOpenStore} className="btn-electric" style={{ fontSize: '17px', padding: '12px 26px' }}>
            Buy Now — $4.99
          </button>
          
          <a href="#science" className="btn-ghost" style={{ fontSize: '17px', padding: '12px 24px' }}>
            Explore Bio-Tech <ArrowRight size={16} style={{ marginLeft: '6px' }} />
          </a>
        </div>

        {/* Pricing Subtitle */}
        <p className="text-caption" style={{ color: '#707070', marginBottom: '50px' }}>
          From $4.99 / shake · Available in 5 anodized finish options
        </p>

        {/* Product Visual Container */}
        <div style={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto',
          borderRadius: '28px',
          backgroundColor: '#f5f5f7',
          padding: '40px 20px',
          overflow: 'hidden'
        }}>
          {/* Floating Key Specs Badges */}
          <div style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '36px',
            padding: '8px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#1d1d1f',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            <Zap size={15} color="#0071e3" />
            <span>40g Isolate Matrix</span>
          </div>

          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '36px',
            padding: '8px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#1d1d1f',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            <Shield size={15} color="#0071e3" />
            <span>99.4% Bio-Available</span>
          </div>

          {/* High-Key Centered Product Render */}
          <img 
            src="/images/hero.png" 
            alt="Titanium Protein Shake Bottle Render"
            style={{
              maxHeight: '480px',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              margin: '0 auto',
              display: 'block',
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.06))',
              transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            className="hero-image"
          />

          <div style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '14px',
            color: '#707070'
          }}>
            <span>✦ Cold Micro-Filtered</span>
            <span>✦ Zero Lactose</span>
            <span>✦ 9.8g Natural BCAAs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
