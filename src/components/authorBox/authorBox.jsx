import React from "react";
import styles from "./authorBox.module.css";

const AuthorBox = ({ onMenuClick }) => {
  const handleMenuClick = () => {
    onMenuClick();
  };

  const pathName = window.location.pathname.split("/");
  const authorStyle =
    pathName[1] === "story" ? `${styles.authorStory}` : `${styles.authorHome}`;
  const menuBtnStyle =
    pathName[1] === "story"
      ? `${styles.menuBtnStory}`
      : `${styles.menuBtnHome}`;

  return (
    <header className={styles.header}>
      <h1 className={`${authorStyle}`}>Sarah Ondana</h1>
      <button
        className={`${menuBtnStyle}`}
        type="button"
        onClick={handleMenuClick}
      >
        Menu
      </button>
    </header>
  );
};

export default AuthorBox;
