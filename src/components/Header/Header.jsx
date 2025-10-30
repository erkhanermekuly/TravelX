import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header(){
  const [isDarkMode, setIsDarkMode] = useState(false);

  // localStorage-дан түнгі режимді оқу
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
      document.documentElement.setAttribute('data-theme', JSON.parse(savedTheme) ? 'dark' : 'light');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
  };

  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ''}`}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.brand}>
            <img src="/images/logo.png" alt="logo" className={styles.logo}/>
            <span>TravelX Mangystau</span>
          </div>
          <nav className={styles.nav}>
            <a href="#about">Жоба туралы</a>
            <a href="#destinations">Бағыттар</a>
            <a href="#gallery">Галерея</a>
            <a href="#contact" className={styles.cta}>Байланыс</a>
            <button 
              className={styles.themeToggle}
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Жарық режимге ауысу" : "Түнгі режимге ауысу"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
