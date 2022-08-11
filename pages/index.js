import Head from "next/head";
import Expense from "../components/Expense/Expense";
import History from "../components/History/History";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CONTROL DE GASTOS</title>
        <meta name="description" content="frontbudget" />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>EXPENSE CONTROL</h1>
          </div>
          <div className={styles.content}>
            <Expense />
            <History />
          </div>
        </div>
      </main>
    </div>
  );
}
