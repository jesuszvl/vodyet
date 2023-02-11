import styles from "../src/styles/NewExpense.module.scss";
import Header from "../src/components/Header/Header";
import ActionButton from "../src/components/ActionButton/ActionButton";
import TextInput from "../src/components/TextInput/TextInput";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NewExpense() {
  return (
    <div className={styles.wrapper}>
      <Header showMenu />
      <div className={styles.content}>
        <TextInput label={"¿En que día fue?"} value={"11/02/2023"}></TextInput>
        <TextInput
          label={"¿Cuanto te chingaste?"}
          value={"$179.12"}
        ></TextInput>
        <TextInput label={"¿En que mamada?"} value={"Spotify"}></TextInput>
      </div>
      <ActionButton text={"INGRESAR GASTO"} href={"/history"} />
    </div>
  );
}
