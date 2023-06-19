import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import useSWR from "swr";

import { API_BASE_URL } from "../config/api";
import History from "../src/components/History/History";
import Wrapper from "../src/components/Wrapper/Wrapper";
import styles from "../src/styles/Dashboard.module.scss";
import { trackPageView } from "../src/utils/analytics";
import auth from "../src/utils/firebaseConfig";

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

  // Tracking Page View
  useEffect(() => {
    trackPageView("/dashboard");
  }, []);

  const isUserLoggedIn = userId !== null;

  if (!data)
    return (
      <div className={styles.spinner}>
        <MutatingDots
          height="100"
          width="100"
          color="#0e7059"
          secondaryColor="#0e7059"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

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
