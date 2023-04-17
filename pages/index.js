import ActionButton from "../src/components/ActionButton/ActionButton";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";

import styles from "../src/styles/Index.module.scss";

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>
            ¡Vive sin pedos de varo con <b>Vodyet!</b>
          </div>
          <div className={styles.subtitle}>
            La solución para presupuestar, ahorrar y entender tus finanzas
            personales.
          </div>
        </div>
        <ActionButton text={"IDENTIFICARME"} href={"/login"} />
      </div>
      <Footer />
    </div>
  );
}
