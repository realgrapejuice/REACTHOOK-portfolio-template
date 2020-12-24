import React, { useState } from "react";
import styles from "./actor.module.css";

const Actor = () => {
  const [status, setStatus] = useState(false);

  const handleTandF = () => {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  const downAnimation = status ? `${styles.goDown}` : `${styles.goUp}`;
  const upAnimation = status ? `${styles.goUp}` : `${styles.goDown}`;

  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <section className={styles.imgBox}>
          <div
            className={styles.imgStyleBox}
            onMouseEnter={handleTandF}
            onMouseLeave={handleTandF}
          >
            <img
              className={`${styles.imgLeft} ${downAnimation}`}
              src="./img/actor/olsen_left.jpg"
              alt="elizabeth_left"
            />
            <img
              className={`${styles.imgRight} ${upAnimation}`}
              src="./img/actor/olsen_right.jpg"
              alt="elizabeth_right"
            />
          </div>
        </section>
        <section className={styles.infoBox}>
          <span className={styles.name}>
            Elizabeth
            <br /> Olsen
          </span>
          <span className={styles.role}>Actor</span>
          <span className={styles.date}>2020.12.17</span>
        </section>
        <section className={styles.locationBox}>
          <div className={styles.first}>
            <span className={styles.number}>01</span>
            <span className={styles.icon}>
              <i className="far fa-circle"></i>
            </span>
          </div>
          <div className={styles.second}>
            <span className={styles.number}>02</span>
            <span className={styles.icon}>
              <i className="far fa-circle"></i>
            </span>
          </div>
          <div className={styles.third}>
            <span className={styles.number}>03</span>
            <span className={styles.icon}>
              <i className="fas fa-circle"></i>
            </span>
          </div>
        </section>
      </main>
    </section>
  );
};

export default Actor;
