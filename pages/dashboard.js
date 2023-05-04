import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

import { API_BASE_URL } from "../config/api";
import auth from "../src/utils/firebaseConfig";

import Wrapper from "../src/components/Wrapper/Wrapper";
import History from "../src/components/History/History";
import DashboardOptions from "../src/components/DashboardOptions/DashboardOptions";
import styles from "../src/styles/Dashboard.module.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [userId, setUserId] = useState(null);
  const { data, error } = useSWR(
    userId ? API_BASE_URL + `/api/expenses?userId=${userId}` : null,
    fetcher
  );

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        router.push("/");
      }
    });

    return unsubscribe;
  }, [router]);

  const isUserLoggedIn = userId !== null;

  if (!data) return <p>Loading...</p>;

  return (
    <Wrapper
      showMenu
      isUserLoggedIn={isUserLoggedIn}
      onUserLogout={() => {
        auth.signOut();
      }}
    >
      <div className={styles.content}>
        <div className={styles.history}>
          {data && <History historyData={data.expenses} />}
        </div>
      </div>
    </Wrapper>
  );
}
