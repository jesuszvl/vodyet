import React from "react";

import BaseButton from "../BaseButton/BaseButton";
import TextInput from "../TextInput/TextInput";
import styles from "./UserForm.module.scss";

export default function UserForm({
  title,
  subtitle,
  handleSubmit,
  submitText,
  email,
  setEmail,
}) {
  return (
    <div className={styles["user-form-wrapper"]}>
      <div className={styles["user-form-container"]}>
        <div className={styles["user-form-main"]}>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <form onSubmit={handleSubmit} className={styles["user-form"]}>
          <div className={styles["user-form-fields"]}>
            <TextInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <BaseButton text={submitText} type="submit" isPink />
        </form>
      </div>
    </div>
  );
}
