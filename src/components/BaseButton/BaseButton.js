import classNames from "classnames";

import styles from "./BaseButton.module.scss";

export default function BaseButton({ text, onClick, type, isPink = false }) {
  return (
    <div className={styles["button-container"]}>
      <button
        type={type}
        className={classNames(styles.button, { [styles.pink]: isPink })}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
