import React, { useState } from "react";
import { Link } from "react-router-dom";
import StoryList from "../storyList/story-list";
import styles from "./nav.module.css";

const Nav = ({ onNavClick, status }) => {
  const handleNavClick = () => {
    onNavClick();
  };

  const [contact, setContact] = useState(false);
  const [story, setStory] = useState(false);
  const contactAnimation = contact
    ? `${styles.fadeLeft}`
    : `${styles.fadeRight}`;
  const statusAnimation = status ? `${styles.fadeDown}` : `${styles.fadeUp}`;

  const handleContact = () => {
    if (!contact) {
      setContact(true);
    } else {
      setContact(false);
    }
  };

  const handleStory = () => {
    if (!story) {
      setStory(true);
    } else {
      setStory(false);
    }
  };
  return (
    <nav className={`${styles.container} ${statusAnimation}`}>
      <dl className={`${styles.descList} ${contactAnimation}`}>
        <dt className={styles.category}>Phone</dt>
        <dd className={styles.desc}>+82-10-1234-5678</dd>
        <dt className={styles.category}>Mail</dt>
        <dd className={styles.desc}>pineapple@gmall.com</dd>
        <dt className={styles.category}>SNS</dt>
        <dd className={styles.icon}>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </dd>
      </dl>
      <ul className={styles.navList}>
        <li className={styles.contact} onClick={handleContact}>
          Contact
        </li>
        <li>
          <Link className={styles.home} to="/home">
            Home
          </Link>
        </li>
        <li
          className={styles.story}
          onMouseEnter={handleStory}
          onMouseLeave={handleStory}
        >
          {story === false ? "Story" : <StoryList />}
        </li>
        <li className={styles.closeBtn} onClick={handleNavClick}>
          Close
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
