import Head from "next/head";
import Expense from "../components/Expense/Expense";
import History from "../components/History/History";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>CONTROL DE GASTOS</title>
        <meta name="description" content="frontbudget" />
      </Head>

      <main>
        <div className={styles.header}>
          <h1 className={styles.title}>CONTROL DE GASTOS</h1>
        </div>
        <div className={styles.content}>
          <Expense />
          <History />
        </div>
      </main>
    </>
  );
}
