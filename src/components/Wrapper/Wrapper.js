import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Wrapper.module.scss";

export default function Wrapper({ children, showMenu, showFooter }) {
  return (
    <div className={styles.wrapper}>
      <Header showMenu={showMenu} />
      {children}
      {showFooter && <Footer />}
    </div>
  );
}
