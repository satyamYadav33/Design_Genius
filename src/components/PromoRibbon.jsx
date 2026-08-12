import React from 'react';

export default function PromoRibbon({ onOpenStore }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e8e8ed',
      padding: '8px 16px',
      textAlign: 'center',
      fontSize: '13px',
      color: '#1d1d1f',
      fontWeight: '400',
      letterSpacing: '-0.2px'
    }}>
      <span>Complimentary global express shipping on orders of 12 bottles or more. </span>
      <button 
        onClick={onOpenStore}
        style={{
          background: 'none',
          border: 'none',
          color: '#0066cc',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '13px',
          padding: '0 4px',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
        onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
      >
        Configure your bundle ›
      </button>
    </div>
  );
}
