import ActionButton from "../ActionButton/ActionButton";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <div className={styles["hero-container"]}>
      <h1 className={styles["hero-title"]}>Vive sin pedos de varo</h1>
      <span className={styles["hero-subtitle"]}>
        Presupuesta, ahorra y entiende tus finanzas personales de manera
        totalmente gratuita.
      </span>

      <div className={styles["hero-button"]}>
        <ActionButton text={"Comenzar ahora"} href={"/signup"} />
      </div>
    </div>
  );
}
