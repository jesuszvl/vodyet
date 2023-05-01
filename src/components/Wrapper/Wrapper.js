import { useState } from "react";

import HeadTag from "../HeadTag/HeadTag";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import styles from "./Wrapper.module.scss";
import Header from "../Header/Header";

export default function Wrapper({
  children,
  showActionButton,
  showMenu,
  onUserLogout,
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Header
        showActionButton={showActionButton}
        showMenu={showMenu}
        onSidebarOpen={() => setShowSidebar(true)}
      />
      <HeadTag />
      {children}
      <Footer />
      {showSidebar && (
        <Sidebar
          onSidebarClose={() => setShowSidebar(false)}
          onUserLogout={onUserLogout}
        />
      )}
    </div>
  );
}
