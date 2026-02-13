import React from 'react';

export default function GardenAnalysis({ stats, categories }) {
  const categoryLabels = {
    flowers: 'Flowers & Blooms',
    vegetables: 'Vegetable Garden',
    lawn: 'Lawn & Grass',
    trees: 'Trees & Shrubs',
    herbs: 'Herbs',
    succulents: 'Succulents & Cacti',
    pests: 'Pest Management',
    general: 'General Care'
  };

  return (
    <div className="analysis-card">
      <h3>Garden Analysis</h3>
      <div className="analysis-bars">
        <div className="bar-group">
          <span className="bar-label">Foliage</span>
          <div className="bar-track">
            <div className="bar-fill green" style={{ width: `${Math.min(stats.greenPct, 100)}%` }} />
          </div>
          <span className="bar-value">{stats.greenPct}%</span>
        </div>
        <div className="bar-group">
          <span className="bar-label">Soil</span>
          <div className="bar-track">
            <div className="bar-fill brown" style={{ width: `${Math.min(stats.brownPct, 100)}%` }} />
          </div>
          <span className="bar-value">{stats.brownPct}%</span>
        </div>
        <div className="bar-group">
          <span className="bar-label">Blooms</span>
          <div className="bar-track">
            <div className="bar-fill pink" style={{ width: `${Math.min(stats.colorfulPct * 3, 100)}%` }} />
          </div>
          <span className="bar-value">{stats.colorfulPct}%</span>
        </div>
      </div>
      <div className="detected-tags">
        <span className="tags-label">Detected:</span>
        {categories.map(cat => (
          <span key={cat} className={`tag tag-${cat}`}>
            {categoryLabels[cat] || cat}
          </span>
        ))}
      </div>
    </div>
  );
}
