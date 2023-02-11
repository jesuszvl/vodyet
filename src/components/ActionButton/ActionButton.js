import Link from "next/link";
import styles from "./ActionButton.module.scss";

export default function ActionButton({ text, href }) {
  return (
    <Link href={href}>
      <div className={styles["button-container"]}>
        <button className={styles.button}>{text}</button>
      </div>
    </Link>
  );
}
