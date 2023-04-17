import styles from "./BaseButton.module.scss";

export default function BaseButton({ text, onClick, type }) {
  return (
    <div className={styles["button-container"]}>
      <button type={type} className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
