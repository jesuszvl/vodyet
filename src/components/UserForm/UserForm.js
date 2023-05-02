import React from "react";
import styles from "./UserForm.module.scss";
import TextInput from "../TextInput/TextInput";
import BaseButton from "../BaseButton/BaseButton";

export default function UserForm({
  title,
  subtitle,
  handleSubmit,
  submitText,
  email,
  setEmail,
  password,
  setPassword,
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
            <TextInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <BaseButton text={submitText} type="submit" />
        </form>
      </div>
    </div>
  );
}
