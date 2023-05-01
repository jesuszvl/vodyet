import styles from "./Sidebar.module.scss";
import CloseIcon from "../../icons/CloseIcon";
import Link from "next/link";

export default function Sidebar({ onSidebarClose, onUserLogout }) {
  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles.menu} onClick={onSidebarClose}>
        <CloseIcon />
      </div>
      <div className={styles["sidebar-options"]}>
        <div className={styles.option} onClick={onSidebarClose}>
          <Link href="/me" className={styles.option}>
            Mi Perfil
          </Link>
        </div>
        <div className={styles.option} onClick={onSidebarClose}>
          <Link href="/history" className={styles.option}>
            Mis Gastos
          </Link>
        </div>
        <div className={styles.option} onClick={onUserLogout}>
          Cerrar Sesión
        </div>
      </div>
    </div>
  );
}
