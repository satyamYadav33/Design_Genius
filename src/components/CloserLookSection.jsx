import React, { useState } from 'react';
import { CLOSER_LOOK_FEATURES } from '../data/products';
import { ChevronRight, Shield, Zap, Sparkles } from 'lucide-react';

export default function CloserLookSection() {
  const [activeFeatureId, setActiveFeatureId] = useState('lid');
  const activeFeature = CLOSER_LOOK_FEATURES.find(f => f.id === activeFeatureId) || CLOSER_LOOK_FEATURES[0];

  return (
    <section id="closer-look" style={{ backgroundColor: '#ffffff', paddingTop: '60px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Screenshot's Exact Headline: "A closer look." */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: '700',
            color: '#1d1d1f',
            letterSpacing: '-1.4px',
            lineHeight: '1.05',
            margin: 0
          }}>
            A closer look.
          </h2>
          <p style={{ fontSize: '20px', color: '#707070', marginTop: '12px', maxWidth: '640px', fontWeight: '400' }}>
            Precision grade-5 titanium architecture meets micro-filtration science. Built to last a lifetime.
          </p>
        </div>

        {/* Feature Grid: Interactive Apple-Style Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {CLOSER_LOOK_FEATURES.map((feature) => {
            const isSelected = feature.id === activeFeatureId;
            return (
              <div
                key={feature.id}
                onClick={() => setActiveFeatureId(feature.id)}
                style={{
                  backgroundColor: isSelected ? '#f5f5f7' : '#fafafc',
                  borderRadius: '24px',
                  padding: '32px 28px',
                  cursor: 'pointer',
                  border: isSelected ? '1px solid #1d1d1f' : '1px solid #e5e5e7',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '400px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: isSelected ? '#1d1d1f' : '#707070',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase'
                  }}>
                    {feature.spec}
                  </span>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#1d1d1f',
                    marginTop: '10px',
                    marginBottom: '8px',
                    letterSpacing: '-0.4px'
                  }}>
                    {feature.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: '#707070',
                    lineHeight: '1.45',
                    marginBottom: '20px'
                  }}>
                    {feature.description}
                  </p>
                </div>

                {/* Feature Image Frame */}
                <div style={{
                  height: '180px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '12px'
                }}>
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    style={{
                      maxHeight: '170px',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      transition: 'transform 0.4s ease',
                      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.06))'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
