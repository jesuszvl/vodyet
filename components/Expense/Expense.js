import styles from "./Expense.module.css";

export default function Expense() {
  return (
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
  );
}
