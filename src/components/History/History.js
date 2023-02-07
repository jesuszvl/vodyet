import Record from "../Record/Record";
import styles from "./History.module.scss";

export default function History({ historyData }) {
  return (
    <div className={styles.history}>
      {historyData?.map((record, i) => {
        return <Record key={i} {...record} />;
      })}
    </div>
  );
}
