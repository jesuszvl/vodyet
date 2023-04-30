import Head from "next/head";
import Link from "next/link";
import MenuIcon from "../../icons/MenuIcon";
import styles from "./Header.module.scss";

export default function Header({ showMenu, onSidebarToggle }) {
  return (
    <>
      <Head>
        <title>VODYET</title>
        <meta name="description" content="frontbudget" />
        <link
          href="https://fonts.cdnfonts.com/css/instagram-sans-condensed"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/outfit"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/monesque"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/vodyet_logo.jpg" />
      </Head>

      <div className={styles.container}>
        <Link href="/" className={styles.header}>
          <span className={styles.title}>VODYET</span>
        </Link>
        {showMenu && (
          <div className={styles.menu} onClick={onSidebarToggle}>
            <MenuIcon />
          </div>
        )}
      </div>
    </>
  );
}
