import Head from "next/head";
import Expense from "../components/Expense/Expense";
import History from "../components/History/History";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Control de Gastos</title>
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

      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>VODYET</h1>
        </div>
        <div className={styles.content}>
          <Expense />
          <History />
        </div>
      </main>
    </>
  );
}
