import './App.css';
import Header from './components/Header';
import MainContent from "./components/main/MainContent";
import { HashRouter as Router } from "react-router-dom";  
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";
import { ThemeProvider } from './context/ThemeContext';

// ポップでアクセシブルな色のパレット
const popColors = [
  "#FF6B6B", // コーラルピンク
  "#4ECDC4", // ターコイズ
  "#45B7D1", // スカイブルー
  "#96CEB4", // セージグリーン
  "#FFBE0B", // マンゴーイエロー
  "#FF006E", // ホットピンク
  "#8338EC", // パープル
  "#4361EE", // ブライトブルー（明るく調整）
  "#FB5607", // オレンジ
  "#00BBF9"  // アクアブルー
];

// 色を取得する関数
const getPopColor = () => {
  return popColors[Math.floor(Math.random() * popColors.length)];
};

// 背景色の明るさを計算する関数
const getBrightness = (hexColor) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
};

// テキストカラーとドロップダウンスタイルを計算する関数を単純化
const getColors = (backgroundColor) => {
  const brightness = getBrightness(backgroundColor);
  const isLight = brightness > 128;

  return {
    textColor: isLight ? '#2D3436' : '#FFFFFF',
    dropdownStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)', // 常に明るい背景
      textColor: '#2D3436', // ドロップダウンのテキストは常に濃いグレー
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    }
  };
};

function App() {
  const [bgColor, setBgColor] = useState(getPopColor());
  const [colorScheme, setColorScheme] = useState(getColors(getPopColor()));
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguage(lng);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newColor = getPopColor();
      setBgColor(newColor);
      setColorScheme(getColors(newColor));
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <Router>
        <div className={`App lang-${language}`}>
          <Header 
            bgColor={bgColor}
            textColor={colorScheme.textColor}
            dropdownStyle={colorScheme.dropdownStyle}
            language={language} 
            changeLanguage={changeLanguage} 
          />
          <MainContent bgColor={bgColor} language={language} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
