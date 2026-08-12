import React, { useState } from 'react';
import { FLAVORS } from '../data/products';
import { ShoppingBag, Check, ShieldCheck, RefreshCw } from 'lucide-react';

export default function BundleConfigurator({ onAddToCart }) {
  const [packSize, setPackSize] = useState(12); // 6, 12, 24
  const [isSubscription, setIsSubscription] = useState(true);
  const [flavorCounts, setFlavorCounts] = useState({
    'brushed-titanium': 4,
    'obsidian-cocoa': 4,
    'platinum-vanilla': 4,
    'citrus-ion': 0,
    'arctic-berry': 0
  });

  const basePrices = { 6: 29.99, 12: 54.99, 24: 99.99 };
  const basePrice = basePrices[packSize];
  const finalPrice = isSubscription ? (basePrice * 0.85).toFixed(2) : basePrice.toFixed(2);
  const pricePerBottle = (finalPrice / packSize).toFixed(2);

  const totalAssigned = Object.values(flavorCounts).reduce((a, b) => a + b, 0);

  const handleIncrement = (id) => {
    if (totalAssigned < packSize) {
      setFlavorCounts(prev => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const handleDecrement = (id) => {
    if (flavorCounts[id] > 0) {
      setFlavorCounts(prev => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const handleAutoBalance = () => {
    const activeFlavors = FLAVORS.map(f => f.id);
    const countPerFlavor = Math.floor(packSize / activeFlavors.length);
    const remainder = packSize % activeFlavors.length;
    
    const newCounts = {};
    activeFlavors.forEach((id, index) => {
      newCounts[id] = countPerFlavor + (index < remainder ? 1 : 0);
    });
    setFlavorCounts(newCounts);
  };

  const handleAddToCart = () => {
    const bundleItem = {
      id: `bundle-${packSize}-${isSubscription ? 'sub' : 'one'}`,
      title: `Titanium Pro ${packSize}-Bottle Bundle`,
      packSize,
      isSubscription,
      price: parseFloat(finalPrice),
      flavorBreakdown: flavorCounts,
      image: '/images/flavors.png'
    };
    onAddToCart(bundleItem);
  };

  return (
    <section id="configurator" className="bg-gray section-padding" style={{ borderTop: '1px solid #d6d6d6' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '50px' }}>
          <p className="text-body-sm text-secondary" style={{ marginBottom: '8px', fontWeight: '500' }}>
            CUSTOM BUNDLE BUILDER
          </p>
          <h2 className="text-heading" style={{ color: '#1d1d1f' }}>
            Configure Your Supply.
          </h2>
          <p className="text-body text-secondary" style={{ marginTop: '10px' }}>
            Select your pack size, curate custom flavor mixes, and save 15% with recurring auto-delivery.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px',
          alignItems: 'start'
        }}>
          {/* Left Column: Configuration Controls */}
          <div className="apple-card" style={{ backgroundColor: '#ffffff' }}>
            {/* Step 1: Pack Size Selection */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#707070', display: 'block', marginBottom: '12px' }}>
                1. SELECT QUANTITY
              </label>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                {[6, 12, 24].map(size => {
                  const active = packSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => {
                        setPackSize(size);
                        // Auto reset allocation when size changes
                        const activeFlavors = FLAVORS.map(f => f.id);
                        const countPer = Math.floor(size / activeFlavors.length);
                        const rem = size % activeFlavors.length;
                        const newCounts = {};
                        activeFlavors.forEach((id, idx) => {
                          newCounts[id] = countPer + (idx < rem ? 1 : 0);
                        });
                        setFlavorCounts(newCounts);
                      }}
                      style={{
                        padding: '16px 12px',
                        borderRadius: '20px',
                        border: active ? '2px solid #0071e3' : '1px solid #d6d6d6',
                        backgroundColor: active ? '#ffffff' : '#f5f5f7',
                        cursor: 'pointer',
                        textAlign: 'center',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <p style={{ fontSize: '20px', fontWeight: '700', color: '#1d1d1f' }}>{size} Pack</p>
                      <p style={{ fontSize: '12px', color: '#707070' }}>${(basePrices[size] / size).toFixed(2)}/ea</p>
                      {size === 12 && (
                        <span style={{ fontSize: '10px', color: '#0071e3', fontWeight: '600' }}>Most Popular</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Delivery Option */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#707070', display: 'block', marginBottom: '12px' }}>
                2. DELIVERY FREQUENCY
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => setIsSubscription(true)}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '20px',
                    border: isSubscription ? '2px solid #0071e3' : '1px solid #d6d6d6',
                    backgroundColor: isSubscription ? '#ffffff' : '#f5f5f7',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>
                      Auto-Replenish (Save 15%)
                    </p>
                    <p style={{ fontSize: '12px', color: '#707070' }}>Delivered every 30 days. Cancel anytime.</p>
                  </div>
                  <span style={{ 
                    backgroundColor: '#0071e3', 
                    color: '#ffffff', 
                    padding: '4px 10px', 
                    borderRadius: '99px',
                    fontSize: '12px',
                    fontWeight: '600' 
                  }}>-15% OFF</span>
                </button>

                <button
                  onClick={() => setIsSubscription(false)}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '20px',
                    border: !isSubscription ? '2px solid #1d1d1f' : '1px solid #d6d6d6',
                    backgroundColor: !isSubscription ? '#ffffff' : '#f5f5f7',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>One-Time Purchase</p>
                    <p style={{ fontSize: '12px', color: '#707070' }}>Standard single order delivery.</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Flavor Distribution */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#707070' }}>
                  3. FLAVOR MIX ({totalAssigned}/{packSize} Bottles)
                </label>
                <button 
                  onClick={handleAutoBalance}
                  style={{ background: 'none', border: 'none', color: '#0066cc', fontSize: '12px', cursor: 'pointer' }}
                >
                  Equal Balance
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {FLAVORS.map(flavor => (
                  <div 
                    key={flavor.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      backgroundColor: '#f5f5f7',
                      borderRadius: '16px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        backgroundColor: flavor.hex,
                        border: '1px solid rgba(0,0,0,0.1)'
                      }} />
                      <span style={{ fontSize: '14px', fontWeight: '500', color: '#1d1d1f' }}>{flavor.name}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <button
                        onClick={() => handleDecrement(flavor.id)}
                        disabled={flavorCounts[flavor.id] === 0}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          border: '1px solid #d6d6d6',
                          backgroundColor: '#ffffff',
                          cursor: 'pointer',
                          fontWeight: '700'
                        }}
                      >-</button>
                      <span style={{ fontSize: '15px', fontWeight: '600', width: '20px', textAlign: 'center' }}>
                        {flavorCounts[flavor.id]}
                      </span>
                      <button
                        onClick={() => handleIncrement(flavor.id)}
                        disabled={totalAssigned >= packSize}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          border: '1px solid #d6d6d6',
                          backgroundColor: '#ffffff',
                          cursor: 'pointer',
                          fontWeight: '700'
                        }}
                      >+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary Card */}
          <div className="apple-card" style={{ backgroundColor: '#ffffff', position: 'sticky', top: '70px' }}>
            <span style={{ color: '#0071e3', fontSize: '12px', fontWeight: '600', letterSpacing: '0.05em' }}>
              ORDER SUMMARY
            </span>

            <h3 className="text-subheading" style={{ color: '#1d1d1f', marginTop: '6px', marginBottom: '20px' }}>
              {packSize}-Bottle Bundle
            </h3>

            <div style={{ borderBottom: '1px solid #f5f5f7', paddingBottom: '20px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-body-sm text-secondary">Pack Size:</span>
                <span className="text-body-sm" style={{ fontWeight: '600' }}>{packSize} Bottles</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-body-sm text-secondary">Unit Cost:</span>
                <span className="text-body-sm" style={{ fontWeight: '600' }}>${pricePerBottle} / bottle</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-body-sm text-secondary">Shipping:</span>
                <span className="text-body-sm" style={{ color: '#0071e3', fontWeight: '600' }}>
                  {packSize >= 12 ? 'FREE Global Express' : '$4.99 Standard'}
                </span>
              </div>

              {isSubscription && (
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span className="text-body-sm text-secondary">Subscription Discount:</span>
                  <span className="text-body-sm" style={{ color: '#0071e3', fontWeight: '600' }}>-15% Applied</span>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
              <span className="text-body-lg" style={{ fontWeight: '700', color: '#1d1d1f' }}>Total Due:</span>
              <span className="text-heading" style={{ color: '#1d1d1f' }}>${finalPrice}</span>
            </div>

            <button 
              onClick={handleAddToCart}
              className="btn-electric" 
              style={{ width: '100%', padding: '16px', fontSize: '17px' }}
            >
              Add {packSize} Bottles to Bag — ${finalPrice}
            </button>

            <div style={{ 
              marginTop: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '6px',
              color: '#707070',
              fontSize: '13px' 
            }}>
              <ShieldCheck size={16} color="#0071e3" />
              <span>30-Day Pure Strength Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
