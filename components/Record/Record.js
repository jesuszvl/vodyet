import styles from "./Record.module.css";

export default function Record({ description, ammount, year, day, month }) {
  return (
    <div className={styles.record}>
      <div className={styles.date}>
        <span className={styles.year}>{year}</span>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
      </div>
      <span className={styles.description}>{description}</span>
      <span className={styles.ammount}>{ammount}</span>
    </div>
  );
}
