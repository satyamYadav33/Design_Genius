import React from 'react';
import { HIGHLIGHTS } from '../data/products';
import { ShieldCheck, Cpu, Activity, Droplets } from 'lucide-react';

export default function HighkeyHighlights() {
  const icons = [<Activity size={24} color="#0071e3" />, <Cpu size={24} color="#0071e3" />, <Droplets size={24} color="#0071e3" />, <ShieldCheck size={24} color="#0071e3" />];

  return (
    <section id="science" className="bg-gray section-padding">
      <div className="container">
        {/* Left Aligned Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <p className="text-body-sm text-secondary" style={{ marginBottom: '8px', fontWeight: '500' }}>
            ENGINEERING & BIO-AVAILABILITY
          </p>
          <h2 className="text-heading" style={{ color: '#1d1d1f', maxWidth: '800px' }}>
            Architectural Purity.<br />Micro-Filtered at 0.1 Microns.
          </h2>
        </div>

        {/* Feature Grid: Large Hero Card + 3 Column Specs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {HIGHLIGHTS.map((item, idx) => (
            <div 
              key={item.id}
              className="apple-card"
              style={{
                backgroundColor: '#ffffff',
                gridColumn: idx === 0 ? 'span 2' : 'span 1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '320px'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '24px'
                }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#0071e3',
                    letterSpacing: '0.05em'
                  }}>
                    {item.eyebrow}
                  </span>
                  {icons[idx % icons.length]}
                </div>

                <h3 className="text-subheading" style={{ color: '#1d1d1f', marginBottom: '14px', fontSize: idx === 0 ? '36px' : '26px' }}>
                  {item.title}
                </h3>

                <p className="text-body-sm text-secondary">
                  {item.description}
                </p>
              </div>

              <div style={{
                borderTop: '1px solid #f5f5f7',
                paddingTop: '20px',
                marginTop: '30px',
                display: 'flex',
                alignItems: 'baseline',
                gap: '12px'
              }}>
                <span className="text-heading-sm" style={{ color: '#1d1d1f', fontSize: '32px' }}>
                  {item.metric}
                </span>
                <span className="text-caption text-secondary">
                  {item.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Detail Banner Card */}
        <div style={{
          marginTop: '24px',
          borderRadius: '28px',
          backgroundColor: '#1d1d1f',
          color: '#ffffff',
          padding: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '600px' }}>
            <span style={{ color: '#0071e3', fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em' }}>
              HPLC LIQUID CHROMATOGRAPHY TESTED
            </span>
            <h3 className="text-heading-sm" style={{ color: '#ffffff', marginTop: '6px', marginBottom: '10px' }}>
              Zero compromise. 100% batch transparency.
            </h3>
            <p className="text-body-sm" style={{ color: '#a1a1a6' }}>
              Every single production batch receives an independent certificate of analysis (CoA) for heavy metals, microbial safety, and exact amino acid quantification.
            </p>
          </div>

          <a href="#faq" className="btn-electric" style={{ backgroundColor: '#ffffff', color: '#1d1d1f' }}>
            View Lab Test Reports ›
          </a>
        </div>
      </div>
    </section>
  );
}
