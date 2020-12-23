import React from "react";
import styles from "./story-list.module.css";

const StoryList = (props) => (
  <ol className={styles.container}>
    <li>Photographer</li>
    <li>Writer</li>
    <li>Actor</li>
  </ol>
);

export default StoryList;
