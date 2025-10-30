import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

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
            <Link to="/">
              <img src="/images/logo.png" alt="logo" className={styles.logo}/>
              <span>TravelX Mangystau</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            {isHomePage ? (
              <>
                <a href="#about">Жоба туралы</a>
                <a href="#destinations">Бағыттар</a>
                <a href="#gallery">Галерея</a>
                <a href="#contact" className={styles.cta}>Байланыс</a>
              </>
            ) : (
              <>
                <Link to="/#about">Жоба туралы</Link>
                <Link to="/#destinations">Бағыттар</Link>
                <Link to="/#gallery">Галерея</Link>
                <Link to="/#contact" className={styles.cta}>Байланыс</Link>
              </>
            )}
            
            <button 
              className={styles.themeToggle}
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Жарық режимге ауысу" : "Түнгі режимге ауысу"}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            
            <button 
              className={styles.menuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Мәзір"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
          
          <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
            {isHomePage ? (
              <>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>Жоба туралы</a>
                <a href="#destinations" onClick={() => setIsMobileMenuOpen(false)}>Бағыттар</a>
                <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Галерея</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Байланыс</a>
              </>
            ) : (
              <>
                <Link to="/#about" onClick={() => setIsMobileMenuOpen(false)}>Жоба туралы</Link>
                <Link to="/#destinations" onClick={() => setIsMobileMenuOpen(false)}>Бағыттар</Link>
                <Link to="/#gallery" onClick={() => setIsMobileMenuOpen(false)}>Галерея</Link>
                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Байланыс</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
