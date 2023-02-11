import Head from "next/head";
import styles from "./Header.module.scss";

export default function Header() {
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

      <div className={styles.header}>
        <h1 className={styles.title}>VODYET</h1>
      </div>
    </>
  );
}
