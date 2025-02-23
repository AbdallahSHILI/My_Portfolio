import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import styles from "./darkLightButton.module.css";

const DarkLightButton = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Set initial theme based on localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleMode = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleMode}
      className={`${styles.toggleSwitch} ${
        isDark ? styles.dark : styles.light
      }`}
    >
      <span className={styles.label}>{isDark ? "NIGHT MODE" : "DAY MODE"}</span>
      {isDark ? (
        <Moon className={styles.icon} size={18} />
      ) : (
        <Sun className={styles.icon} size={18} />
      )}
    </button>
  );
};

export default DarkLightButton;
