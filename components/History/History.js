import Record from "../Record/Record";
import styles from "./History.module.css";

export default function History() {
  return (
    <div className={styles.history}>
      <Record
        description={"Despensa"}
        ammount={"$1,234.56"}
        year={2022}
        day={27}
        month={"AGO"}
      />
      <Record
        description={"Caffenio"}
        ammount={"$133.00"}
        year={2022}
        day={27}
        month={"AGO"}
      />
      <Record
        description={"CFE"}
        ammount={"$250.00"}
        year={2022}
        day={25}
        month={"AGO"}
      />
      <Record
        description={"Didi Food"}
        ammount={"$301.58"}
        year={2022}
        day={18}
        month={"AGO"}
      />
      <Record
        description={"Didi Food"}
        ammount={"$212.90"}
        year={2022}
        day={29}
        month={"JUL"}
      />
    </div>
  );
}
