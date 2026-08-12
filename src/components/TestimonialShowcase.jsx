import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, ShieldCheck } from 'lucide-react';

export default function TestimonialShowcase() {
  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <p className="text-body-sm text-secondary" style={{ marginBottom: '8px', fontWeight: '500' }}>
            ATHLETE & CLINICAL TESTIMONIALS
          </p>
          <h2 className="text-heading" style={{ color: '#1d1d1f' }}>
            Proven in High Performance.
          </h2>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {TESTIMONIALS.map(t => (
            <div 
              key={t.id}
              className="apple-card-gray"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#0071e3" color="#0071e3" />
                  ))}
                </div>

                <p className="text-body-sm" style={{ color: '#1d1d1f', marginBottom: '24px', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
              </div>

              <div>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#1d1d1f' }}>{t.author}</p>
                <p className="text-caption text-secondary" style={{ marginBottom: '8px' }}>{t.role}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#0071e3', fontSize: '12px', fontWeight: '500' }}>
                  <ShieldCheck size={14} />
                  <span>{t.verified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
