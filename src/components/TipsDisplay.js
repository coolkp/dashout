import React from 'react';

const categoryColors = {
  general: '#6b7280',
  flowers: '#e11d48',
  vegetables: '#16a34a',
  lawn: '#65a30d',
  trees: '#15803d',
  herbs: '#059669',
  succulents: '#0d9488',
  pests: '#d97706'
};

const categoryEmoji = {
  general: '\u{1F331}',
  flowers: '\u{1F33A}',
  vegetables: '\u{1F966}',
  lawn: '\u{1F33F}',
  trees: '\u{1F333}',
  herbs: '\u{1F33F}',
  succulents: '\u{1FAB4}',
  pests: '\u{1F41E}'
};

export default function TipsDisplay({ tips }) {
  if (!tips || tips.length === 0) return null;

  return (
    <div className="tips-container">
      <h2 className="tips-heading">Your Garden Tips</h2>
      <div className="tips-grid">
        {tips.map((tip, i) => (
          <div key={i} className="tip-card" style={{ '--accent': categoryColors[tip.category] || '#6b7280' }}>
            <div className="tip-header">
              <span className="tip-emoji">{categoryEmoji[tip.category] || '\u{1F331}'}</span>
              <span className="tip-category">{tip.category}</span>
            </div>
            <h3 className="tip-title">{tip.title}</h3>
            <p className="tip-text">{tip.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
