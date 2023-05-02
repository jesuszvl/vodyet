import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../src/utils/firebaseConfig";
import { useRouter } from "next/router";
import Wrapper from "../src/components/Wrapper/Wrapper";
import UserForm from "../src/components/UserForm/UserForm";

import styles from "../src/styles/Index.module.scss";

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
      if (user) router.push("/me");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper showFooter>
      <div className={styles.content}>
        <UserForm
          title="Registrate con nosotros"
          subtitle="Ingresa tu correo electrónico y contraseña para continuar"
          handleSubmit={handleSignUp}
          submitText={"Crear Cuenta"}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </div>
    </Wrapper>
  );
}

export default SignUp;
