import styles from "./Record.module.scss";
import classNames from "classnames";

export default function Record({
  description,
  ammount,
  year,
  day,
  month,
  category,
}) {
  return (
    <div className={styles.record}>
      <div className={styles.date}>
        <span className={styles.year}>{year}</span>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
      </div>
      <span className={styles.description}>{description}</span>
      <span className={classNames(styles["ammount"], styles[category])}>
        {ammount}
      </span>
    </div>
  );
}
