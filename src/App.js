import './App.css';
import Header from './components/Header';
import MainContent from "./components/main/MainContent";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";  
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // ✅ i18n をインポート
import "./i18n"; // ✅ i18n 設定をインポート

// ✅ 明るい色のリスト
const brightColors = [
  "#FFB6C1", // Light Pink
  "#FF69B4", // Hot Pink
  "#FFD700", // Gold
  "#FF8C00", // Dark Orange
  "#98FB98", // Pale Green
  "#87CEFA", // Light Sky Blue
  "#AFEEEE", // Pale Turquoise
  "#FFDAB9", // Peach Puff
  "#E6E6FA", // Lavender
  "#FFC0CB"  // Pink
];

// ✅ 明るい色からランダムに選択する関数
const getBrightPresetColor = () => {
  return brightColors[Math.floor(Math.random() * brightColors.length)];
};

function App() {
  const [bgColor, setBgColor] = useState(getBrightPresetColor()); // ✅ 関数を定義した後に useState で使用
  const { i18n } = useTranslation(); // ✅ 言語を取得
  const [language, setLanguage] = useState(i18n.language || "en");

  // 言語変更時に `localStorage` に保存し、全コンポーネントに反映
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguage(lng); // ✅ 状態を更新して即時反映
  };

  // ✅ 3秒ごとにランダムな背景色に変更
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(getBrightPresetColor()); // 🔹 明るい色だけをセット
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]); // ✅ 言語が変わるたびに更新

  return (
    <Router>
      <div className={`App lang-${language}`}>
        {/* 言語情報を Header に渡す */}
        <Header bgColor={bgColor} language={language} changeLanguage={changeLanguage} />
        <MainContent bgColor={bgColor} language={language} />
      </div>
    </Router>
  );
}

export default App;
