import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../src/utils/firebaseConfig";

import { useRouter } from "next/router";
import Link from "next/link";

import Wrapper from "../src/components/Wrapper/Wrapper";
import UserForm from "../src/components/UserForm/UserForm";

import styles from "../src/styles/Index.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/me");
      }
    });

    return unsubscribe;
  }, [router]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      router.push("/history");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className={styles.content}>
        <UserForm
          title="Accede a tu cuenta"
          subtitle="Ingresa tu correo electrónico y contraseña para continuar"
          handleSubmit={handleLogin}
          submitText={"Iniciar Sesión"}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        <span>
          ¿No tienes cuenta?{" "}
          <Link href={"/signup"}>
            <b>¡Crea una hoy!</b>
          </Link>
        </span>
      </div>
    </Wrapper>
  );
}
