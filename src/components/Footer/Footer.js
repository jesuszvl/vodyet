import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer"]}>
        <p className={styles["footer-content"]}>
          developed by{" "}
          <a href="https://zvl.dev" className={styles["footer-link"]}>
            zvl.dev ®
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
