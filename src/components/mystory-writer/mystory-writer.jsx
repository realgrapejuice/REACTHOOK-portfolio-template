import React from "react";
import styles from "./mystory-writer.module.css";

const MystoryWriter = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1>Murakami Haruki</h1>
        <span>Writer</span>
      </header>
      <main className={styles.storyBox}>
        <section className={styles.first}>
          <div className={styles.textBox}>
            <h1>My Story</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className={styles.imgBox}>
            <img src="../img/writer/haruki.jpeg" alt="haruki" />
          </div>
        </section>
        <section className={styles.second}>
          <div className={styles.textBox}>
            <h1>My Story</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <ul className={styles.imgBlock}>
            <li>
              <img src="../img/writer/writer-block-img1.jpg" alt="block-1" />
            </li>
            <li>
              <img src="../img/writer/writer-block-img2.jpg" alt="block-2" />
            </li>
            <li>
              <img src="../img/writer/writer-block-img3.jpg" alt="block-3" />
            </li>
            <li>
              <img src="../img/writer/writer-block-img4.jpg" alt="block-4" />
            </li>
            <li>
              <img src="../img/writer/writer-block-img5.jpg" alt="block-5" />
            </li>
            <li>
              <img src="../img/writer/writer-block-img6.jpg" alt="block-6" />
            </li>
          </ul>
        </section>
      </main>
    </article>
  );
};

export default MystoryWriter;
