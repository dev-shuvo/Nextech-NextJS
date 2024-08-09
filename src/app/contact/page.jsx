import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <Image
          src={"/contact.png"}
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className={styles.form_container}>
        <form action="">
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea cols={30} rows={10} placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
