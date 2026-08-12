import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray" style={{ 
      paddingTop: '60px', 
      paddingBottom: '40px', 
      borderTop: '1px solid #d6d6d6',
      color: '#707070',
      fontSize: '12px',
      lineHeight: '1.33'
    }}>
      <div className="container">
        {/* Legal Disclaimer Block */}
        <div style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid #d6d6d6' }}>
          <p style={{ marginBottom: '12px' }}>
            1. Cellular absorption rate (99.4%) is derived from randomized double-blind in vitro gastrointestinal simulation testing evaluating ultra-cold cross-flow microfiltered whey isolate compared to standard thermal spray-dried whey concentrates. Individual muscular uptake velocity may vary based on metabolism, athletic training state, and hydration levels.
          </p>
          <p style={{ marginBottom: '12px' }}>
            2. Subscription discount of 15% is applied automatically at checkout on all auto-replenishment orders. Subscriptions may be modified, paused, or canceled at any time up to 24 hours before your next scheduled delivery date without penalty.
          </p>
          <p>
            * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>

        {/* Navigation Link Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          <div>
            <h4 style={{ color: '#1d1d1f', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>Shop & Explore</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#hero" style={footerLink}>Titanium Pro Overview</a></li>
              <li><a href="#flavors" style={footerLink}>Anodized Finishes</a></li>
              <li><a href="#configurator" style={footerLink}>Bundle Configurator</a></li>
              <li><a href="#science" style={footerLink}>Microfiltration Science</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#1d1d1f', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>Account & Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#" style={footerLink}>Manage Subscription</a></li>
              <li><a href="#" style={footerLink}>Track Order Status</a></li>
              <li><a href="#" style={footerLink}>Global Shipping Info</a></li>
              <li><a href="#" style={footerLink}>Lab Test Reports (CoA)</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#1d1d1f', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>Titanium Bio-Tech</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#" style={footerLink}>Clinical Studies</a></li>
              <li><a href="#" style={footerLink}>Patented Microfiltration</a></li>
              <li><a href="#" style={footerLink}>Sustainability Commitment</a></li>
              <li><a href="#" style={footerLink}>Press & Media Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#1d1d1f', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>Company Values</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><a href="#" style={footerLink}>About Titanium Labs</a></li>
              <li><a href="#" style={footerLink}>Careers</a></li>
              <li><a href="#" style={footerLink}>Ethics & Quality Control</a></li>
              <li><a href="#" style={footerLink}>Contact Support</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Country */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '20px',
          borderTop: '1px solid #d6d6d6'
        }}>
          <p>© 2026 Titanium Nutrition Labs Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={footerLink}>Privacy Policy</a>
            <a href="#" style={footerLink}>Terms of Sale</a>
            <a href="#" style={footerLink}>Legal</a>
            <a href="#" style={footerLink}>Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLink = {
  color: '#474747',
  textDecoration: 'none',
  fontSize: '12px'
};
