'use client';

import { useState, useEffect } from 'react';
import { Settings, Palette, Type } from 'lucide-react';

interface ThemeOption {
  name: string;
  colors: {
    accent: string;
    accentHover: string;
  };
}

const themeOptions: ThemeOption[] = [
  {
    name: 'Lavender',
    colors: {
      accent: '#BE9EFF',
      accentHover: '#D4BFFF'
    }
  },
  {
    name: 'Ocean',
    colors: {
      accent: '#4ECDC4',
      accentHover: '#6ED7D0'
    }
  },
  {
    name: 'Sunset',
    colors: {
      accent: '#FF6B6B',
      accentHover: '#FF8585'
    }
  },
  {
    name: 'Forest',
    colors: {
      accent: '#2ECC71',
      accentHover: '#4EDC81'
    }
  },
  {
    name: 'Royal',
    colors: {
      accent: '#9B59B6',
      accentHover: '#B06BC9'
    }
  }
];

export const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('Lavender');
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const savedTheme = localStorage.getItem('customTheme');
    const savedFontSize = localStorage.getItem('fontSize');
    
    if (savedTheme) {
      const theme = themeOptions.find(t => t.name === savedTheme);
      if (theme) {
        setSelectedTheme(theme.name);
        applyTheme(theme.colors);
      }
    }
    
    if (savedFontSize) {
      setFontSize(Number(savedFontSize));
      document.documentElement.style.fontSize = `${savedFontSize}px`;
    }
  }, []);

  const applyTheme = (colors: ThemeOption['colors']) => {
    document.documentElement.style.setProperty('--accent', colors.accent);
    document.documentElement.style.setProperty('--accent-hover', colors.accentHover);
  };

  const handleThemeChange = (theme: ThemeOption) => {
    setSelectedTheme(theme.name);
    applyTheme(theme.colors);
    localStorage.setItem('customTheme', theme.name);
  };

  const handleFontSizeChange = (size: number) => {
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}px`;
    localStorage.setItem('fontSize', size.toString());
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-customizer-toggle"
        aria-label="Customize theme"
      >
        <Settings size={20} />
      </button>

      {isOpen && (
        <div className="theme-customizer-panel">
          <div className="theme-customizer-section">
            <h4>
              <Palette size={16} />
              <span>Theme Colors</span>
            </h4>
            <div className="theme-colors">
              {themeOptions.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme)}
                  className={`theme-color-option ${selectedTheme === theme.name ? 'selected' : ''}`}
                  style={{ '--theme-color': theme.colors.accent } as React.CSSProperties}
                  aria-label={`Select ${theme.name} theme`}
                >
                  <span className="theme-color-preview" />
                  <span className="theme-name">{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="theme-customizer-section">
            <h4>
              <Type size={16} />
              <span>Font Size</span>
            </h4>
            <div className="font-size-control">
              <button
                onClick={() => handleFontSizeChange(Math.max(14, fontSize - 1))}
                aria-label="Decrease font size"
              >
                -
              </button>
              <span>{fontSize}px</span>
              <button
                onClick={() => handleFontSizeChange(Math.min(20, fontSize + 1))}
                aria-label="Increase font size"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 