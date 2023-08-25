import { useState } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MenuPopup from "../MenuPopup/MenuPopup";
import styles from "./Wrapper.module.scss";

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
