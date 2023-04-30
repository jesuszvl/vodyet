import Link from "next/link";
import MenuIcon from "../../icons/MenuIcon";
import styles from "./Header.module.scss";
import ActionButton from "../ActionButton/ActionButton";

export default function Header({ showMenu, onSidebarToggle }) {
  return (
    <div className={styles["header-container"]}>
      <Link href="/" className={styles["header-title"]}>
        VODYET
      </Link>
      <div className={styles["header-button"]}>
        <ActionButton text={"Iniciar Sesión"} href={"/login"} />
      </div>
      {showMenu && (
        <div className={styles.menu} onClick={onSidebarToggle}>
          <MenuIcon />
        </div>
      )}
    </div>
  );
}
