import { useState } from "react";
import useSWR from "swr";

import { API_BASE_URL } from "../config/api";

import History from "../src/components/History/History";
import styles from "../src/styles/Home.module.scss";
import Header from "../src/components/Header/Header";
import Login from "../src/components/Login/Login";
import Footer from "../src/components/Footer/Footer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [login, setLogin] = useState(false);
  const { data, error } = useSWR(API_BASE_URL + "/api/expenses", fetcher);

  const onButtonClick = () => {
    setLogin(true);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        {login ? (
          <History historyData={data.expenses} />
        ) : (
          <Login onButtonClick={onButtonClick} />
        )}
        {error && <div>Failed to load</div>}
        {!data && <div className={styles.loading}>Loading</div>}
      </div>
      {!login && <Footer />}
    </div>
  );
}
