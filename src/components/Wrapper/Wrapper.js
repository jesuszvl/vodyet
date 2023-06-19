import { useState } from "react";
import MenuPopup from "../MenuPopup/MenuPopup";
import Footer from "../Footer/Footer";
import styles from "./Wrapper.module.scss";
import Header from "../Header/Header";

export default function Wrapper({
  children,
  showActionButton,
  showMenu,
  onUserLogout,
}) {
  const [showMenuPopup, setShowMenuPopup] = useState(false);

  const handleMenuPopupToggle = () => {
    setShowMenuPopup(!showMenuPopup);
  };

  return (
    <div className={styles.wrapper}>
      <Header
        showActionButton={showActionButton}
        showMenu={showMenu}
        showMenuPopup={showMenuPopup}
        onMenuPopupToggle={handleMenuPopupToggle}
      />
      {children}
      <Footer />
      {showMenuPopup && (
        <MenuPopup
          onMenuPopupToggle={() => setShowMenuPopup(false)}
          onUserLogout={onUserLogout}
        />
      )}
    </div>
  );
}
