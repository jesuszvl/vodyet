import styles from "../src/styles/NewExpense.module.scss";
import Header from "../src/components/Header/Header";
import ActionButton from "../src/components/ActionButton/ActionButton";
import TextInput from "../src/components/TextInput/TextInput";
import Wrapper from "../src/components/Wrapper/Wrapper";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NewExpense() {
  return (
    <Wrapper>
      <div className={styles.content}>
        <TextInput label={"Fecha del caos"} value={"11/02/2023"}></TextInput>
        <TextInput
          label={"¿De a cuanto el putazo"}
          value={"$179.12"}
        ></TextInput>
        <TextInput
          label={"Describeme esa chingadera"}
          value={"Spotify"}
        ></TextInput>
      </div>
      <ActionButton text={"INGRESAR GASTO"} href={"/history"} />
    </Wrapper>
  );
}
