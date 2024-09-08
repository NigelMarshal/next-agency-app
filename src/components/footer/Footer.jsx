import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>NM</div>
        <div className={styles.text}>
          Example Agency &copy; All rights reserved
        </div>
      </div>
    </>
  );
};
export default Footer;
