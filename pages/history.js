import { useEffect, useState } from "react";
import useSWR from "swr";

import { API_BASE_URL } from "../config/api";
import auth from "../src/utils/firebaseConfig";

import History from "../src/components/History/History";
import styles from "../src/styles/History.module.scss";
import ActionButton from "../src/components/ActionButton/ActionButton";
import Wrapper from "../src/components/Wrapper/Wrapper";
import { useRouter } from "next/router";

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
        {data && <History historyData={data.expenses} />}
      </div>
    </Wrapper>
  );
}
