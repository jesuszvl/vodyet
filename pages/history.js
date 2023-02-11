import useSWR from "swr";

import { API_BASE_URL } from "../config/api";

import History from "../src/components/History/History";
import styles from "../src/styles/History.module.scss";
import Header from "../src/components/Header/Header";
import ActionButton from "../src/components/ActionButton/ActionButton";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(API_BASE_URL + "/api/expenses", fetcher);

  return (
    <div className={styles.wrapper}>
      <Header showMenu />
      <div className={styles.content}>
        {data && <History historyData={data.expenses} />}
      </div>
      <ActionButton text={"NUEVO GASTO"} href={"/new-expense"} />
    </div>
  );
}
