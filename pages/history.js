import { useEffect, useState } from "react";
import useSWR from "swr";

import { API_BASE_URL } from "../config/api";
import auth from "../src/utils/firebaseConfig";

import History from "../src/components/History/History";
import styles from "../src/styles/History.module.scss";
import Header from "../src/components/Header/Header";
import ActionButton from "../src/components/ActionButton/ActionButton";
import Wrapper from "../src/components/Wrapper/Wrapper";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [userId, setUserId] = useState(null);
  const { data, error } = useSWR(
    userId ? API_BASE_URL + `/api/expenses?userId=${userId}` : null,
    fetcher
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Wrapper showMenu>
      <div className={styles.content}>
        {data && <History historyData={data.expenses} />}
      </div>
      <ActionButton text={"NUEVO GASTO"} href={"/new-expense"} />
    </Wrapper>
  );
}
