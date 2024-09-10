import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About the team",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>Lorem Ipsum</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste,
          iusto consectetur labore optio nam ullam architecto voluptatum
          accusantium eveniet debitis, excepturi laudantium, quaerat expedita
          fugiat dolore repudiandae ab dolorem.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Customers</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Customers</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Customers</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
