import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-gray section-padding" style={{ borderTop: '1px solid #d6d6d6' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '50px' }}>
          <p className="text-body-sm text-secondary" style={{ marginBottom: '8px', fontWeight: '500' }}>
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-heading" style={{ color: '#1d1d1f' }}>
            Frequently Asked Questions.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1d1d1f' }}>
                    {faq.question}
                  </h3>
                  {isOpen ? <ChevronUp size={20} color="#0071e3" /> : <ChevronDown size={20} color="#707070" />}
                </div>

                {isOpen && (
                  <p className="text-body-sm text-secondary" style={{ marginTop: '16px', borderTop: '1px solid #f5f5f7', paddingTop: '16px' }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
