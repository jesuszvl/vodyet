import Link from "next/link";
import styles from "./ActionButton.module.scss";
import classNames from "classnames";

export default function ActionButton({ text, href, isPink = false }) {
  return (
    <Link href={href}>
      <div className={styles["button-container"]}>
        <button
          className={classNames(styles.button, { [styles.pink]: isPink })}
        >
          {text}
        </button>
      </div>
    </Link>
  );
}
