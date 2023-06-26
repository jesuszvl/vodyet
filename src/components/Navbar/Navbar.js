import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import CloseIcon from "../../icons/CloseIcon";
import MenuIcon from "../../icons/MenuIcon";
import { trackEvent } from "../../utils/analytics";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const router = useRouter();
  const menuOptions = [{ name: "Blog", href: "/blog" }];

  const trackLinkClick = (linkName) => {
    trackEvent("Menu", `Clicked ${linkName} option`);
  };

  const handleSignOut = async () => {};

  const handleOptionClick = (option) => {
    trackLinkClick(option.name);
    router.push(option.href);
  };

  const renderDropdownMenu = () => {
    return (
      <div className={styles["dropdown-menu"]}>
        {user && (
          <button
            className={styles["dropdown-menu-option"]}
            onClick={() => {
              trackLinkClick("Cerrar Sesión");
              handleSignOut();
            }}
          >
            Cerrar Sesión
          </button>
        )}
        {menuOptions.map((option) => (
          <button
            key={option.name}
            className={styles["dropdown-menu-option"]}
            onClick={() => handleOptionClick(option)}
          >
            {option.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={styles["navbar-container"]}>
      <div className={styles.navbar}>
        <Link href="/">
          <span className={styles.company}>VODYET</span>
        </Link>

        <div className={styles.menu}>
          {menuOptions.map((option) => (
            <button
              key={option.name}
              className={styles.link}
              onClick={() => {
                handleOptionClick(option);
                setIsMenuActive(!isMenuActive);
              }}
            >
              {option.name}
            </button>
          ))}
        </div>
        <div
          className={styles["menu-icon"]}
          onClick={() => {
            trackLinkClick("Menu");
            setIsMenuActive(!isMenuActive);
          }}
        >
          {!isMenuActive ? <MenuIcon /> : <CloseIcon />}
        </div>
      </div>
      {isMenuActive && renderDropdownMenu()}
    </div>
  );
};

export default Navbar;
