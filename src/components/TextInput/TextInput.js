import styles from "./TextInput.module.scss";

export default function TextInput({ label, value }) {
  return (
    <div className={styles["text-input"]}>
      <div className={styles["label-container"]}>
        <label className={styles.label}>{label}</label>
      </div>
      <div className={styles["input-container"]}>
        <input className={styles.input} value={value} />
      </div>
    </div>
  );
}
