import Link from "next/link";

import CloseIcon from "../../icons/CloseIcon";
import MenuIcon from "../../icons/MenuIcon";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./Header.module.scss";

export default function Header({
  showActionButton,
  showMenu,
  onMenuPopupToggle,
  showMenuPopup,
}) {
  return (
    <div className={styles["header-container"]}>
      <Link href="/" className={styles["header-title"]}>
        VODYET
      </Link>
      {showActionButton && (
        <div className={styles["header-button"]}>
          <ActionButton text={"Iniciar Sesión"} href={"/login"} />
        </div>
      )}
      {showMenu && (
        <div className={styles.menu} onClick={onMenuPopupToggle}>
          {showMenuPopup ? <CloseIcon /> : <MenuIcon />}
        </div>
      )}
    </div>
  );
}
