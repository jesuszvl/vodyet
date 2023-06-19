import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PageContainer from "../src/components/PageContainer/PageContainer";
import styles from "../src/styles/Index.module.scss";
import { supabaseClient } from "../src/supabase/client";
import { trackPageView } from "../src/utils/analytics";

function Me() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSessionUser = async () => {
      const { data, error } = await supabaseClient.auth.getSession();
      const user = data?.session?.user;
      if (user) {
        setUser(user);
      } else {
        router.push("/login");
      }
    };

    fetchSessionUser();
  }, [router]);

  // Tracking Page View
  useEffect(() => {
    trackPageView("/me");
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.push("/login");
  };

  return (
    <PageContainer title="VODYET | Mi Cuenta">
      <div className={styles.content}>
        <h2>Mi Cuenta</h2>
        {user && (
          <>
            <p>Email: {user.email}</p>
            <button onClick={() => handleSignOut()}>Cerrar Sesion</button>
          </>
        )}
      </div>
    </PageContainer>
  );
}

export default Me;
