import styles from "./ActionButton.module.scss";

export default function ActionButton({ text, onButtonClick }) {
  return (
    <div className={styles["button-container"]}>
      <button className={styles.button} onClick={onButtonClick}>
        {text}
      </button>
    </div>
  );
}
