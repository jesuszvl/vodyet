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

  const onButtonClick = () => {
    setLogin(true);
  };

  const { data, error } = useSWR(API_BASE_URL + "/api/expenses", fetcher);

  return (
    <div className={styles.wrapper}>
      <Header />
      {error && <div>Failed to load</div>}
      {!data && <div>Loading</div>}
      {!error && data && (
        <>
          <div className={styles.content}>
            {login ? (
              <History historyData={data.expenses} />
            ) : (
              <Login onButtonClick={onButtonClick} />
            )}
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}
