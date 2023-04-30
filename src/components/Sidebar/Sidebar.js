import styles from "./Sidebar.module.scss";
import CloseIcon from "../../icons/CloseIcon";
import Link from "next/link";

export default function Sidebar({
  onSidebarToggle,
  isUserLoggedIn,
  onUserLogout,
}) {
  return (
    <div className={styles["sidebar-container"]}>
      <div className={styles.menu} onClick={onSidebarToggle}>
        <CloseIcon />
      </div>
      <div className={styles["sidebar-options"]}>
        {isUserLoggedIn ? (
          <>
            <div className={styles.option}>
              <Link href="/me" className={styles.option}>
                Mi Perfil
              </Link>
            </div>
            <div className={styles.option}>
              <Link href="/history" className={styles.option}>
                Mis Gastos
              </Link>
            </div>
            <div className={styles.option} onClick={onUserLogout}>
              Cerrar Sesión
            </div>
          </>
        ) : (
          <>
            <div className={styles.option}>
              <Link href="/login">Iniciar Sesión</Link>
            </div>
            <div className={styles.option}>
              <Link href="/signup">Registrarme</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
