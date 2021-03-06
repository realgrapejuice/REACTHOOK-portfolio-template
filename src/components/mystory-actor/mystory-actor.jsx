import React from "react";
import styles from "./mystory-actor.module.css";

const MystoryActor = () => (
  <article className={styles.container}>
    <header className={styles.header}>
      <h1>Elizabeth Olsen</h1>
      <span>Actor</span>
    </header>
    <main className={styles.storyBox}>
      <section className={styles.first}>
        <div className={styles.textBox}>
          <h1>My Story</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className={styles.imgBox}>
          <img src="../img/actor/olsen.jpg" alt="olsen" />
        </div>
      </section>
      <section className={styles.second}>
        <div className={styles.textBox}>
          <h1>My Story</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <ul className={styles.imgBlock}>
          <li>
            <img src="../img/actor/actor-block-img1.jpg" alt="block1" />
          </li>
          <li>
            <img src="../img/actor/actor-block-img2.jpg" alt="block2" />
          </li>
          <li>
            <img src="../img/actor/actor-block-img3.jpg" alt="block3" />
          </li>
          <li>
            <img src="../img/actor/actor-block-img4.jpg" alt="block4" />
          </li>
          <li>
            <img src="../img/actor/actor-block-img5.jpg" alt="block5" />
          </li>
          <li>
            <img src="../img/actor/actor-block-img6.jpg" alt="block6" />
          </li>
        </ul>
      </section>
    </main>
  </article>
);

export default MystoryActor;
