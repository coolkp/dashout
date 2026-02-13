import React, { useState, useRef, useCallback } from 'react';
import PhotoUpload from './components/PhotoUpload';
import GardenAnalysis from './components/GardenAnalysis';
import TipsDisplay from './components/TipsDisplay';
import { analyzeGardenColors, getRandomTips } from './gardenTips';

export default function App() {
  const [photo, setPhoto] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [tips, setTips] = useState(null);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(document.createElement('canvas'));

  const analyzePhoto = useCallback((imageSrc) => {
    setPhoto(imageSrc);
    setLoading(true);
    setAnalysis(null);
    setTips(null);

    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const maxSize = 300;
      const scale = Math.min(maxSize / img.width, maxSize / img.height);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      const result = analyzeGardenColors(imageData);
      const gardenTips = getRandomTips(result.categories, 6);

      // Small delay so the user sees the loading state
      setTimeout(() => {
        setAnalysis(result);
        setTips(gardenTips);
        setLoading(false);
      }, 800);
    };
    img.src = imageSrc;
  }, []);

  function handleReset() {
    setPhoto(null);
    setAnalysis(null);
    setTips(null);
    setLoading(false);
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Garden Photo Tips</span>
          </div>
        </div>
      </header>

      <main className="main">
        {!photo && (
          <section className="hero">
            <h1>Get Tips for Your Garden</h1>
            <p className="hero-sub">
              Snap a photo of your garden and receive personalized gardening tips
              based on what we detect in your image.
            </p>
          </section>
        )}

        {!photo && <PhotoUpload onPhotoSelected={analyzePhoto} />}

        {photo && (
          <section className="results">
            <div className="photo-preview">
              <img src={photo} alt="Your garden" />
              <button className="reset-btn" onClick={handleReset}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
                Try Another Photo
              </button>
            </div>

            {loading && (
              <div className="loading">
                <div className="spinner" />
                <p>Analyzing your garden...</p>
              </div>
            )}

            {analysis && <GardenAnalysis stats={analysis.stats} categories={analysis.categories} />}
            {tips && <TipsDisplay tips={tips} />}
          </section>
        )}
      </main>

      <footer className="footer">
        <p>Garden Photo Tips &mdash; Upload a photo, get gardening advice.</p>
      </footer>
    </div>
  );
}
