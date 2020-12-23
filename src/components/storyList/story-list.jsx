import React from "react";
import { Link } from "react-router-dom";
import styles from "./story-list.module.css";

const StoryList = () => (
  <ol className={styles.container}>
    <li>
      <Link className={styles.photographer} to="/story/photographer">
        Photographer
      </Link>
    </li>
    <li>
      <Link className={styles.writer} to="/story/writer">
        Writer
      </Link>
    </li>
    <li>
      <Link className={styles.actor} to="/story/actor">
        Actor
      </Link>
    </li>
  </ol>
);

export default StoryList;
