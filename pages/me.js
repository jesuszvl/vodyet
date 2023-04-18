import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";

import styles from "../src/styles/Login.module.scss";
import BaseButton from "../src/components/BaseButton/BaseButton";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";

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
        <b>Usuario:</b> {userEmail}{" "}
        <BaseButton onClick={() => router.push("/history")} text="VER GASTOS" />
        <BaseButton onClick={() => auth.signOut()} text="CERRAR SESIÓN" />
      </div>
    ) : null;
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{renderMePage()}</div>
      <Footer />
    </div>
  );
}

export default Me;
