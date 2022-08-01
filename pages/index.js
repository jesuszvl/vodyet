import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CONTROL DE GASTOS</title>
        <meta name="description" content="frontbudget" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>EXPENSE CONTROL</h1>
          </div>

          <div className={styles.expense}>
            <div className={styles.section}>
              <input type="date" className={styles.input} />
            </div>
            <div className={styles.section}>
              <input className={styles.input} placeholder="CATEGORY" />
            </div>
            <div className={styles.section}>
              <input className={styles.input} placeholder="AMMOUNT" />
            </div>
            <div className={styles.section}>
              <input className={styles.input} placeholder="DESCRIPTION" />
            </div>
            <button className={styles.add}>ADD EXPENSE</button>
          </div>

          <div className={styles.history}>
            <div className={styles.record}>
              <div className={styles.date}>
                <span className={styles.year}>2022</span>
                <span className={styles.day}>27</span>
                <span className={styles.month}>AGO</span>
              </div>
              <div className={styles.info}>
                <div className={styles.tag}>
                  <span className={styles.category}>VIVIENDA</span>
                </div>
                <span className={styles.description}>Despensa Walmart</span>
              </div>
              <span className={styles.ammount}>$1,243.56</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
