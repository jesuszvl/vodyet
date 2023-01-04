import { useState } from "react";
import Head from "next/head";
import History from "../src/components/History/History";
import styles from "../src/styles/Home.module.scss";

export default function Home() {
  const [login, setLogin] = useState(false);

  const onButtonClick = () => {
    setLogin(true);
  };

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
        <link
          href="https://fonts.cdnfonts.com/css/outfit"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/vodyet_logo.png" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>VODYET</h1>
        </div>
        <div className={styles.content}>
          {login ? (
            <History />
          ) : (
            <div className={styles.description}>
              <p>
                Whether you're looking to track your budget, save money, or
                simply get a better understanding of where your money is going,
                Vodyet has you covered.
              </p>
              <p>
                With easy-to-use features like customizable categories,
                automatic expense tracking, and in-depth reports, Vodyet makes
                it easy to stay on top of your finances and reach your financial
                goals.
              </p>
              <p>
                Plus, with seamless integration with popular banking and
                budgeting apps, you can easily sync your financial data and get
                a complete picture of your financial health.
              </p>
              <p>
                With Vodyet, it's never been easier to take control of your
                finances and live the life you want.
              </p>
            </div>
          )}
        </div>
        <div className={styles.footer}>
          <div className={styles["button-container"]}>
            <button className={styles.button} onClick={onButtonClick}>
              {login ? "NEW" : "LOGIN"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
