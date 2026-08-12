import React, { useState } from 'react';
import { X, Trash2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isFreeShipping = subtotal > 40 || cartItems.some(item => item.packSize >= 12);

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutComplete(false);
      onClose();
    }, 3500);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(4px)',
          animation: 'fadeIn 0.2s ease-out'
        }}
      />

      {/* Drawer Content */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        backgroundColor: '#ffffff',
        height: '100%',
        boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 201,
        animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #e8e8ed',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f' }}>Your Bag</h2>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} color="#1d1d1f" />
          </button>
        </div>

        {/* Body */}
        {checkoutComplete ? (
          <div style={{ padding: '60px 24px', textAlign: 'center', my: 'auto' }}>
            <CheckCircle2 size={56} color="#0071e3" style={{ margin: '0 auto 20px auto' }} />
            <h3 className="text-subheading" style={{ color: '#1d1d1f', marginBottom: '10px' }}>
              Order Confirmed!
            </h3>
            <p className="text-body-sm text-secondary" style={{ marginBottom: '24px' }}>
              Thank you for choosing Titanium Pro. Your order confirmation and tracking details have been dispatched.
            </p>
            <p className="text-caption" style={{ color: '#0071e3', fontWeight: '600' }}>
              Preparing cold-chain shipment...
            </p>
          </div>
        ) : cartItems.length === 0 ? (
          <div style={{ padding: '60px 24px', textAlign: 'center', margin: 'auto' }}>
            <p className="text-body-lg" style={{ color: '#1d1d1f', marginBottom: '8px' }}>Your Bag is Empty</p>
            <p className="text-body-sm text-secondary" style={{ marginBottom: '24px' }}>
              Select a single shake finish or configure your custom 12-bottle supply pack.
            </p>
            <button onClick={onClose} className="btn-electric">
              Explore Finishes
            </button>
          </div>
        ) : (
          <>
            {/* Shipping Progress bar */}
            <div style={{ backgroundColor: '#f5f5f7', padding: '12px 24px', fontSize: '13px', color: '#1d1d1f' }}>
              {isFreeShipping ? (
                <span style={{ color: '#0071e3', fontWeight: '600' }}>✓ You qualify for FREE Global Express Shipping!</span>
              ) : (
                <span>Add ${(40 - subtotal).toFixed(2)} more for Free Express Shipping</span>
              )}
            </div>

            {/* Items List */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
              {cartItems.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: '20px',
                    marginBottom: '20px',
                    borderBottom: '1px solid #f5f5f7'
                  }}
                >
                  <img 
                    src={item.image || '/images/hero.png'}
                    alt={item.title}
                    style={{
                      width: '70px',
                      height: '80px',
                      objectFit: 'contain',
                      backgroundColor: '#f5f5f7',
                      borderRadius: '14px',
                      padding: '6px'
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>{item.title}</h4>
                      <span style={{ fontSize: '15px', fontWeight: '700', color: '#1d1d1f' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>

                    <p className="text-caption text-secondary" style={{ marginBottom: '12px' }}>
                      {item.isSubscription ? 'Monthly Subscription (-15%)' : 'One-Time Purchase'}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          style={qtyBtnStyle}
                        >-</button>
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          style={qtyBtnStyle}
                        >+</button>
                      </div>

                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#707070' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Summary */}
            <div style={{ padding: '24px', borderTop: '1px solid #e8e8ed', backgroundColor: '#fafafc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span className="text-body-sm text-secondary">Subtotal</span>
                <span className="text-body-sm" style={{ fontWeight: '600' }}>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span className="text-body-sm text-secondary">Shipping</span>
                <span className="text-body-sm" style={{ color: '#0071e3', fontWeight: '600' }}>
                  {isFreeShipping ? 'FREE' : '$4.99'}
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px' }}>
                <span style={{ fontSize: '18px', fontWeight: '700', color: '#1d1d1f' }}>Total</span>
                <span style={{ fontSize: '24px', fontWeight: '700', color: '#1d1d1f' }}>
                  ${(subtotal + (isFreeShipping ? 0 : 4.99)).toFixed(2)}
                </span>
              </div>

              <button 
                onClick={handleCheckout}
                className="btn-electric" 
                style={{ width: '100%', padding: '14px', fontSize: '16px' }}
              >
                Checkout with Apple Pay
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const qtyBtnStyle = {
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  border: '1px solid #d6d6d6',
  backgroundColor: '#ffffff',
  cursor: 'pointer',
  fontWeight: '700',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
