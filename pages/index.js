import { useState, useEffect } from "react";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";

import styles from "../src/styles/Login.module.scss";
import Wrapper from "../src/components/Wrapper/Wrapper";
import BaseButton from "../src/components/BaseButton/BaseButton";
import Link from "next/link";

function Index() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
        setLoggedIn(true);
        router.push("/me");
      } else {
        setLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Wrapper showMenu showFooter>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>
            ¡Vive sin pedos de varo con <b>Vodyet!</b>
          </div>
          <div className={styles.subtitle}>
            La solución para presupuestar, ahorrar y entender tus finanzas
            personales.
          </div>
        </div>
        <br></br>
        <Link href={"/login"}>
          <BaseButton text={"INICIAR SESIÓN"}></BaseButton>
        </Link>
      </div>
    </Wrapper>
  );
}

export default Index;
