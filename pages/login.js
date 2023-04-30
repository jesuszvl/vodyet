import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";

import styles from "../src/styles/Login.module.scss";
import Wrapper from "../src/components/Wrapper/Wrapper";
import TextInput from "../src/components/TextInput/TextInput";
import BaseButton from "../src/components/BaseButton/BaseButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUserEmail(user.email);
      setLoggedIn(true);
      router.push("/history");
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
        </form>
      </>
    );
  };

  return (
    <Wrapper showMenu showFooter>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>Accede a tu cuenta</div>
          <div className={styles.subtitle}>
            Ingresa tu correo electrónico y contraseña para continuar
          </div>
        </div>
        {renderLogin()}
      </div>
    </Wrapper>
  );
}
