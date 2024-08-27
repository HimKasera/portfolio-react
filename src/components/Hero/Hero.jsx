import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm </h1>
        <h3 className={styles.title}>Himanshu Kasera</h3>
        <p className={styles.description}>
        I am an innovative software developer skilled in blockchain, data analysis. I have experience in building Power BI dashboards, blockchain systems, and web apps using Python and JavaScript. Certified in AWS and blockchain, I have achieved top positions in multiple hackathons.
        </p>
        <a href="himanshukasera2238@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
