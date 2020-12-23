import React from "react";
import AuthorBox from "../authorBox/authorBox";
import Nav from "../nav/nav";
import styles from "./mystory-writer.module.css";

const MystoryWriter = ({ onNavClick, status }) => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <img src="../img/writer/writer-background.jpg" alt="" />
      </header>
      <section></section>
    </article>
  );
};

export default MystoryWriter;
