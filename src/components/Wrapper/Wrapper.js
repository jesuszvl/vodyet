import HeadTag from "../HeadTag/HeadTag";
import Footer from "../Footer/Footer";
import styles from "./Wrapper.module.scss";

export default function Wrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <HeadTag />
      {children}
      <Footer />
    </div>
  );
}
