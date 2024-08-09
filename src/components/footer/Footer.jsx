import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Nextech.</div>
      <div className={styles.text}>&copy; Nextech, All rights reserved.</div>
    </div>
  );
};

export default Footer;
