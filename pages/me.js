import { useState, useEffect } from "react";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";

import styles from "../src/styles/Login.module.scss";
import BaseButton from "../src/components/BaseButton/BaseButton";
import Wrapper from "../src/components/Wrapper/Wrapper";

function Me() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        router.push("/");
      }
    });

    return unsubscribe;
  }, []);

  const renderMePage = () => {
    return loggedIn ? (
      <div>
        <BaseButton onClick={() => router.push("/history")} text="VER GASTOS" />
        <BaseButton onClick={() => auth.signOut()} text="CERRAR SESIÓN" />
        {userEmail}
      </div>
    ) : null;
  };

  return (
    <Wrapper showFooter showMenu>
      <div className={styles.content}>{renderMePage()}</div>
    </Wrapper>
  );
}

export default Me;
