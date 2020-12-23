import React from "react";
import styles from "./authorBox.module.css";

const AuthorBox = ({ onMenuClick }) => {
  const handleMenuClick = () => {
    onMenuClick();
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.author}>Sarah Ondana</h1>
      <button
        className={styles.menuBtn}
        type="button"
        onClick={handleMenuClick}
      >
        Menu
      </button>
    </header>
  );
};

export default AuthorBox;
