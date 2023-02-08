import { useState } from "react";
import useSWR from "swr";

import History from "../src/components/History/History";
import styles from "../src/styles/Home.module.scss";
import Header from "../src/components/Header/Header";
import ActionButton from "../src/components/ActionButton/ActionButton";
import Login from "../src/components/Login/Login";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  var environment = process.env.NODE_ENV || "development";

  const isDevelopment = environment === "development";

  const API_BASE_URL = isDevelopment
    ? "http://localhost:3000"
    : "https://vodyet.makahco.com";

  const { data, error } = useSWR(API_BASE_URL + "/api/expenses", fetcher);

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
