import { useState } from "react";
import useSWR from "swr";

import History from "../src/components/History/History";
import styles from "../src/styles/Home.module.scss";
import Header from "../src/components/Header/Header";
import ActionButton from "../src/components/ActionButton/ActionButton";
import Login from "../src/components/Login/Login";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/expenses", fetcher);

  const [login, setLogin] = useState(false);

  const onButtonClick = () => {
    setLogin(true);
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        {login ? <History historyData={data} /> : <Login />}
      </div>
      <ActionButton
        text={login ? "NEW EXPENSE" : "LOGIN"}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}
