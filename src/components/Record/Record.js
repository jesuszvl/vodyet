import styles from "./Record.module.scss";
import classNames from "classnames";

export default function Record({ description, ammount, date, category }) {
  return (
    <div className={styles.record}>
      <span className={classNames(styles["icon"], styles[category])}></span>
      <span className={styles.description}>{description}</span>
      <span className={styles.ammount}>{ammount}</span>
    </div>
  );
}
