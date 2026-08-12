import React, { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

export default function BioAvailabilityMatrix() {
  const [activeTab, setActiveTab] = useState('titanium');

  const comparisons = [
    {
      metric: 'Cellular Absorption Rate',
      titanium: '99.4% (Ultra-Cold CFM)',
      isolate: '82.0% (Heat Microfiltered)',
      concentrate: '64.5% (Standard Spray Dried)'
    },
    {
      metric: 'Protein Content per 100g',
      titanium: '94.2g Pure Isolate',
      isolate: '84.0g Isolate',
      concentrate: '68.0g Concentrate'
    },
    {
      metric: 'Lactose Content',
      titanium: '0.00% (Zero Lactose)',
      isolate: '< 0.5%',
      concentrate: '4.5% - 7.0%'
    },
    {
      metric: 'BCAA Concentration (Leucine)',
      titanium: '9.8g (4.6g Leucine)',
      isolate: '7.2g (3.1g Leucine)',
      concentrate: '5.4g (2.2g Leucine)'
    },
    {
      metric: 'Gastric Transit Time',
      titanium: '18 Minutes (Zero Bloat)',
      isolate: '45 Minutes',
      concentrate: '110 Minutes (Heavy Bloat)'
    },
    {
      metric: 'Dissolve Speed in Cold Liquid',
      titanium: '5 Seconds (No Shaker Needed)',
      isolate: '25 Seconds',
      concentrate: 'Persistent Clumping'
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center" style={{ maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <p className="text-body-sm text-secondary" style={{ marginBottom: '8px', fontWeight: '500' }}>
            BIO-AVAILABILITY MATRIX
          </p>
          <h2 className="text-heading" style={{ color: '#1d1d1f' }}>
            Engineering vs Convention.
          </h2>
          <p className="text-body text-secondary" style={{ marginTop: '16px' }}>
            How Titanium Pro's 0.1-micron filtration outperforms conventional protein processing across every biological metric.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div style={{
          backgroundColor: '#f5f5f7',
          borderRadius: '28px',
          padding: '40px 30px',
          overflowX: 'auto'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left'
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #d6d6d6' }}>
                <th style={{ padding: '16px', fontSize: '15px', color: '#707070', fontWeight: '600' }}>Metric</th>
                <th style={{ 
                  padding: '16px', 
                  fontSize: '16px', 
                  color: '#0071e3', 
                  fontWeight: '700',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px 16px 0 0'
                }}>
                  ✦ Titanium Pro Shake
                </th>
                <th style={{ padding: '16px', fontSize: '15px', color: '#1d1d1f', fontWeight: '600' }}>Standard Whey Isolate</th>
                <th style={{ padding: '16px', fontSize: '15px', color: '#707070', fontWeight: '500' }}>Whey Concentrate</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} style={{ borderBottom: i < comparisons.length - 1 ? '1px solid #e8e8ed' : 'none' }}>
                  <td style={{ padding: '20px 16px', fontWeight: '600', fontSize: '15px', color: '#1d1d1f' }}>
                    {row.metric}
                  </td>
                  <td style={{ 
                    padding: '20px 16px', 
                    fontWeight: '700', 
                    fontSize: '15px', 
                    color: '#0071e3',
                    backgroundColor: '#ffffff'
                  }}>
                    {row.titanium}
                  </td>
                  <td style={{ padding: '20px 16px', fontSize: '14px', color: '#474747' }}>
                    {row.isolate}
                  </td>
                  <td style={{ padding: '20px 16px', fontSize: '14px', color: '#707070' }}>
                    {row.concentrate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
