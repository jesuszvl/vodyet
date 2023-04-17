import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./utils/firebaseConfig";
import { useRouter } from "next/router";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import BaseButton from "../src/components/BaseButton/BaseButton";
import TextInput from "../src/components/TextInput/TextInput";
import styles from "../src/styles/Login.module.scss";

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
      console.log("Successfully signed up");
      const user = userCredential.user;
      console.log("User:", user);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const renderSignUp = () => {
    return (
      <form onSubmit={handleSignUp}>
        <div className={styles["form-fields"]}>
          <TextInput
            label={"Email:"}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextInput
            label={"Password:"}
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
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <div className={styles.title}>Registrate gratis</div>
        {renderSignUp()}
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
