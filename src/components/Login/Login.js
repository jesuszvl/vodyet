import ActionButton from "../ActionButton/ActionButton";
import styles from "./Login.module.scss";

export default function Login({ onButtonClick }) {
  return (
    <>
      <div className={styles.description}>
        <p>¡Vive sin preocupaciones financieras con Vodyet!</p>
        <p>La solución para presupuestar, ahorrar y entender tus finanzas.</p>
      </div>
      <ActionButton text={"INICIAR SESIÓN"} onButtonClick={onButtonClick} />
    </>
  );
}
