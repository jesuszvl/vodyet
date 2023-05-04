import styles from "./MenuPopup.module.scss";
import Link from "next/link";

export default function MenuPopup({ onMenuPopupToggle, onUserLogout }) {
  return (
    <div className={styles["menu-popup-container"]}>
      <div className={styles["menu-popup-options"]}>
        <div className={styles.option} onClick={onMenuPopupToggle}>
          <Link href="/me" className={styles.option}>
            Mi Perfil
          </Link>
        </div>
        <div className={styles.option} onClick={onMenuPopupToggle}>
          <Link href="/dashboard" className={styles.option}>
            Mis Gastos
          </Link>
        </div>
        <div className={styles.option} onClick={onMenuPopupToggle}>
          <Link href="/new-expense" className={styles.option}>
            Nuevo Gasto
          </Link>
        </div>
        <div className={styles.option} onClick={onUserLogout}>
          Cerrar Sesión
        </div>
      </div>
    </div>
  );
}
