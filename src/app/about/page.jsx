import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h2>About Agency</h2>
        <h1>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia amet
          similique at. Consequuntur quasi eum ratione maiores veritatis
          blanditiis reiciendis, dolores ab! Suscipit sapiente vel voluptatibus
          esse a, culpa consequuntur!
        </p>
        <div className={styles.box_group}>
          <div className={styles.box}>
            <h4>10K+</h4>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h4>10K+</h4>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h4>10K+</h4>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.img_container}>
        <Image
          src={"/about.png"}
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default About;
