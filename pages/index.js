import Head from "next/head";
import History from "../components/History/History";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>VODYET</title>
        <meta name="description" content="frontbudget" />
        <link
          href="https://fonts.cdnfonts.com/css/mismo"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-9"
          rel="stylesheet"
        ></link>
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>VODYET</h1>
        </div>
        <div className={styles.content}>
          <History />
        </div>
        <div className={styles.footer}>
          <div className={styles["button-container"]}>
            <button className={styles.button}>NEW</button>
          </div>
        </div>
      </div>
    </>
  );
}
