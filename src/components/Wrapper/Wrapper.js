import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Wrapper.module.scss";

export default function Wrapper({
  children,
  showMenu,
  showFooter,
  isUserLoggedIn,
  onUserLogout,
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const onSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className={styles.wrapper}>
      <Header showMenu={showMenu} onSidebarToggle={onSidebarToggle} />
      {children}
      {showFooter && <Footer />}
      {showSidebar && (
        <Sidebar
          onSidebarToggle={onSidebarToggle}
          isUserLoggedIn={isUserLoggedIn}
          onUserLogout={onUserLogout}
        />
      )}
    </div>
  );
}
