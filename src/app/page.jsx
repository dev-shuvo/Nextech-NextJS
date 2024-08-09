import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>Creative Thoughts Agency</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed
          vero quae, tempore nam culpa quia numquam iure nulla ut.
        </p>
        <div className={styles.btn_group}>
          <button>Learn More</button>
          <Link className={styles.contact_btn} href={"/contact"}>
            Contact
          </Link>
        </div>
        <Image
          src={"/brands.png"}
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className={styles.img_container}>
        <Image src={"/home.png"} width={500} height={500} layout="responsive" />
      </div>
    </div>
  );
}
