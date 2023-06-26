import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import useSWR from "swr";

import { API_BASE_URL } from "../config/api";
import History from "../src/components/History/History";
import PageContainer from "../src/components/PageContainer/PageContainer";
import Wrapper from "../src/components/Wrapper/Wrapper";
import { useUserStore } from "../src/store/userStore";
import styles from "../src/styles/Dashboard.module.scss";
import { trackPageView } from "../src/utils/analytics";
import auth from "../src/utils/firebaseConfig";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const [userZus] = useUserStore((state) => [state.user]);
  const [user, setUser] = useState(null);
  const { data, error } = useSWR(
    user ? API_BASE_URL + `/api/expenses?userId=${user.id}` : null,
    fetcher
  );

  // Tracking Page View
  useEffect(() => {
    setUser(userZus);
    trackPageView("/dashboard");
  }, []);

  if (!data)
    return (
      <div className={styles.spinner}>
        <MutatingDots
          height="100"
          width="100"
          color="#ffffff"
          secondaryColor="#ffffff"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );

  console.log(user);
  return (
    <PageContainer title="VODYET | Mis Gastos">
      <div className={styles.content}>
        <div className={styles.history}>
          {data && <History historyData={data.expenses} />}
        </div>
      </div>
    </PageContainer>
  );
}
