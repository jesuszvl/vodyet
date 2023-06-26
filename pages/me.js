import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import BaseButton from "../src/components/BaseButton/BaseButton";
import PageContainer from "../src/components/PageContainer/PageContainer";
import { useUserStore } from "../src/store/userStore";
import styles from "../src/styles/Index.module.scss";
import { supabaseClient } from "../src/supabase/client";
import { trackPageView } from "../src/utils/analytics";

function Me() {
  const router = useRouter();

  const [userZus, setUserZus] = useUserStore((state) => [
    state.user,
    state.setUser,
  ]);
  const [user, setUser] = useState(null);

  const getUser = () => {};

  // Tracking Page View
  useEffect(() => {
    if (!userZus) {
      router.push("/login");
    }
    setUser(userZus);
    trackPageView("/me");
  }, [userZus, setUser]);

  //Magic Link Login Side Effect
  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      // handle auth state changes
      if (event === "SIGNED_IN") {
        // user signed in
        setUserZus(session.user);
      }
    });
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
    setUser(null);
    setUserZus(null);
    router.push("/login");
  };

  const renderUserInfo = () => {
    return (
      <div>
        <BaseButton
          text="Mis Gastos"
          onClick={() => router.push("/dashboard")}
        ></BaseButton>
        <p>Email: {user.email}</p>
        <BaseButton
          text="Cerrar Sesión"
          onClick={() => handleSignOut()}
          isPink
        ></BaseButton>
      </div>
    );
  };

  return (
    <PageContainer title="VODYET | Mi Cuenta">
      <div className={styles.content}>
        <h2>Mi Cuenta</h2>
        {user && renderUserInfo()}
      </div>
    </PageContainer>
  );
}

export default Me;
