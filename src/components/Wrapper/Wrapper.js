import HeadTag from "../HeadTag/HeadTag";
import styles from "./Wrapper.module.scss";

export default function Wrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <HeadTag />
      {children}
    </div>
  );
}
