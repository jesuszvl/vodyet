import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";

import styles from "../src/styles/Login.module.scss";
import BaseButton from "../src/components/BaseButton/BaseButton";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import TextInput from "../src/components/TextInput/TextInput";
import Link from "next/link";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Successfully logged in");
      const user = userCredential.user;
      console.log("User:", user);
      setUserEmail(user.email);
      setLoggedIn(true);
      router.push("/me");
    } catch (error) {
      console.log(error);
    }
  };

  const renderLogin = () => {
    return (
      <>
        <form onSubmit={handleLogin} className={styles["login-form"]}>
          <div className={styles["form-fields"]}>
            <TextInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <BaseButton text="INICIAR SESIÓN" type="submit" />
          <span>
            ¿No tienes cuenta? <Link href={"/signup"}>¡Crea una hoy!</Link>
          </span>
        </form>
      </>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Header />
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
        {renderLogin()}
      </div>
      <Footer />
    </div>
  );
}

export default Index;
