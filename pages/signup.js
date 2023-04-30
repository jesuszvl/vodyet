import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";
import BaseButton from "../src/components/BaseButton/BaseButton";
import TextInput from "../src/components/TextInput/TextInput";
import styles from "../src/styles/Login.module.scss";
import Wrapper from "../src/components/Wrapper/Wrapper";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const renderSignUp = () => {
    return (
      <form onSubmit={handleSignUp} className={styles["login-form"]}>
        <div className={styles["form-fields"]}>
          <TextInput
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <BaseButton text="CREAR CUENTA" type="submit" />
      </form>
    );
  };

  return (
    <Wrapper showFooter showMenu>
      <div className={styles.content}>
        <div className={styles.description}>
          <div className={styles.title}>Crea tu nueva cuenta</div>
          <div className={styles.subtitle}>
            Registrate y empieza a utilizar Vodyet para controlar tus gastos.
          </div>
        </div>
        {renderSignUp()}
      </div>
    </Wrapper>
  );
}

export default SignUp;
