import { Link } from "react-router-dom";
import "../styles/settings.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Settings() {
  // Theme (dark / light)
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Language (en / ar)
  const { language, toggleLanguage, t } = useContext(LanguageContext);

  return (
    <div className="settings-page">
      {/* Title */}
      <h1 className="settings-title">{t.settings.title}</h1>

      <div className="settings-card">
        {/* Dark mode toggle */}
        <div className="setting-item">
          <span>{t.settings.darkMode}</span>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>

        {/* Language toggle */}
        <div className="setting-item">
          <span>{t.settings.language}</span>
          <button onClick={toggleLanguage} className="lang-btn">
            {language === "en" ? "العربية" : "English"}
          </button>
        </div>

        {/* Auth buttons */}
        <div className="auth-buttons">
          <Link to="/login" className="auth-btn">
            {t.auth.login}
          </Link>

          <Link to="/signup" className="auth-btn secondary">
            {t.auth.signup}
          </Link>
        </div>
      </div>
    </div>
  );
}
